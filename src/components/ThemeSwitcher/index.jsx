import { useTheme } from "../../hooks/ThemeSwitcher"
import { Container } from "./style";

export function ThemeSwitcher() {
    const { handleThemeSwitch, theme } = useTheme();
    
    return (
        <Container>
            <div onClick={handleThemeSwitch}>
                {theme === true ? "🌚 Dark Mode" : "🌞 Light Mode"  }
            </div>
        </Container>
    )
}