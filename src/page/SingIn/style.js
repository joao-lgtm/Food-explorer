import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../style/deviceBreakPoint";

export const Container = styled.div`
    

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
     width: 100%;     
     margin: 0 auto;
     display: flex;
     flex-direction: column;
     justify-content: center;
     gap: 2rem; 
`;