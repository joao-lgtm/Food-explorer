import { Container, Main, Orders } from "./style";
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer";

export function MyOrders() {
    return (
        <Container>
            <Header />
            <Main>

                <h2>Pedidos</h2>
                    <Orders>
                        <div></div>                   
                    </Orders>
            </Main>
            <Footer />
        </Container>
    )
}