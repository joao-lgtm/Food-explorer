import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, DetailAndPayment, Main } from "./style";
import { useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { Order } from "../../components/Order";
import { PaymentMethod } from "../../components/Payment";
import { useEffect, useState } from "react";

export function MyOrder() {
    const { id } = useParams();
    const [paymentObservetion, setPaymentObservetion] = useState(false);
    const [observetionStatus, setObservetionStatus] = useState(false);
    const [statusOrder, setStatusOrder] = useState();

    useEffect(() => {
        if(observetionStatus === true){
            window.location.reload();
        }
    }, [observetionStatus]);

    return (
        <Container>
            <Header />
            <Main>
                <DetailAndPayment>
                    <Order id={id} setStatusOrder={setStatusOrder} />
                    <PaymentMethod
                        setPaymentObservetion={setPaymentObservetion}
                        paymentObservetion={paymentObservetion}
                        statusOrder={statusOrder}
                        id={id} 
                        setObservetionStatus={setObservetionStatus}/>
                </DetailAndPayment>
                <div className="advanced">
                    <Button name="Avançar" onClick={() => setPaymentObservetion(true)} />
                </div>
            </Main>
            <Footer />
        </Container>
    );
}
