import { Back } from "../../components/Back";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Main } from "./style";

export function NewDisher() {
    return (
        <Container>
            <Header />
            <Main>
                <Back />
                <h2>Novo Prato</h2>
                <form>
                    <Input
                        label="Imagem do prato"
                        placeholder="selecione imagem"
                        type="file"
                    />
                </form>

            </Main>
            <Footer />
        </Container>
    )
}