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
    padding: 0 35px;

`;

export const Orders = styled.div`
    border: 1px solid ${({theme}) => theme.DARK_1000};
    border-radius: 8px;

    font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
    font-size: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
    font-weight: ${FONTS.SMALLREGULAR_ROBOTO.WEIGTH};
    line-height: ${FONTS.SMALLREGULAR_ROBOTO.LINEHEIGHT};
    
    color: ${({theme}) => theme.LIGHT_100};
    

    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 26px 20px 26px 23px;
    margin-bottom: 17px;
`;

export const Status = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    

`;

export const Details = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    
`;