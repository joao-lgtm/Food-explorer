import { Container, Details, Main, Orders, Status } from "./style";
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { dateFormatad } from "../../utils/dateFormated";

export function MyOrders() {
    const [data, setData] = useState();

    useEffect(() => {
        async function handleOrders() {
            try {
                const response = await api.get('salesOrder/all', { withCredentials: true })
                setData(response.data)

            } catch (error) {
                toast.error("Erro ao buscar pedidos")
            }
        }

        handleOrders();
    }, []);




    return (
        <Container>
            <Header />
            <Main>

                <h2> Histórico de pedidos</h2>

                {data && data.map((orders, index) => (
                    <Orders key={Number(index)}>
                        <Status>
                            <span>Pedido:{orders.id}</span>
                            <span>Status: {orders.status}</span>
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