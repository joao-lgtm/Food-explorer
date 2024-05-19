import { Container } from "./style";

export function Button ({name, ...rest}) {
    return(
        <Container type="button" {...rest}>
            <span>{name}</span>
        </Container>
    );
}