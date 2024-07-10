import { Back } from "../../components/Back";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, Main } from "./style";

export function NewDisher() {
    return (
        <Container>
            <Header />
            <Back />
            <Main>
                <h2>Novo Prato</h2>
            </Main>
            <Footer />
        </Container>
    )
}