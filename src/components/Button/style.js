import styled from "styled-components";
import { FONTS } from "../../style/fonts";

export const Container = styled.button`
    background-color:  ${({ color, theme }) => color === "black" ? theme.DARK_800 : theme.TOMATO_100};
    border: none;
    padding: 0.75rem 0;
    border-radius: 0.375rem;
    cursor:pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.339rem;
    &:active{
        opacity: 0.8;
    }
    

    > span {
        color: ${({ theme }) => theme.LIGHT_100};
        font-family: ${FONTS.MEDIUM_100_POPPINS.FONTFAMILY};
        font-weight: ${FONTS.MEDIUM_100_POPPINS.WEIGTH};
        font-size: ${FONTS.MEDIUM_100_POPPINS.SIZE};
        line-height: ${FONTS.MEDIUM_100_POPPINS.LINEHEIGHT};
    }
`;