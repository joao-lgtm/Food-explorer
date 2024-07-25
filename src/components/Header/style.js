import styled from "styled-components";
import { ThemeBlack, ThemeWhite } from "../../style/theme";
import { FONTS } from "../../style/fonts";

export const Container = styled.header`
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.DARK_700 : ThemeWhite.LIGHT_100};
    padding: 3.5rem 1.75rem 1.5rem 1.75rem;


`;
