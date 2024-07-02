import styled from "styled-components";
import { FONTS } from "../../style/fonts";

export const Container = styled.div`
    width: 100%;
    margin-top: 3.875rem;

    > div h2 {
        color: ${({ theme }) => theme.LIGHT_300};
        font-family: ${FONTS.MEDIUM_200_POPPINS.FONTFAMILY};
        font-size:  ${FONTS.MEDIUM_200_POPPINS.SIZE};
        line-height:  ${FONTS.MEDIUM_200_POPPINS.LINEHEIGHT};
        font-weight:  ${FONTS.MEDIUM_200_POPPINS.WEIGTH};

    }
`;

export const ContainerCarousel = styled.div`
    max-width: 100%;
    overflow-x: auto;
    display: inline-flex;
    gap: 16px;


    > * {
        flex-shrink: 0;
    }

`;