import { useEffect, useState } from "react";
import { Back } from "../../components/Back";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Buttons, Container, ExcludeButton, Label, Main, NewIgredients, PreviewIMG } from "./style";
import { FiUpload } from "react-icons/fi";
import { api } from "../../services/api";
import { Ingredients } from "../../components/Ingredients";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

export function EditDisher() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [OldIngredients, setOldingredients] = useState([])
    const [newIngredient, setNewIngredient] = useState('');
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState(null);
    const [oldImg, setOldImg] = useState("");
    const [previewUrl, setPreviewUrl] = useState('');
    const [remove, setRemove] = useState(false);
    const disherImg = `${api.defaults.baseURL}/files/${oldImg}`;
    const navigation = useNavigate();


    useEffect(() => {
        async function getDisher() {
            try {
                const response = await api.get(`/dishes/${id}`, { withCredentials: true });
                const dish = response.data;
                setName(dish.name);
                setCategory(dish.category_id);
                setPrice(dish.price);
                setDescription(dish.description);
                setOldingredients(dish.ingredients);
                setOldImg(dish.img);
            } catch (error) {
                console.error(error);
            }
        }

        async function getCategory() {
            try {
                const response = await api.get('/category', { withCredentials: true });
                const categories = response.data;
                setData(categories);
            } catch (error) {
                console.error(error);
            }
        }
        getDisher();
        getCategory();
    }, []);

    useEffect(() => {
        async function getDisher() {
            try {
                const response = await api.get(`/dishes/${id}`, { withCredentials: true });
                const dish = response.data;
                setName(dish.name);
                setCategory(dish.category_id);
                setPrice(dish.price);
                setDescription(dish.description);
                setOldingredients(dish.ingredients);
                setOldImg(dish.img);
            } catch (error) {
                console.error(error);
            }
        }

        async function getCategory() {
            try {
                const response = await api.get('/category', { withCredentials: true });
                const categories = response.data;
                setData(categories);
            } catch (error) {
                console.error(error);
            }
        }
        getDisher();
        getCategory();
    }, [remove]);



    const handleImageChange = (event) => {
        const file = event[0];
        if (file) {
            const blobUrl = URL.createObjectURL(file);
            setFileName(file.name)
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

    async function handleRemoveOldIngredient(deleted) {
        try {
            await api.delete(`/ingredients/${deleted}`, { withCredentials: true });
            setRemove(!remove);
            toast.success("Ingrediente Removido com sucesso");
        } catch (error) {
            console.error(error);
        }
    }


    async function handleEditDisher() {
        if (!name) {
            return toast.error("Digite um nome");
        }
        if (!category) {
            return toast.error("Escolha uma categoria");
        }
        if (newIngredient) {
            return toast.error("Você deixou uma tag no campo para adicionar. Adicione uma tag para prosseguir");
        }
        if (!price) {
            return toast.error("Adicione um preço");
        }
        if (!description) {
            return toast.error("Adicione uma descrição");
        }

        let formattedPrice = price.toString().match(/,/) ? price.toString().replace(",", ".") : price;


        const dataToSend = new FormData();
        dataToSend.append('img', file);
        dataToSend.append('id', id);
        dataToSend.append('name', name);
        dataToSend.append('category_id', category);
        dataToSend.append('ingredients', JSON.stringify(ingredients));
        dataToSend.append('price', formattedPrice);
        dataToSend.append('description', description);

        try {
            await api.patch("/dishes/update", dataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }, withCredentials: true
            });
            toast.success("Prato atualizado com sucesso!");
            navigation("/");
        } catch (error) {
            if (error.response.status === 401) {
                toast.error("Você não tem permissão para criar pratos");
            }

        }
    }

    async function handleDeleteDisher() {
        try {
            await api.delete(`/dishes/${id}`, {
                withCredentials: true
            });
            toast.success("Prato exluido com sucesso!");
            navigation("/");
        } catch (error) {
            toast.error("Erro a excluir prato");
        }
    }


    return (
        <Container>
            <Header />
            <Main>
                <Back />
                <h2>Editar Prato</h2>
                <form>
                    {oldImg && !previewUrl && (
                        <PreviewIMG>
                            <img src={disherImg} alt="Preview" />
                        </PreviewIMG>
                    )}
                    {previewUrl && (
                        <PreviewIMG>
                            <img src={previewUrl} alt="Preview" />
                        </PreviewIMG>
                    )}
                    <div className="ImgAndNameAndCategory">
                        <Input
                            label="Imagem do prato"
                            nameInput="Imagem do prato"
                            placeholder={file ? fileName : "selecione uma imagem"}
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
                    </div>
                    <div className="igredientsAndPrice">
                        <div className="igredients">
                            <Label>Ingredientes</Label>
                            <NewIgredients>
                                {OldIngredients.map((ingredient, index) => (
                                    <Ingredients
                                        key={String(index)}
                                        value={ingredient.name}
                                        onClick={() => handleRemoveOldIngredient(ingredient.id)}
                                    />
                                ))}
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
                    </div>
                    <TextArea
                        label="Descrição"
                        name="description"
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Buttons>
                        <Button onClick={handleDeleteDisher} color="black" name="Exluir prato" />
                        <Button onClick={handleEditDisher} name="Salvar alterações" />
                    </Buttons>
                </form>
            </Main>
            <Footer />
        </Container>
    );
}
