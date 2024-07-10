import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, Detail, Main } from "./style";
import { useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { Order } from "../../components/Order";
import { PaymentMethod } from "../../components/Payment";
import { useState } from "react";
import { Back } from "../../components/Back";

export function MyOrder() {
    const { id } = useParams();
    const [paymentObservetion, setPaymentObservetion] = useState(false);
    return (
        <Container>
            <Header />
            <Main>
                <Back />
                <Detail>
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
