import styled from "styled-components";
import { FONTS } from "../../style/fonts";

export const Container = styled.div`
    position: relative;
    background: ${({ theme }) => theme.DARK_200};

    border: 1px solid ${({ theme }) => theme.DARK_300};
    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;

    width: 18.18rem;
    padding: 1.5rem;
    color: ${({ theme }) => theme.LIGHT_100};

    > button {
        width: 100%;
    }
`;

export const Favorite = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
`;

export const Edit = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;  
`;

export const Presentation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-items: center;
   


    cursor: pointer;
    
    font-family: ${FONTS.MEDIUM_100_POPPINS.FONTFAMILY};
    font-size: ${FONTS.MEDIUM_100_POPPINS.SIZE};
    font-weight: ${FONTS.MEDIUM_100_POPPINS.WEIGTH};
    line-height: ${FONTS.MEDIUM_100_POPPINS.LINEHEIGHT};

    > img {
        width: 5.5rem;
    }
`;

export const Price = styled.div`
    font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
    font-size: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
    font-weight: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
    line-height: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};

    color: ${({ theme }) => theme.CAKE_200};
`;
