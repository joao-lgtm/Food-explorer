import { Input } from "../../components/input";
import { Container } from "./style";

export function SingIn(){
    return(
        <Container>
            <Input 
                nameInput="email"
                label="Email"
                placeholder="Exemplo: exemplo@exemplo.com.br"
            />
        </Container>
    );
}