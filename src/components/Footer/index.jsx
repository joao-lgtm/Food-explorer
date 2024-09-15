import { Container } from "./style";
import FooterSvg from "../../assets/footer.svg"
import { ThemeSwitcher } from "../ThemeSwitcher";

export function Footer() {
    return (
        <Container>
            <img src={FooterSvg} alt="imagem de um polygon junto com a palavra food explorer" />

            <div>
                <span>© 2023 - Todos os direitos reservados.</span>
            </div>

            <div className="theme">
                <ThemeSwitcher />
            </div>
        </Container>
    )
} 