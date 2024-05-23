import styled from "styled-components";
import Sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import { DEVICE_BREAKPOINTS } from "../../style/deviceBreakPoint";
import { ThemeBlack, ThemeWhite } from "../../style/theme";
import { FONTS } from '../../style/fonts';



export const Container = styled.div`
    position: fixed;
    z-index: 11; 
    width: 100%;
    height: 100vh;
    left: 0;
    bottom: 0;

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
    "header"
    "content"
    "footer";

    background-color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.DARK_400 : ThemeWhite.LIGHT_100};
    color:${({ theme }) => theme.WHITE};

    transform: translateX(-150%);
    transition: transform 0.3s ease-in-out;

    &[data-menu-is-open="true"]{
        transform: translateX(0%);

    }
`;

export const Header = styled.div`
    grid-area: header;
    background-color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.DARK_700 : ThemeWhite.LIGHT_100};
    color: ${({ theme }) => theme.LIGHT_100};

    display: flex;
    align-items: center;
    gap: 1rem;

    padding:3.5rem 1.75rem 1.5rem 1.75rem;

    font-family: ${FONTS.REGULAR_ROBOTO.FONTFAMILY};
    font-size: ${FONTS.REGULAR_ROBOTO.SIZE};
    font-weight: ${FONTS.REGULAR_ROBOTO.WEIGTH};
     
    > img {
        width: 1.21rem;
    }
    

`

export const ThemeSwicther = styled.div`
    border: 2px solid red;
    padding: 0.31rem;
    border-radius: 0.625rem;
    width: 4.5rem;
    background-color: white;

    > div {
        background-image: url(${Sun}); 
        background-repeat: no-repeat;
        background-position: center;
        width: 5px;
        padding: 0.925rem;

        border-radius: 50%;
        transform: translateX(0%);
        transition: transform 0.5s ease-in-out;


        &[data-theme-mode="true"]{
            background-image: url(${moon}); 
            background-repeat: no-repeat;
            background-position: center;
            transform: translateX(100%);
            transition: transform 0.5s ease-in-out;
        }
    }
`;

