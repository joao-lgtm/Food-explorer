import styled from "styled-components";
import { FONTS } from "../../style/fonts";
import { ThemeBlack, ThemeWhite } from "../../style/theme";

export const Container = styled.div`
    display: flex;
    margin-top: 2.25rem;
    margin-bottom: 1rem;
    align-items: center;
    cursor: pointer;

    > span {
        font-family: ${FONTS.MEDIUM_400_POPPINS.FONTFAMILY};
        font-size: 1.6rem;
        line-height: ${FONTS.MEDIUM_400_POPPINS.LINEHEIGHT};
        font-weight: ${FONTS.MEDIUM_400_POPPINS.WEIGTH};  
        color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_100  : ThemeWhite.DARK_800};;
    }

    svg{
        color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_100  : ThemeWhite.DARK_800};
    }
   
`;