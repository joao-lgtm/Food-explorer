import { Button } from "../../components/Button";
import { Input } from "../../components/input";
import { Container, Form } from "./style";
import  Logo  from "../../assets/main.svg";

export function SingIn() {
    return (
        <Container>

            <div>
                <img src={Logo} />
            </div>
            <Form>
                <Input
                    nameInput="email"
                    label="Email"
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                />
                 <Input
                    nameInput="Senha"
                    label="Senha"
                    placeholder="No minimo 6 caracteres"
                />

                <Button 
                    name="entrar"
                />

                <a href="">Ainda não tem uma conta?</a>
            </Form>
        </Container>
    );
}