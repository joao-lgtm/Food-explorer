import { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/ThemeSwitcher';
import { ThemeBlack, ThemeWhite } from './style/theme';
import { Global } from './style/global';
import { Routes } from './routes/index';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './hooks/auth';

export function App() {
    const { theme } = useTheme();
    return (
        <ThemeProvider theme={theme === true ? ThemeBlack : ThemeWhite}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme={theme === true ? 'light' : 'dark'}
                transition:Bounce />
            <Global />
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </ThemeProvider>
    );
}