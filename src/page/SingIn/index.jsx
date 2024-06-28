import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, CreateAccount, Form } from "./style";
import  Logo  from "../../assets/main.svg";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function SingIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();
    
    function handleSignIn(email, password){
        signIn({email, password});
    }
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
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    required
                    
                />
                 <Input
                    nameInput="Senha"
                    label="Senha"
                    placeholder="No minimo 6 caracteres"
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