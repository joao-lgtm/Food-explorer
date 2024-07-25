import { useEffect, useState } from "react";
import { Back } from "../../components/Back";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Container, Label, Main, NewIgredients, PreviewIMG } from "./style";
import { FiUpload } from "react-icons/fi";
import { api } from "../../services/api";
import { Ingredients } from "../../components/Ingredients";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { toast } from "react-toastify";

export function NewDisher() {
    const [data, setData] = useState([]);
    const [file, setFile] = useState(null);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [previewUrl, setPreviewUrl] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState('');

    useEffect(() => {
        async function getCategory() {
            try {
                const response = await api.get('/category', { withCredentials: true });
                const categories = response.data;
                setData(categories);
            } catch (error) {
                console.error(error);
            }
        }

        getCategory();
    }, []);

    const handleImageChange = (event) => {
        const file = event[0];
        if (file) {
            const blobUrl = URL.createObjectURL(file);
            setFile(file);
            setPreviewUrl(blobUrl);
        }
    };

    function handleAddNewIngredient() {
        if (newIngredient === "") {
            return toast.error("Digite o nome válido");
        }
        setIngredients((prevState) => [...prevState, { name: newIngredient }]);
        setNewIngredient("");
    }

    function handleRemoveIngredient(deleted) {
        setIngredients((prevState) => prevState.filter((ingredient) => ingredient.name !== deleted));
    }


    async function handleAddNewDisher() {
        if (!file) {
            return toast.error("Escolha uma imagem para o prato");
        }
        if (!name) {
            return toast.error("Digite um nome");
        }
        if (!category) {
            return toast.error("Escolha uma categoria");
        }
        if (newIngredient) {
            return toast.error("Você deixou uma tag no campo para adicionar. Adicione uma tag para prosseguir");
        }
        if (ingredients.length === 0) {
            return toast.error("Adicione pelo menos um ingrediente");
        }
        if (!price) {
            return toast.error("Adicione um preço");
        }
        if (!description) {
            return toast.error("Adicione uma descrição");
        }
        const dataToSend = new FormData();
        dataToSend.append('img', file);
        dataToSend.append('name', name);
        dataToSend.append('category_id', category);
        dataToSend.append('ingredients', JSON.stringify(ingredients));
        dataToSend.append('price', price.replace(",", "."));
        dataToSend.append('description', description);

        try {
            await api.post("/dishes", dataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }, withCredentials: true
            });
            toast.success("Prato adicionado com sucesso!");
        } catch (error) {
            console.log(error.response.status === 401)
            if (error.response.status === 401){
                toast.error("Você não tem permissão para criar pratos");
            }
           
        }
    }


    return (
        <Container>
            <Header />
            <Main>
                <Back />
                <h2>Novo Prato</h2>
                <form>
                    {previewUrl && (
                        <PreviewIMG>
                            <img src={previewUrl} alt="Preview" />
                        </PreviewIMG>
                    )}
                    <Input
                        label="Imagem do prato"
                        nameInput="Imagem do prato"
                        placeholder="Selecione imagem"
                        type="file"
                        icon={FiUpload}
                        onChange={(e) => handleImageChange(e.target.files)}
                    />
                    <Input
                        label="Nome"
                        nameInput="nome"
                        placeholder="Ex.: Salada Ceasar"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Select
                        label="Categoria"
                        name="category"
                        data={data}
                        setItem={setCategory}
                    />
                    <div>
                        <Label>Ingredientes</Label>
                        <NewIgredients>
                            {ingredients.map((ingredient, index) => (
                                <Ingredients
                                    key={String(index)}
                                    value={ingredient.name}
                                    onClick={() => handleRemoveIngredient(ingredient.name)}
                                />
                            ))}
                            <Ingredients
                                isNew
                                placeholder="Adicionar"
                                value={newIngredient}
                                onChange={(e) => setNewIngredient(e.target.value)}
                                onClick={handleAddNewIngredient}
                            />
                        </NewIgredients>
                    </div>
                    <Input
                        label="Preço"
                        nameInput="preco"
                        placeholder="R$ 00,00"
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        mask="99,99"
                    />
                    <TextArea
                        label="Descrição"
                        name="description"
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Button onClick={handleAddNewDisher} name="Salvar alterações" />
                </form>
            </Main>
            <Footer />
        </Container>
    );
}
