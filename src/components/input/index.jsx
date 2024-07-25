import { Container, InputMask } from "./style";

export function Input({ nameInput, label, placeholder, icon: Icon, type, ...rest }) {
    return (
        <Container>
            {label && <label htmlFor={nameInput}>{label}</label>}
            <div >
                {Icon && <Icon size={24} color="white" />}
                {type === "file" && 
                    <label htmlFor={nameInput}>{placeholder}</label>
                }
                <InputMask data-type={type} type={type} {...rest} id={nameInput} placeholder={placeholder} />
            </div>
        </Container>
    )
}