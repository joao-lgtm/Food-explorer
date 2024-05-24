import { Container } from "./style";

export function ThemeSwitcher() {
    const { handleThemeSwitch, theme } = useTheme();
    
    return (
        <Container>
            <div onClick={handleThemeSwitch} data-theme-mode={theme}></div>
        </Container>
    )
}