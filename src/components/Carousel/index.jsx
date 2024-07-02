import { Card } from "../Card";
import { Container, ContainerCarousel } from "./style";
import { api } from "../../services/api";

export function Carousel({ title , disher}) {
    return (
        <Container>
            <div>
                <h2>{title}</h2>
            </div>
            <ContainerCarousel>
                {disher && disher.map((dishers, index) => (
                    <Card key={index} id={dishers.id} img={dishers.img} name={dishers.name} liked={dishers.liked} price={dishers.price} />
                ))}
            </ContainerCarousel>
        </Container>
    );
}