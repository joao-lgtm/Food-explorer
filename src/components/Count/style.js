import styled from "styled-components";
import { FONTS } from "../../style/fonts";
import { ThemeBlack, ThemeWhite } from "../../style/theme";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:1rem;
    color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_400 : ThemeWhite.DARK_200};

    font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
    font-size: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
    font-weight: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
    line-height: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
`;

