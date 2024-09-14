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
        color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_100  : ThemeWhite.DARK_800};
    }

    textarea{
        background-color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.DARK_800  : ThemeWhite.LIGHT_100};
        color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_100  : ThemeWhite.DARK_800};
        font-family: ${FONTS.SMALLER_ROBOTO.FONTFAMILY};
        font-weight: ${FONTS.SMALLER_ROBOTO.WEIGTH};
        font-size: ${FONTS.SMALLER_ROBOTO.SIZE};
        border: 1px solid ${({ theme }) => theme === ThemeBlack ? ThemeBlack.DARK_800  : ThemeWhite.DARK_800};
        border-radius: 5px;
        outline: none;

        height: 10.75rem;
        resize: none;

        padding: 1rem;
    }
`;