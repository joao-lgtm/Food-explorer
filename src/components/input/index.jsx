import { Container } from "./style";

export function Input ({nameInput,label,placeholder,icon}){
    return(
        <Container>
            {label && <label htmlFor={nameInput}>{label}</label>}
            <div>
                {icon && <img src="" alt="" />}
                <input id={nameInput} placeholder={placeholder}/>
            </div>
        </Container>
    )
}