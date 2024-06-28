import { Footer } from "../Footer";
import { Container, Header, Main } from "./style";
import Close from "../../assets/Close.svg"

import { CiSearch } from "react-icons/ci";
import { Input } from "../Input";
import { useAuth } from "../../hooks/auth";


export function Menu({ menuIsOpen, onCloseMenu }) {
    const { signOut } = useAuth();
    return (
        <Container data-menu-is-open={menuIsOpen}>
            <Header>
                <img onClick={onCloseMenu} src={Close} alt="X para fechar" srcset="" />
                <span>Menu</span>
            </Header>
            <Main>
                <Input type="text" icon={CiSearch} placeholder="Busque por pratos ou ingredientes" />

                <nav>
                    <ul>
                        <li>Meus favoritos</li>
                        <li onClick={() => signOut()}>Sair</li>
                    </ul>
                </nav>
            </Main>
            <Footer />
        </Container>
    )
}