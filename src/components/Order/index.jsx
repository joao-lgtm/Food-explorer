import { Count, Description, Dishes, DishesContainer, Container, Quantity, Remove } from "./style";
import { LuMinus, LuPlus } from "react-icons/lu";
import { FaRegTrashCan } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useOrder } from "../../hooks/order";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Order({ id }) {
    const { handleOrderById, orderById, removeDetail } = useOrder();
    const [orderObservetion, setOrderObservetion] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        handleOrderById(id);
    }, [id, orderObservetion]);


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
                    <Dishes key={index}>
                        <img src={handleImg(details.img)} alt={details.description} />
                        <Description>
                            <span>{details.description}</span>
                            <div></div>
                            <div>
                                <span>R$ {details.price}</span>
                            </div>
                        </Description>

                        <Quantity>
                            <Count>
                                <LuMinus onClick={() => count("subtraction", index)} cursor="pointer" size={12} />
                                {details.quantity}
                                <LuPlus onClick={() => count("sum", index)} cursor="pointer" size={12} />
                            </Count>

                            <Remove onClick={() => handleRemove(orderById.id, details.id)}>
                                <FaRegTrashCan color="red" /> <span>remover</span>
                            </Remove>
                        </Quantity>
                    </Dishes>
                ))}
            </DishesContainer>
            <div>
                <span>Total: R$ {orderById && orderById.price}</span>
            </div>
        </Container>
    )
}