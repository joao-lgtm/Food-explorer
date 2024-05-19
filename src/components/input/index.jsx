import { Container } from "./style";

export function Input ({nameInput,label,placeholder, icon: Icon, ...rest}){
    return(
        <Container>
            {label && <label htmlFor={nameInput}>{label}</label>}
            <div >
                {Icon && <Icon/>}
                <input {...rest} id={nameInput} placeholder={placeholder}/>
            </div>
        </Container>
    )
}