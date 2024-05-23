import styled from "styled-components";
import { FONTS } from './../../style/fonts';

export const Container = styled.div`
    width: 100%;
    height: 100vh;



    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
    "header"
    "content"
    "footer";
`


export const Main = styled.div`
    grid-area: content; 
    padding: 2.75rem 1rem 0rem 2.25rem;
`;


export const Banner = styled.div`
    display: grid;
    grid-template-columns: 10rem 1fr;
    grid-template-rows: 7.5rem;
    align-items: center;
    background: ${({ theme }) => theme.LINNEAR_GRADIANT_200};

    >  img {
        position: relative;
        width: 11.93rem;
        top: -0.9rem;
        left: -1.875rem;
    
}
`;


export const TextBanner = styled.div`
    color: ${({ theme }) => theme.LIGHT_100};
    > p{
        font-family: ${FONTS.MEDIUM_200_POPPINS.FONTFAMILY};
        font-size: 1.12rem;
        font-weight: 600;
        line-height: ${FONTS.MEDIUM_200_POPPINS.LINEHEIGHT};

    }
    > span {
        font-family: ${FONTS.MEDIUM_100_POPPINS.FONTFAMILY};
        font-size: 0.75rem;
        line-height: ${FONTS.MEDIUM_100_POPPINS.LINEHEIGHT};
    }


`