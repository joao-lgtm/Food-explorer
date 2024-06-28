import styled from "styled-components";
import { FONTS } from "../../style/fonts";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    height: 100%;
    margin-bottom: 1.9375rem;

    > h2 {
        font-family: ${FONTS.MEDIUM_400_POPPINS.FONTFAMILY};
        font-size: ${FONTS.MEDIUM_400_POPPINS.SIZE};
        font-weight: ${FONTS.MEDIUM_400_POPPINS.WEIGTH};
        line-height: ${FONTS.MEDIUM_400_POPPINS.LINEHEIGHT};
       
    }
`;

export const DishesContainer = styled.div`
    min-height: 90%;
`;

export const Dishes = styled.div`
    display: flex;
    gap: 0.8125rem;
    align-items: center;
    justify-content: space-between;

    padding: 1.68rem 0rem 1rem 0rem;
    
    > img {
        width: 4.5rem;
        height: 4.5rem;
    }

    > div span {
        font-family: ${FONTS.MEDIUM_200_POPPINS.FONTFAMILY};
        font-size: 12px;
        font-weight: ${FONTS.MEDIUM_200_POPPINS.WEIGTH};
        line-height: ${FONTS.MEDIUM_200_POPPINS.LINEHEIGHT};
        text-align: center;
    
    }
   
`;

export const Description = styled.div`
    width: 50%;


`;


export const Quantity = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
`;

export const Count = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:16px;

    font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
    font-size: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
    font-weight: ${FONTS.SMALLREGULAR_ROBOTO.WEIGTH};
    line-height: ${FONTS.SMALLREGULAR_ROBOTO.LINEHEIGHT};
`;

export const Remove = styled.div`
    margin-top: .5rem;
    display: flex;
    align-items: center;
    gap: .5rem;
    > span {
        color: ${({ theme }) => theme.TOMATO_300};
    }
`;