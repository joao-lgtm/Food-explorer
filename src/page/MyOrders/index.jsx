import { Container, Details, Main, Message, Orders, Status, StatusBall } from "./style";
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { dateFormatad } from "../../utils/dateFormated";
import { useNavigate } from "react-router-dom";
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";

export function MyOrders() {
    const [data, setData] = useState();
    const navigation = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        async function handleOrders() {
            if (USER_ROLE.ADMIN.includes(user?.role)) {
                const response = await api.get('/salesOrder/all', { withCredentials: true })
                setData(response.data);
            }
            else if (USER_ROLE.CLIENT.includes(user?.role)) {
                const response = await api.get('/salesOrder/user/all', { withCredentials: true })
                setData(response.data)
            }
        }

            handleOrders();
        }, []);


    function status(statusOrder) {
        let status
        switch (statusOrder) {
            case statusOrder = 0:
                status = "Pendete"
                break;
            case statusOrder = 1:
                status = "Preparando"
                break;
            case statusOrder = 2:
                status = "Entregue"
                break;
        }

        return status
    }

    return (
        <Container>
            <Header />
            <Main>

                <h2>Pedidos</h2>
                {!data && 
                <Message> Não ha pedidos </Message>
                }
                {data && data.map((orders, index) => (
                    <Orders key={Number(index)}>
                        <Status>
                            <span>{orders.id}</span>
                            <div>
                                <StatusBall data-status={orders.status} /><span> {status(orders.status)} </span>
                            </div>
                            <span>{dateFormatad(orders.created_at)}</span>
                        </Status>
                        <Details key={Number(index)} >
                            {orders.details.map(detail => `${detail.quantity} x ${detail.name}`).join(", ")}
                        </Details>
                    </Orders>
                ))}

            </Main>
            <Footer />
        </Container>
    )
}