import styled from "styled-components";
import { FONTS } from "../../style/fonts";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Img = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;

    > img {
        width: 263px;
        height: 263px;
    }
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
     > h2 {
        font-family: ${FONTS.MEDIUM_400_POPPINS.FONTFAMILY};
        font-size: 1.6rem;
        line-height: ${FONTS.MEDIUM_400_POPPINS.LINEHEIGHT};
        font-weight: ${FONTS.MEDIUM_400_POPPINS.WEIGTH};
    }
`;

export const Description = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
    > span {
            text-align: center;
            font-family: ${FONTS.REGULAR_300_POPPINS.FONTFAMILY};
            font-size: ${FONTS.REGULAR_300_POPPINS.SIZE};
            line-height: ${FONTS.REGULAR_300_POPPINS.LINEHEIGHT};
    }
`;

export const Ingredients = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-bottom: 3rem;
`;


export const OrderControls = styled.div`
    display: flex;
    gap: 0.625rem;
    
    > div {
        flex: 1;
    }
    > button{
        flex: 2;
    }
`;