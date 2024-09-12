import { Container, Details, Main, Message, Orders, OrderStatus, Status, StatusBall } from "./style";
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { dateFormatad } from "../../utils/dateFormated";
import { useNavigate } from "react-router-dom";
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";
import { CustomSelect } from "../../components/DropDown";

export function MyOrders() {
    const [data, setData] = useState();
    const navigation = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        async function handleOrders() {
            if ([USER_ROLE.ADMIN].includes(user.role)) {
                const response = await api.get('/salesOrder/all', { withCredentials: true })
                setData(response.data);
            }
            else if ([USER_ROLE.CLIENT].includes(user.role)) {
                const response = await api.get('/salesOrder/user/all', { withCredentials: true })
                setData(response.data);
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
                <h2 className="large-screen-text"> Histórico de pedidos</h2>
                <h2 className="small-screen-text">Pedidos</h2>
                {!data &&
                    <Message> Não ha pedidos </Message>
                }
                <div className="container">
                    <table>
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Código</th>
                                <th>Detalhamento</th>
                                <th>Data e hora</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((orders, index) => (
                                <tr key={Number(index)}>
                                    <td>
                                        {[USER_ROLE.ADMIN].includes(user.role) &&
                                            <CustomSelect status={orders.status} statusName={status(orders.status)} />
                                        }
                                        {[USER_ROLE.CLIENT].includes(user.role) &&
                                            <div>
                                                <StatusBall data-status={orders.status} />
                                                <span> {status(orders.status)} </span>
                                            </div>
                                        }
                                    </td>
                                    <td>{orders.id}</td>
                                    <td>{orders.details.map(detail => `${detail.quantity} x ${detail.name}`).join(", ")}</td>
                                    <td>{dateFormatad(orders.created_at)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div>
                        {data && data.map((orders, index) => (
                            <Orders key={Number(index)}>
                                <Status data-client={user.role}>
                                    <span>{orders.id}</span>
                                    {[USER_ROLE.CLIENT].includes(user.role) &&
                                        <OrderStatus >
                                            <StatusBall data-status={orders.status} />
                                            <span> {status(orders.status)} </span>
                                        </OrderStatus>
                                    }
                                    <span>{dateFormatad(orders.created_at)}</span>
                                </Status>
                                <Details key={Number(index)} >
                                    {orders.details.map(detail => `${detail.quantity} x ${detail.name}`).join(", ")}
                                </Details>

                                {[USER_ROLE.ADMIN].includes(user.role) &&
                                    <CustomSelect status={orders.status} statusName={status(orders.status)} />
                                }
                            </Orders>
                        ))}
                    </div>
                </div>


                {/* {[USER_ROLE.ADMIN].includes(user.role) &&
                    data && data.map((orders, index) => (
                        <Orders key={Number(index)}>
                            <Infos>
                                <span>{orders.id}</span>
                                <span>{dateFormatad(orders.created_at)}</span>
                            </Infos>
                            <Details key={Number(index)} >
                                {orders.details.map(detail => `${detail.quantity} x ${detail.name}`).join(", ")}
                            </Details>

                          
                        </Orders>
                    ))} */}

            </Main>
            <Footer />
        </Container>
    )
}