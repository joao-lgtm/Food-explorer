import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../style/deviceBreakPoint";
import { Link }  from "react-router-dom";
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
        width: 18.75rem; 
        margin: 0 auto;
        height: 100%;
        gap: 4.56rem;

        > div{
            width: 100%;
        } 
        
        > div img {
            width: 17.375rem;
            height: 2.75rem;
        }
    }
    
`;

export const Form = styled.form`
    width: 29.75rem;
    height: 33.75rem;
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


export const CreateAccount = styled(Link)`
    font-family: ${FONTS.MEDIUM_100_POPPINS.FONTFAMILY};
    font-weight: ${FONTS.MEDIUM_100_POPPINS.WEIGTH};
    font-size: ${FONTS.MEDIUM_100_POPPINS.SIZE};
    color: ${({theme}) => theme.LIGHT_100};

    text-decoration: none;
    text-align: center;
    
`;