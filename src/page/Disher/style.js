import styled from "styled-components";
import { FONTS } from "../../style/fonts";
import { DEVICE_BREAKPOINTS } from "../../style/deviceBreakPoint";

export const Container = styled.main`
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

export const Main = styled.div`
    grid-area: content; 

    display: flex;
    flex-direction: column;
    gap: 2.938rem;

    padding: 0 7.563rem 9.438rem 7.563rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding: 2.25rem 3.5rem 2.25rem 3.5rem ;
    }
`;

