import { Footer } from "../Footer";
import { Container, Header, Main } from "./style";
import Close from "../../assets/Close.svg"
import { Input } from './../Input';
import { CiSearch } from "react-icons/ci";


export function Menu({ menuIsOpen, onCloseMenu }) {
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
                        <li>Sair</li>
                    </ul>
                </nav>
            </Main>
            <Footer />
        </Container>
    )
}