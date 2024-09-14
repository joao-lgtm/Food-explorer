import styled from "styled-components";
import { ThemeBlack, ThemeWhite } from "../../style/theme";

export const Container = styled.footer`
    grid-area: footer;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1.83rem 1.73rem;

    background-color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.DARK_700 : ThemeWhite.LIGHT_100};
    color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_100  : ThemeWhite.DARK_700};

    border-top: 1px solid ${({ theme }) => theme.DARK_700};

    >  img {
        width: 8.875rem;
        height: 1.14rem;
    }
    > div > span {
        font-family: "DM Sans";
        font-size: 0.75rem;
    }
`;