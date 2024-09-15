import styled from "styled-components";
import { FONTS } from "../../style/fonts";
import { DEVICE_BREAKPOINTS } from "../../style/deviceBreakPoint";
import { ThemeBlack, ThemeWhite } from "../../style/theme";

export const Container = styled.div`
    width: 100%;
    margin-top: 3.875rem;

    > div h2 {
        color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_400 : ThemeWhite.DARK_200};

        font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
        font-family: ${FONTS.MEDIUM_200_POPPINS.FONTFAMILY};
        font-size:  ${FONTS.MEDIUM_200_POPPINS.SIZE};
        line-height:  ${FONTS.MEDIUM_200_POPPINS.LINEHEIGHT};
        font-weight:  ${FONTS.MEDIUM_200_POPPINS.WEIGTH};
        margin-bottom: 15px;
    }
`;

export const ContainerCarousel = styled.div`
    max-width: 100%;
    overflow-x: auto;
    display: inline-flex;
    gap: 1.688rem;


    > * {
        flex-shrink: 0;
    }

    @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
        gap: 1rem;
    }
`;