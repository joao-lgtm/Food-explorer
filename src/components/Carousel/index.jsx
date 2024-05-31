import { Card } from "../Card";
import { Container, ContainerCarousel } from "./style";

export function Carousel({ title }) {

    const pratos_principais = [{
        name: "salada Ravnelio",
        price: "47.40",
        liked: true
    },
    {
        name: "salada Ravnelio",
        price: "47.40",
        liked: true
    },
    {
        name: "salada Ravnelio",
        price: "47.40",
        liked: true
    },
    {
        name: "salada Ravnelio",
        price: "47.40",
        liked: true
    }]



    return (
        <Container>
            <div>
                {title}
            </div>
            <ContainerCarousel>
                {pratos_principais.map((pratos, index) => (
                    <Card key={index} name={pratos.name} liked={pratos.liked} price={pratos.price} />
                ))}

            </ContainerCarousel>
        </Container>
    );
}