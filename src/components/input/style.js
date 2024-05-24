import styled from "styled-components";
import { ThemeBlack, ThemeWhite } from "../../style/theme";
import { FONTS } from "../../style/fonts";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    label{
        font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
        font-weight: ${FONTS.SMALLREGULAR_ROBOTO.WEIGTH};
        font-size: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
        color: ${({theme}) => theme === ThemeBlack ? ThemeBlack.LIGHT_400 : ThemeWhite.LIGHT_400};
    }
    > div {
        display: flex;
        align-items: center;
        gap:14px;
        background:  ${({ theme }) => theme === ThemeBlack ? ThemeBlack.DARK_900 : ThemeWhite.LIGHT_100};
        border-radius: 8px;
        padding: 12px;

        > input {
            font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
            font-weight: ${FONTS.SMALLREGULAR_ROBOTO.WEIGTH};
            font-size: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
            width: 100%;
            background: transparent;
            border: none;
            color: white;
            &::placeholder{
                color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_500 : ThemeWhite.LIGHT_500};
            }
            &:focus-visible{
            outline: 0;
        }
        }
    }
`;