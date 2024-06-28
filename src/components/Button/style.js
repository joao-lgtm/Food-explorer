import styled from "styled-components";
import { FONTS } from "../../style/fonts";

export const Container = styled.button`
    background-color:  ${({ theme }) => theme.TOMATO_100};
    border: none;
    padding: 12px 0;
    border-radius: 6px;
    cursor:pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5.43px;
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