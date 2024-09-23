import { Container, InputMask } from "./style";

export function InputComponent({ nameInput, label, placeholder, icon: Icon, type, ...rest }) {

    return (
        <Container>
            {label && <label htmlFor={nameInput}>{label}</label>}
            <div >
                {Icon && <Icon color="gray" size={24} />}
                {type === "file" && 
                    <label htmlFor={nameInput}>{placeholder}</label>
                }
                <InputMask data-type={type} type={type} {...rest} id={nameInput} placeholder={placeholder} />
            </div>
        </Container>
    )
}