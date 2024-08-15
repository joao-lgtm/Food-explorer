import styled from "styled-components";
import { FONTS } from "../../style/fonts";

export const Container = styled.div`
    width: 100%;
    height: 100vh;



    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
    "header"
    "content"
    "footer";

`;

export const Main = styled.main`
    padding: 3.5rem 2.188rem;
    h2 {
        color: ${({ theme }) => theme.LIGHT_100};
        margin-bottom: 1.063rem;
        font-family: ${FONTS.MEDIUM_400_POPPINS.FONTFAMILY};
        font-weight: ${FONTS.MEDIUM_400_POPPINS.WEIGTH};
        font-size: ${FONTS.MEDIUM_400_POPPINS.SIZE};
        line-height: ${FONTS.MEDIUM_400_POPPINS.LINEHEIGHT};
    }
`;

export const Message = styled.div`
    color: ${({ theme }) => theme.LIGHT_100};


    font-family: ${FONTS.MEDIUM_200_POPPINS.FONTFAMILY};
    font-weight: ${FONTS.MEDIUM_200_POPPINS.WEIGTH};
    font-size: ${FONTS.MEDIUM_200_POPPINS.SIZE};
    line-height: ${FONTS.MEDIUM_200_POPPINS.LINEHEIGHT};
`;

export const Orders = styled.div`
    border: 1px solid ${({ theme }) => theme.DARK_1000};
    border-radius: 0.5rem;

    font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
    font-size: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
    font-weight: ${FONTS.SMALLREGULAR_ROBOTO.WEIGTH};
    line-height: ${FONTS.SMALLREGULAR_ROBOTO.LINEHEIGHT};
    
    color: ${({ theme }) => theme.LIGHT_400};
    

    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.625rem 1.25rem 1.625rem 1.438rem;
    margin-bottom: 1.063rem;
`;

export const Status = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    > div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`;

export const StatusBall = styled.div`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100%;

    
   &[data-status="0"]{
        background-color: ${({ theme }) => theme.TOMATO_300};   
    }

    &[data-status="1"]{
        background-color: ${({ theme }) => theme.CARROT_100};   
    }
    &[data-status="2"]{
        background-color: ${({ theme }) => theme.MINT_100};   
    }

`;

export const Details = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    
`;