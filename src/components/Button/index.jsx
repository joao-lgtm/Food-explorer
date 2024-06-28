import { Container } from "./style";

export function Button({ name, icon: Icon, ...rest }) {
    return (
        <Container type="button" {...rest}>
            {Icon && <Icon size={24} color="white" />} <span>{name}</span>
        </Container>
    );
}