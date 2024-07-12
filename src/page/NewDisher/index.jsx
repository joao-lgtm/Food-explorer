import { useEffect, useState } from "react";
import { Back } from "../../components/Back";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Container, Main } from "./style";
import { FiUpload } from "react-icons/fi";
import { api } from "../../services/api";

export function NewDisher() {
    const [data, setData] = useState();

    useEffect(() => {
        async function getCategory() {
            try {
                const category = await api.get('/category', { withCredentials: true })
                setData(category.data)
            } catch (error) {
                console.error(error)
            }

        }

        getCategory();
    }, [])


    return (
        <Container>
            <Header />
            <Main>
                <Back />
                <h2>Novo Prato</h2>
                <form>
                    <Input
                        label="Imagem do prato"
                        nameInput="Imagem do prato"
                        placeholder="selecione imagem"
                        type="file"
                        icon={FiUpload}
                    />
                    <Input
                        label="Nome"
                        nameInput="nome"
                        placeholder="Ex.: Salada Ceasar"
                        type="text"
                    />

                    <Select label="category" name="category" data={data}/>

                    <Input
                        label="Preço"
                        nameInput="preco"
                        placeholder="R$ 00,00"
                        type="text"
                        mask="99,99"
                    />
                </form>

            </Main>
            <Footer />
        </Container>
    )
}