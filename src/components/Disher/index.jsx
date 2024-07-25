import { Container, Description, Img, Ingredients, OrderControls, Title } from './style'
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Button } from '../../components/Button';
import { PiReceiptLight } from "react-icons/pi";
import { Count } from '../../components/Count';
import { useAuth } from '../../hooks/auth';
import { IngredientTags } from '../../components/IngredientTags';
import { useOrder } from '../../hooks/order';
import { USER_ROLE } from '../../utils/roles';
import { useNavigate } from 'react-router-dom';

export function Disher({ id }) {
    const [disher, setDisher] = useState();
    const [amount, setAmount] = useState(1);
    const { signOut, user } = useAuth();
    const { handleOrder } = useOrder();
    const navigation = useNavigate();
    

    function editDisher(id) {
        navigation(`/disher/edit/${id}`);
    }


    useEffect(() => {
        async function getDisher() {
            try {
                const response = await api.get(`dishes/${id}`, { withCredentials: true })
                setDisher(response.data);
            } catch (error) {
                if (error.response?.status === 401) {
                    signOut();
                    window.location.href = '/';
                } else {
                    console.error("Erro ao buscar a quantidade:", error);
                }
            }
        }

        getDisher();
    }, []);

    const img = disher?.img ? `${api.defaults.baseURL}/files/${disher.img}` : null;

    return (
        <Container>
            {disher &&
                <>
                    <Img>
                        <img src={img} alt='imagem do prato' />
                    </Img>

                    <Title>
                        <h2>{disher.name}</h2>
                    </Title>

                    <Description>
                        <span>{disher.description}</span>
                    </Description>

                    <Ingredients>
                        {disher && disher.ingredients.map((ingredient, index) => (
                            <IngredientTags key={index} name={ingredient.name} />
                        ))}
                    </Ingredients>

                    <OrderControls>
                        {[USER_ROLE.CLIENT].includes(user.role) &&
                            <>
                                <Count setAmount={setAmount} amount={amount} size={24} />
                                <Button
                                    icon={PiReceiptLight}
                                    name={`pedir ° R$ ${(disher.price * amount).toFixed(2)}`}
                                    onClick={() => handleOrder(disher.id, amount, disher.price)}
                                />
                            </>
                        }

                        <Button
                            name={`Editar prato`}
                            onClick={() => editDisher(id)}
                        />

                    </OrderControls>
                </>
            }
        </Container>
    )
}
