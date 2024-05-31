import { Container } from "./style";

export function Input ({nameInput,label,placeholder, icon: Icon, ...rest}){
    return(
        <Container>
            {label && <label htmlFor={nameInput}>{label}</label>}
            <div >
                {Icon && <Icon size={24} color="white"/>}
                <input {...rest} id={nameInput} placeholder={placeholder}/>
            </div>
        </Container>
    )
}