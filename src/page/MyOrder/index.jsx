import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, Main } from "./style";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";

export function MyOrder() {
    const { id } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        async function handleOrder() {
            const response = await api.get(`salesOrder/${id}`, { withCredentials: true });
            setOrder(response.data);
        }
        handleOrder();
    }, [id]);

    function handleImg(img) {
        return `${api.defaults.baseURL}/files/${img}`;
    }

    return (
        <Container>
            <Header />
            <Main>
                <div>
                    <h1>Meu pedido</h1>
                    <div>
                        {order && order.details.map((details, index) => (
                            <div key={index}>
                                <img src={handleImg(details.img)} alt={details.description} />
                                <h2>{details.description}</h2>
                            </div>
                        ))}
                    </div>
                    <div>Total: R$ {order && order.price}</div>
                </div>
            </Main>
            <Footer />
        </Container>
    );
}
