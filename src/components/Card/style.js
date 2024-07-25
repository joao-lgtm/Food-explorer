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

export const Disher = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    height: 100%;
    justify-content: center;

    button{
        width: 100%;
    }
`;

export const Presentation = styled.div`
    cursor: pointer;    
    > img {
        width: 88px;
        height: 88px;
    }
`;

export const Name = styled.div`
    font-family: ${FONTS.MEDIUM_100_POPPINS.FONTFAMILY};
    font-size: ${FONTS.MEDIUM_100_POPPINS.SIZE};
    font-weight: ${FONTS.MEDIUM_100_POPPINS.WEIGTH};
    line-height: ${FONTS.MEDIUM_100_POPPINS.LINEHEIGHT};  
`;

export const Price = styled.div`
    color: ${({ theme }) => theme.CAKE_200};

    font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
    font-size: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
    font-weight: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
    line-height: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};

    
`;
