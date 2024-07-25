import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../style/deviceBreakPoint";
import { Link }  from "react-router-dom";
import { FONTS } from "../../style/fonts";

export const Container = styled.div`
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
    
`;

export const Form = styled.form`
     width: 100%;     
     margin: 0 auto;
     display: flex;
     flex-direction: column;
     justify-content: center;
     gap: 2rem; 
`;


export const AccountExists = styled(Link)`
    font-family: ${FONTS.MEDIUM_100_POPPINS.FONTFAMILY};
    font-weight: ${FONTS.MEDIUM_100_POPPINS.WEIGTH};
    font-size: ${FONTS.MEDIUM_100_POPPINS.SIZE};
    color: ${({theme}) => theme.LIGHT_100};

    text-decoration: none;
    text-align: center;
`;


export const Address = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.938rem;

    .addressAndZipcode{
        width: 100%;
    }

    .neighborhoodAndNumber{
        width: 46%;
    }
`;