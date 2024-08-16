import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../style/deviceBreakPoint";
import { Link } from "react-router-dom";
import { FONTS } from "../../style/fonts";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    


    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4.56rem;
        margin-top: 25px;
        margin-bottom: 25px;
        padding: 25px;
    }

    .next{
        text-align: right;
    }

    .previous{
        text-align: left;
    }
    
`;

export const PreviousAndNext = styled.div`
    span{
        color: ${({ theme }) => theme.LIGHT_100};
        font-family: ${FONTS.MEDIUM_100_POPPINS.FONTFAMILY};
        font-weight: ${FONTS.MEDIUM_100_POPPINS.WEIGTH};
        font-size: ${FONTS.MEDIUM_100_POPPINS.SIZE};
    }
    
  
`;

export const Form = styled.form`
    width: 29.75rem;
    height: auto;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:2rem;
    background-color: ${({ theme }) => theme.DARK_700};
    border-radius: 1rem;

    h1{
        color: ${({ theme }) => theme.LIGHT_100};
        text-align: center;
        font-family: ${FONTS.MEDIUM_400_POPPINS.FONTFAMILY};
        font-weight: ${FONTS.MEDIUM_400_POPPINS.WEIGTH};
        font-size: ${FONTS.MEDIUM_400_POPPINS.SIZE};
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        h1{
            display: none;
        }
        width: 100%;     
        height: auto;
        margin: 0 auto;
        background-color: unset;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem; 
    }
`;


export const AccountExists = styled(Link)`
    font-family: ${FONTS.MEDIUM_100_POPPINS.FONTFAMILY};
    font-weight: ${FONTS.MEDIUM_100_POPPINS.WEIGTH};
    font-size: ${FONTS.MEDIUM_100_POPPINS.SIZE};
    color: ${({ theme }) => theme.LIGHT_100};

    text-decoration: none;
    text-align: center;
`;


export const Infos = styled.div`
    display: none;
    &[data-next="false"]{
        display: flex;
        flex-direction: column;
        gap: 1rem;

    }
`;


export const Address = styled.div`
    display: none;

    &[data-next="true"]{
        display: flex;
    }
    
    flex-wrap: wrap;
    gap: 0.938rem;

    .addressAndZipcode{
        width: 100%;
    }

    .neighborhoodAndNumber{
        width: 46%;
    }
`;