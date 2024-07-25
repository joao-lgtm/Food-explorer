import { Container } from "./style";

export function Button({ name,color, icon: Icon, ...rest }) {
    return (
        <Container color={color} type="button" {...rest}>
            {Icon && <Icon size={24} color="white" />} <span>{name}</span>
        </Container>
    );
}