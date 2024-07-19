import styled from "styled-components";
import { FONTS } from "../../style/fonts";
import { ThemeBlack, ThemeWhite } from "../../style/theme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    label{
        font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
        font-weight: ${FONTS.SMALLREGULAR_ROBOTO.WEIGTH};
        font-size: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
        color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_400 : ThemeWhite.LIGHT_400};
    }

    textarea{
        background-color:  ${({ theme }) => theme.DARK_900};
        color: ${({ theme }) => theme.LIGHT_400};
        font-family: ${FONTS.SMALLER_ROBOTO.FONTFAMILY};
        font-weight: ${FONTS.SMALLER_ROBOTO.WEIGTH};
        font-size: ${FONTS.SMALLER_ROBOTO.SIZE};
        border: none;
        outline: none;

        height: 10.75rem;
        resize: none;

        padding: 1rem;
    }
`;