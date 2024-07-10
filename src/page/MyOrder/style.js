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
    grid-area: content; 
    color: white;

    display: flex;
    flex-direction: column;
    
    width: 100%;
    padding: 3.5rem 2.3125rem;

    span {
        font-family: ${FONTS.MEDIUM_200_POPPINS.FONTFAMILY};
        font-size: ${FONTS.MEDIUM_200_POPPINS.SIZE};
        font-weight: ${FONTS.MEDIUM_200_POPPINS.WEIGTH};
        line-height: ${FONTS.MEDIUM_200_POPPINS.LINEHEIGHT};   
    }

    .Advanced {
        display: flex;
        justify-content: flex-end;
        margin-top: 1.863rem;

        font-family: ${FONTS.MEDIUM_200_POPPINS.FONTFAMILY};
        font-size: ${FONTS.MEDIUM_200_POPPINS.SIZE};
        font-weight: ${FONTS.MEDIUM_200_POPPINS.WEIGTH};
        line-height: ${FONTS.MEDIUM_200_POPPINS.LINEHEIGHT};   
        
        > button {
        width: 13.5rem;
        }
    }
`;

export const Detail = styled.div`
    
`;