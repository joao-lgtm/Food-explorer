import styled from "styled-components";
import { FONTS } from "../../style/fonts";

export const Container = styled.div`
    background: ${({theme}) => theme.DARK_1000};
    padding: 0.5rem;
    border-radius: 0.313rem;

    > span {
        font-family: ${FONTS.MEDIUM_100_POPPINS.FONTFAMILY};
        font-size: ${FONTS.MEDIUM_100_POPPINS.SIZE};
        font-weight: ${FONTS.MEDIUM_100_POPPINS.WEIGTH};
        line-height: ${FONTS.MEDIUM_100_POPPINS.LINEHEIGHT};
    }
`;

