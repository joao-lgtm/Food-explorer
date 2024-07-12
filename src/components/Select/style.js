import styled from "styled-components";
import { FONTS } from "../../style/fonts";
import { ThemeBlack, ThemeWhite } from "../../style/theme";
import  arrowDown  from "../../assets/arrowDown.svg"



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    label{
        font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
        font-weight: ${FONTS.SMALLREGULAR_ROBOTO.WEIGTH};
        font-size: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
        color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_400 : ThemeWhite.LIGHT_400};
    }

    select{
        padding: 13px;
        border-radius: 8px;
        background-color:  ${({ theme }) => theme.DARK_900};
        color: ${({ theme }) =>  theme.LIGHT_400};
        -webkit-appearance: none;
        appearance: none;
        border: none;

        background-image: url(${arrowDown});
        font-family: ${FONTS.SMALLER_ROBOTO.FONTFAMILY};
        font-weight: ${FONTS.SMALLER_ROBOTO.WEIGTH};
        font-size: ${FONTS.SMALLER_ROBOTO.SIZE};

        outline: none;
    }
   
`