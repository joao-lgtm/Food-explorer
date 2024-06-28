import styled from "styled-components";
import { FONTS } from "../../style/fonts";

export const Container = styled.div`
    background: ${({theme}) => theme.DARK_1000};
    padding: 8px;
    border-radius: 5px;

    > span {
        font-family: ${FONTS.MEDIUM_100_POPPINS.FONTFAMILY};
        font-size: ${FONTS.MEDIUM_100_POPPINS.SIZE};
        font-weight: ${FONTS.MEDIUM_100_POPPINS.WEIGTH};
        line-height: ${FONTS.MEDIUM_100_POPPINS.LINEHEIGHT};
    }
`;

