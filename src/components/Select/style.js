import styled from "styled-components";
import { FONTS } from "../../style/fonts";
import { ThemeBlack, ThemeWhite } from "../../style/theme";
import arrowDown from "../../assets/arrowDown.svg"



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    
    label{
        font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
        font-weight: ${FONTS.SMALLREGULAR_ROBOTO.WEIGTH};
        font-size: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
        color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_100  : ThemeWhite.DARK_800};
    }

   
   
`;

export const SelectApparence = styled.div`
        select{
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background: url(http://www.webcis.com.br/images/imagens-noticias/select/ico-seta-appearance.gif);
            background-position: 13.625rem center;
            width: 100%;
            background-image: url(${arrowDown});
            background-repeat: no-repeat;
            background-position: right 0.938rem center;

            padding: 16px 14px;
            border-radius: 0.5rem;
            background-color:  ${({ theme }) => theme === ThemeBlack ? ThemeBlack.DARK_800  : ThemeWhite.LIGHT_100};
            color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_100  : ThemeWhite.DARK_800};
            border: 1px solid ${({ theme }) => theme === ThemeBlack ? ThemeWhite.DARK_800 : ThemeBlack.DARK_800};
            font-family: ${FONTS.SMALLER_ROBOTO.FONTFAMILY};
            font-weight: ${FONTS.SMALLER_ROBOTO.WEIGTH};
            font-size: ${FONTS.SMALLER_ROBOTO.SIZE};

            outline: none;
        }
`;