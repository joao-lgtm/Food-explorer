import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, CreateAccount, Form } from "./style";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Logo } from "../../components/Logo";

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
                <Input
                    nameInput="email"
                    label="Email"
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    required
                    
                />
                 <Input
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