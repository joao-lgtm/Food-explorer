import { Count, Description, Dishes, DishesContainer, Container, Quantity, Remove, Address, Total, Presentation } from "./style";
import { LuMinus, LuPlus } from "react-icons/lu";
import { FaRegTrashCan } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useOrder } from "../../hooks/order";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function Order({ id, setStatusOrder }) {
    const { handleOrderById, orderById, removeDetail } = useOrder();
    const [orderObservetion, setOrderObservetion] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        handleOrderById(id);
    }, [id, orderObservetion]);


    useEffect(() => {
        if (orderById) {
            setStatusOrder(orderById.status);
        }
    }, [orderById]);
    
    function handleImg(img) {
        return `${api.defaults.baseURL}/files/${img}`;
    }

    async function count(action, index) {
        const newOrder = { ...orderById };
        if (action === "sum") {
            newOrder.details[index].quantity += 1;
        } else if (action === "subtraction" && newOrder.details[index].quantity > 1) {
            newOrder.details[index].quantity -= 1;
        }
        try {
            await api.patch("details", {
                sales_order_id: newOrder.id,
                detail_id: newOrder.details[index].id,
                quantity: newOrder.details[index].quantity
            }, { withCredentials: true });
            setOrderObservetion(!orderObservetion);
        } catch (error) {
            toast.error("Falha ao alterar a quantidade", error);
        }
    }

    async function handleRemove(sales_order_id, detail_id) {
        await removeDetail(sales_order_id, detail_id);
        setOrderObservetion(!orderObservetion);
        if (orderById.details.length === 1) {
            navigate("/");
        }
    }

    return (
        <Container>
            <h2>Meu pedido</h2>
            <DishesContainer>
                {orderById && orderById.details.map((details, index) => (
                    <Presentation>
                        <Dishes key={index}>
                            <img src={handleImg(details.img)} alt={details.description} />
                            <Description>
                                <div className="detailsAndRemove">
                                    <span> {details.name}</span>
                                    <Remove onClick={() => handleRemove(orderById.id, details.id)}>
                                        <FaRegTrashCan color="red" /> <span>remover</span>
                                    </Remove>
                                </div>
                                <div className="price">
                                    <span>R$ {details.price}</span>
                                </div>
                            </Description>


                        </Dishes>
                        <Quantity>
                            <Count>
                                <LuMinus onClick={() => count("subtraction", index)} cursor="pointer" size={12} />
                                {details.quantity}
                                <LuPlus onClick={() => count("sum", index)} cursor="pointer" size={12} />
                            </Count>
                        </Quantity>
                    </Presentation>
                ))}
            </DishesContainer>
            <Address>
                <h3>Endereco de entrega</h3>
                {orderById && orderById.address.map((address, index) => (
                    <div key={Number(index)}>
                        <span> <b>Rua:</b> {address.street}</span>
                        <span> <b>Bairro:</b> {address.neighborhood}</span>
                        <span><b>Numero:</b> {address.number}</span>
                        <span><b>Cep:</b> {address.zipcode}</span>
                    </div>

                ))}
            </Address>
            <Total>
                <span><b>Total:</b> R$ {orderById && orderById.price}</span>
            </Total>
        </Container>
    )
}