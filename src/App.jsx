import { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/ThemeSwitcher';
import { ThemeBlack, ThemeWhite } from './style/theme';
import { Global } from './style/global';
import { Home } from './page/Home';
import { SingIn } from './page/SingIn';

export function App() {
    const { theme } = useTheme();

    console.log(theme)
    return (
        <ThemeProvider theme={theme === true ? ThemeBlack : ThemeWhite}>
            <Global />
            <SingIn/>
        </ThemeProvider>
    );
}