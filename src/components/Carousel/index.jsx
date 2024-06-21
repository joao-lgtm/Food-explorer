import { useEffect, useState } from "react";
import { Card } from "../Card";
import { Container, ContainerCarousel } from "./style";
import { api } from "../../services/api";

export function Carousel({ title = "refeição" }) {
    const [dishes, setDishes] = useState();
    const [dishesName, setDishesName] = useState("");
    const [ingredientsName, setIngredientsName] = useState("");

    useEffect(() => {
        async function handleDishes() {
            const response = await api.get(`/dishes?dishes_name=${dishesName}&ingredients_name=${ingredientsName}`, { withCredentials: true });
            setDishes(response.data);
        }

        handleDishes()
    }, [])


    return (
        <Container>
            <div>
                <h2>{title}</h2>
            </div>
            <ContainerCarousel>
                {dishes && dishes.map((pratos, index) => (
                    <Card key={index} id={pratos.id} name={pratos.name} liked={pratos.liked} price={pratos.price} />
                ))}
            </ContainerCarousel>
        </Container>
    );
}