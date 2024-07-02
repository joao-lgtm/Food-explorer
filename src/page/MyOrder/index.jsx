import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Back, Container, Main } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { IoIosArrowBack } from "react-icons/io";
import { Order } from "../../components/Order";

export function MyOrder() {
    const { id } = useParams();

    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    return (
        <Container>
            <Header />
            <Main>
                <Back onClick={handleBack}>
                    <IoIosArrowBack size={20} /> <span>voltar</span>
                </Back>

                <Order id={id} />
                
                <div className="Advanced">
                    <Button name="Avançar" />
                </div>
            </Main>
            <Footer />
        </Container>
    );
}
