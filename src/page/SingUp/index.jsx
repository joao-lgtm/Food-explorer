import { Input } from "../../components/Input";
import { AccountExists, Container, Form } from "./style";
import Logo from "../../assets/main.svg";
import { Button } from "../../components/Button";

export function SingUp() {
    return (
        <Container>
            <div>
                <img src={Logo} />
            </div>
            <Form>
                <Input
                    nameInput="name"
                    label="Seu nome"
                    placeholder="Exemplo: Maria da Silva"
                />
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
                    name="Criar Conta"
                />

                <AccountExists to="/">Já tenho uma conta</AccountExists>
            </Form>
        </Container>
    )
}