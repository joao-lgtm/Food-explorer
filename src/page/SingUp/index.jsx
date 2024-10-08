import { InputComponent } from "../../components/InputComponets";
import { AccountExists, Address, Container, Form, Infos, PreviousAndNext } from "./style";
import { Button } from "../../components/Button";
import { useState } from "react";
import axios from "axios";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../components/Logo";

export function SingUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUf] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [number, setNumber] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [next, setNext] = useState(false)

    const navigate = useNavigate();

    async function handleFindeByZipcode() {
        try {
            if (!zipcode) {
                toast.error("Preencha o CEP");
                return;
            }
            await axios.get(`https://viacep.com.br/ws/${zipcode}/json/`).then(response => {
                toast.success("CEP encontrado com sucesso");

                setStreet(response.data.logradouro);
                setNeighborhood(response.data.bairro);
                setCity(response.data.localidade);
                setUf(response.data.uf);
            })

        } catch (error) {
            toast.error("Erro ao buscar CEP ou CEP inválido");
        }
    }

    async function handleSignUP() {
        if (!name || !email || !password) {
            toast.error("Preencha os campos do usuario");
            return
        }

        if (password.length < 6) {
            toast.error("Sua senha precisa ter no mínimo 7 caracteres");
            return;
        }

        if (!street ||  !neighborhood ||  !number ||  !city ||  !uf ||  !zipcode) {
            toast.error("Preencha os campos de endereço");
            return
        }
        try {
            await api.post("/users", {
                name,
                email,
                password,
                street,
                neighborhood,
                number,
                city,
                uf,
                zipcode
            });
            toast.success("Usuário criado com sucesso!");
            navigate('/')
        } catch (error) {
            toast.error("Usuário já existe ou houve um problema na criação");
        }
    }

    return (
        <Container>
            <Logo ImgSize="2.688rem" FontSize="2.328rem" />
            <Form>
                <h1>Crie sua conta</h1>
                <Infos data-next={next}>
                    <InputComponent
                        nameInput="name"
                        label="Seu nome"
                        placeholder="Exemplo: Maria da Silva"
                        onChange={e => setName(e.target.value)}
                        required
                    />
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
                        placeholder="No mínimo 6 caracteres"
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        required
                    />
                </Infos>

                <Address data-next={next}>
                    <div className="addressAndZipcode">
                        <InputComponent
                            nameInput="street"
                            label="Rua"
                            value={street}
                            onChange={e => setStreet(e.target.value)}
                            required
                        />
                    </div>
                    <div className="neighborhoodAndNumber">
                        <InputComponent
                            nameInput="neighborhood"
                            label="Bairro"
                            value={neighborhood}
                            onChange={e => setNeighborhood(e.target.value)}
                            required
                        />
                    </div>
                    <div className="neighborhoodAndNumber">
                        <InputComponent
                            nameInput="number"
                            label="Número"
                            value={number}
                            onChange={e => setNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="neighborhoodAndNumber">
                        <InputComponent
                            nameInput="city"
                            label="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            required
                        />
                    </div>
                    <div className="neighborhoodAndNumber">
                        <InputComponent
                            nameInput="uf"
                            label="UF"
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                            required
                        />
                    </div>
                    <div className="addressAndZipcode">
                        <InputComponent
                            nameInput="zipcode"
                            label="CEP"
                            value={zipcode}
                            onChange={e => setZipcode(e.target.value)}
                            required
                            mask="99999-999"
                        />
                    </div>
                    <Button
                        onClick={handleFindeByZipcode}
                        name="Consultar via CEP"
                    />
                </Address>

                <PreviousAndNext className={next ? 'previous' : 'next'} >
                    <span onClick={() => setNext(!next)}>{next ? 'Anterior' :'Proximo'}</span>
                </PreviousAndNext>

                <Button
                    name="Criar Conta"
                    onClick={handleSignUP}
                />

                <AccountExists to="/">Já tenho uma conta</AccountExists>
            </Form>
        </Container>
    );
}
