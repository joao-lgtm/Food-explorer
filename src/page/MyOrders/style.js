import styled from "styled-components";
import { FONTS } from "../../style/fonts";
import { DEVICE_BREAKPOINTS } from "../../style/deviceBreakPoint";
import { USER_ROLE } from "../../utils/roles";
import { ThemeBlack, ThemeWhite } from "../../style/theme";

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
    padding: 7.688rem 7.063rem;
    transition: 0.2s;
    .small-screen-text {
        display: none;
    }
    .large-screen-text{
        display: block;
    }

    

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        transition: 0.2s;
        padding: 3.5rem 2.188rem;


        .small-screen-text {
            display: block;
        }

        .large-screen-text{
            display: none;
        }
    }

    h2 {
        color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_300  : ThemeWhite.DARK_700};
        margin-bottom: 1.063rem;
        font-family: ${FONTS.MEDIUM_400_POPPINS.FONTFAMILY};
        font-weight: ${FONTS.MEDIUM_400_POPPINS.WEIGTH};
        font-size: ${FONTS.MEDIUM_400_POPPINS.SIZE};
        line-height: ${FONTS.MEDIUM_400_POPPINS.LINEHEIGHT};
    }

    .container{
        border: 1px solid ${({ theme }) => theme.DARK_1000};
        border-radius: 8px;
        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            border: none;
        }
    }

    table {
        width: 100%;
        font-size: 16px;
        border-collapse: collapse;
        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            display: none;
            border: none;
        }
    }
    tr{
        
    }

    th{
        font-family: ${FONTS.SMALLER_ROBOTO.FONTFAMILY};
        font-size: ${FONTS.SMALLER_ROBOTO.SIZE};
        font-weight: bold;
        line-height: ${FONTS.SMALLER_ROBOTO.LINEHEIGHT};
        color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_300  : ThemeWhite.DARK_700};
    }

    th, td {
        padding: 21px 24px 21px 24px;
        text-align: left;
        border-bottom: 1px solid ${({ theme }) => theme.DARK_1000};
        border-right: 1px solid ${({ theme }) => theme.DARK_1000};
    }

    td{
        color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_300  : ThemeWhite.DARK_700};
        font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
        font-size: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
        line-height: ${FONTS.SMALLREGULAR_ROBOTO.LINEHEIGHT};
        border-right: 1px solid ${({ theme }) => theme.DARK_1000};
    }

    td > div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    th:last-child{
        border-right: none;
    }

    tr td:last-child {
        border-right: none;
    }

/* Remove a borda inferior da última linha */
    tr:last-child td {
        border-bottom: none;
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
    display: none;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        border: 1px solid ${({ theme }) => theme.DARK_1000};
        border-radius: 0.5rem;

        font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
        font-size: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
        font-weight: ${FONTS.SMALLREGULAR_ROBOTO.WEIGTH};
        line-height: ${FONTS.SMALLREGULAR_ROBOTO.LINEHEIGHT};
        
        color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_300  : ThemeWhite.DARK_100};
        

        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1.625rem 1.25rem 1.625rem 1.438rem;
        margin-bottom: 1.063rem;

    }


`;

export const Status = styled.div`
    width: 100%;
    display: flex;

    &[data-client="admin"]{
        gap: 1rem;
    }

    &[data-client="client"]{
        justify-content: space-between;
    }
    
    > div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

`;
export const Infos = styled.div`
    display: flex;
    gap: 1.5rem;
`;

export const OrderStatus = styled.div`
    margin-left: 2rem;
    margin-right: 2rem;
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
        background-color: ${({ theme }) => theme.CAKE_100};   
    }

    &[data-status="3"] {
    background-color: ${({ theme }) => theme.MINT_100};
  }
`;

export const Details = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    
`;