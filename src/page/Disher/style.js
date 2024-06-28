import styled from "styled-components";
import { FONTS } from "../../style/fonts";

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
    color: white;

    display: flex;
    flex-direction: column;

    padding: 2.25rem 3.5rem 2.25rem 3.5rem ;
`;

export const Back = styled.div`
    display: flex;
    margin-bottom: 15px;
    align-items: center;

    > span {
        font-family: ${FONTS.MEDIUM_400_POPPINS.FONTFAMILY};
        font-size: 1.6rem;
        line-height: ${FONTS.MEDIUM_400_POPPINS.LINEHEIGHT};
        font-weight: ${FONTS.MEDIUM_400_POPPINS.WEIGTH};  
    }
   
`;