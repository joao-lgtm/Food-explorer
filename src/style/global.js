import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakPoint";
import { ThemeBlack, ThemeWhite } from "./theme";

export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 16px;

        @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
            font-size: 12px;
        }


    }
    #root{
        width: 100vw;
        height: 100vh;
    }
    body{
        background-color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.DARK_400 : ThemeWhite.LIGHT_100};
        color: ${({ theme }) => theme.FONT_COLOR};
        transition: background-color 0.3s ease-in-out;
        -webkit-font-smoothing: antialiased;
    }
    *::-webkit-scrollbar {
        height: 5px;
        width: 5px;
    }
    *::-webkit-scrollbar-track {
        border-radius: 5px;
        background-color: #DFE9EB;
    }

    *::-webkit-scrollbar-track:hover {
        background-color: #B8C0C2;
    }

    *::-webkit-scrollbar-track:active {
        background-color: #B8C0C2;
    }

    *::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #757575;
    }

    *::-webkit-scrollbar-thumb:hover {
        background-color: #717171;
    }

    *::-webkit-scrollbar-thumb:active {
        background-color: #A3A3A3;
    }
`;
