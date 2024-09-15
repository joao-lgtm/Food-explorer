import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, DetailAndPayment, Main } from "./style";
import { useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { Order } from "../../components/Order";
import { PaymentMethod } from "../../components/Payment";
import { useState } from "react";

export function MyOrder() {
    const { id } = useParams();
    const [paymentObservetion, setPaymentObservetion] = useState(false);
    return (
        <Container>
            <Header />
            <Main>
                <DetailAndPayment>
                    <Order id={id} />
                    <PaymentMethod setPaymentObservetion={setPaymentObservetion} paymentObservetion={paymentObservetion} />
                </DetailAndPayment>
                <div className="advanced">
                    <Button name="Avançar" onClick={() => setPaymentObservetion(true)} />
                </div>
            </Main>
            <Footer />
        </Container>
    );
}
