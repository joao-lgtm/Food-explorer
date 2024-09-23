import { Button } from "../../components/Button";
import { Container, CreateAccount, Form } from "./style";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Logo } from "../../components/Logo";
import { InputComponent } from "../../components/Input";

export function SingIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signIn } = useAuth();
    
    function handleSignIn(email, password){
        signIn({email, password});
    }
    return (
        <Container>

            <Logo ImgSize="2.688rem" FontSize="2.328rem"/>
            <Form>
                <h1>Faça Login</h1>
                <InputComponent
                    nameInput="email"
                    label="Email"
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    required
                    
                />
                 <InputComponent
                    nameInput="Senha"
                    label="Senha"
                    placeholder="senha"
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    required
                    
                />

                <Button 
                    name="entrar"
                    onClick={() => handleSignIn(email, password)}
                />

                <CreateAccount to="/SingUp">Ainda não tem uma conta?</CreateAccount>
            </Form>
        </Container>
    );
}