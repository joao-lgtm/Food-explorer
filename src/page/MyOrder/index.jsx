import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Back, Container, Detail, Main } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { IoIosArrowBack } from "react-icons/io";
import { Order } from "../../components/Order";
import { PaymentMethod } from "../../components/Payment";
import { useState } from "react";

export function MyOrder() {
    const { id } = useParams();
    const [paymentObservetion, setPaymentObservetion] = useState(false);

    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    return (
        <Container>
            <Header />
            <Main>
                <Detail>
                    <Back onClick={handleBack}>
                        <IoIosArrowBack size={20} /> <span>Voltar</span>
                    </Back>

                    <Order id={id} />

                    <div className="Advanced">
                        <Button name="Avançar" onClick={() => setPaymentObservetion(true)} />
                    </div>
                </Detail>
                <PaymentMethod setPaymentObservetion={setPaymentObservetion} paymentObservetion={paymentObservetion} />

            </Main>

            <Footer />
        </Container>
    );
}
