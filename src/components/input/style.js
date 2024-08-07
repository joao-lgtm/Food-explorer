import styled from "styled-components";
import { ThemeBlack, ThemeWhite } from "../../style/theme";
import { FONTS } from "../../style/fonts";
import ReactInputMask from "react-input-mask";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    label{
        font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
        font-weight: ${FONTS.SMALLREGULAR_ROBOTO.WEIGTH};
        font-size: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
        color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_400 : ThemeWhite.LIGHT_400};
        width: 100%;
    }
    > div {
        display: flex;
        align-items: center;
        gap:0.875rem;
        background:  ${({ theme }) => theme === ThemeBlack ? ThemeBlack.DARK_900 : ThemeWhite.LIGHT_100};
        border-radius: 0.5rem;
        padding: 16px 14px;
    }
`;

export const InputMask = styled(ReactInputMask)`
    font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
    font-weight: ${FONTS.SMALLREGULAR_ROBOTO.WEIGTH};
    font-size: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
    width: 100%;
    background: transparent;
    border: none;
    
    color: ${({ theme }) => theme.LIGHT_100};
        &::placeholder{
            color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_500 : ThemeWhite.LIGHT_500};
        }
        &:focus-visible{
        outline: 0;
    }   

    &[data-type="file"]{
      display: none;
      width: 100%;
    }



`;