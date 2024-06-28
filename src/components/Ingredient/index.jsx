import { Container } from "./style";

export function Ingredient({ name }) {
    return (
        <Container>
            <span>{name}</span>
        </Container>
    )
}