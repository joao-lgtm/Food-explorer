import styled from "styled-components";
import { FONTS } from "../../style/fonts";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:16px;
    color: white;

    font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
    font-size: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
    font-weight: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
    line-height: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
`;

