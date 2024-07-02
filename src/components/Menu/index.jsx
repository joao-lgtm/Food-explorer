import { Footer } from "../Footer";
import { Container, Header, Main } from "./style";
import Close from "../../assets/Close.svg"
import { VscClose } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { Input } from "../Input";
import { useAuth } from "../../hooks/auth";


export function Menu({ menuIsOpen, onCloseMenu,setDisherIngredients }) {
    const { signOut } = useAuth();
    return (
        <Container data-menu-is-open={menuIsOpen}>
            <Header>
                <VscClose onClick={onCloseMenu} size={24}/>
                <span>Menu</span>
            </Header>
            <Main>
                <Input type="text" onChange={e => setDisherIngredients(e.target.value)} icon={CiSearch} placeholder="Busque por pratos ou ingredientes" />

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