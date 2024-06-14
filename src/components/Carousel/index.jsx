import { Card } from "../Card";
import { Container, ContainerCarousel } from "./style";

export function Carousel({ title = "refeição" }) {

    const pratos_principais = [    {
        id: 1,
        name: "salada Ravnelio",
        price: "47.40",
        liked: true
    },
    {
        id: 2,
        name: "salada Alface",
        price: "47.40",
        liked: true
    },
    {
        id: 3,
        name: "salada Cebola",
        price: "47.40",
        liked: true
    },
    {
        id: 4,
        name: "salada de Rabanete",
        price: "47.40",
        liked: true
    },
    {
        id: 5,
        name: "salada Cenoura",
        price: "47.40",
        liked: true
    },
    {
        id: 6,
        name: "salada de beterraba",
        price: "47.40",
        liked: true
    }]



    return (
        <Container>
            <div>
                <h2>{title}</h2>
            </div>
            <ContainerCarousel>
                {pratos_principais.map((pratos, index) => (
                    <Card key={index} id={pratos.id} name={pratos.name} liked={pratos.liked} price={pratos.price} />
                ))}
            </ContainerCarousel>
        </Container>
    );
}