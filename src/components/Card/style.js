import styled from "styled-components";
import { FONTS } from "../../style/fonts";

export const Container = styled.div`
    position: relative;
    background: ${({theme}) => theme.DARK_200};

    border: 1px solid ${({theme}) => theme.DARK_300};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap:12px;

    width: 18.18rem;
    padding: 24px;
    color: white;

    > button {
        width: 100%;
    }
`;

export const Favorite = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    
`;

export const Presentation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    
    font-family: ${FONTS.MEDIUM_100_POPPINS.FONTFAMILY};
    font-size: ${FONTS.MEDIUM_100_POPPINS.SIZE};
    font-weight: ${FONTS.MEDIUM_100_POPPINS.WEIGTH};
    line-height: ${FONTS.MEDIUM_100_POPPINS.LINEHEIGHT};
`;

export const Price = styled.div`
    font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
    font-size: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
    font-weight: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
    line-height: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};

    color: ${({theme}) => theme.CAKE_200};
`;

export const Count = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:16px;

    font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
    font-size: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
    font-weight: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
    line-height: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
`;

