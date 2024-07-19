import { Container } from "./style";

export function TextArea({ name, label, ...rest }) {
    return (
        <Container>
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest} />
        </Container>
    )
}