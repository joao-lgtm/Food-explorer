import { useTheme } from "../../hooks/ThemeSwitcher";
import { Footer } from "../Footer";
import { Container, Header, ThemeSwicther } from "./style";
import Close from "../../assets/Close.svg"

export function Menu({ menuIsOpen, onCloseMenu }) {
    const { handleThemeSwitch, theme } = useTheme();
    return (
        <Container data-menu-is-open={menuIsOpen}>
            <Header>
                 <img onClick={onCloseMenu} src={Close} alt="X para fechar" srcset="" />
                <span>Menu</span>
            </Header>

            <ThemeSwicther  >
                <div onClick={handleThemeSwitch} data-theme-mode={theme}></div>
            </ThemeSwicther>


            <Footer />
        </Container>
    )
}