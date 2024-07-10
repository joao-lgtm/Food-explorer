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
    padding: 10px 32px 53px 32px;

    h2{
        color: ${({theme}) => theme.LIGHT_100};
        margin-top: 35px;
        margin-bottom: 17px;
        font-family: ${FONTS.MEDIUM_400_POPPINS.FONTFAMILY};
        font-weight: ${FONTS.MEDIUM_400_POPPINS.WEIGTH};
        font-size: ${FONTS.MEDIUM_400_POPPINS.SIZE};
        line-height: ${FONTS.MEDIUM_400_POPPINS.LINEHEIGHT};
    }
`;