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

export const Main = styled.main`
    grid-area: content;
    padding: 2.25rem 1.75rem 0.85rem 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 2.18rem;


    nav{
        > ul {
            list-style: none;
            li {
                margin-bottom: 0.65rem;
                color: ${({ theme }) => theme.LIGHT_100};
                font-family: ${FONTS.MEDIUM_500_POPPINS.FONTFAMILY};
                font-weight: 200;
                font-size: 1.5rem;

                border-bottom: 1px solid ${({ theme }) => theme.DARK_1000};
                padding-bottom: 0.65rem;
            }
            
        }

    }
`;
