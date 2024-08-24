import styled from "styled-components";
import { FONTS } from './../../style/fonts';
import { DEVICE_BREAKPOINTS } from "../../style/deviceBreakPoint";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: auto;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
    "header"
    "content"
    "footer";
`


export const Main = styled.div`
    grid-area: content; 

    padding: 12.5rem 8rem;
    

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding: 2.75rem 1rem 0rem 2.25rem;
    }
`;


export const Banner = styled.div`
    background: ${({ theme }) => theme.LINNEAR_GRADIANT_200};
    height: 16.25rem;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 7.5rem;
    align-items: center;
    align-content: center;
    border-radius: 8px;

    div:first-child {
        width: 39.5rem;
    }

    img{
        position: relative;
        width: 39.5rem;
        height: 27rem;
        top: -5.313rem;
        left: -30px;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: grid;
        grid-template-columns: 10rem 1fr;
        grid-template-rows: 7.5rem;
        align-items: center;
        height: unset;

        div:first-child {
            width: 11.93rem;
        }

        img{
            position: relative;
            width: 11.93rem;
            top: -0.9rem;
            left: -1.875rem;
        }
    }
`;


export const TextBanner = styled.div`
        > h2 {
            color: ${({ theme }) => theme.LIGHT_100};
            font-family: ${FONTS.MEDIUM_500_POPPINS.FONTFAMILY};
            font-size: ${FONTS.MEDIUM_500_POPPINS.SIZE};
            font-weight: ${FONTS.MEDIUM_500_POPPINS.WEIGTH};
            line-height: ${FONTS.MEDIUM_500_POPPINS.LINEHEIGHT};
        }

        > span {
            color: ${({ theme }) => theme.LIGHT_300};
            font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
            font-size:  ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
            line-height: ${FONTS.SMALLREGULAR_ROBOTO.LINEHEIGHT};
        }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        > h2 {
            color: ${({ theme }) => theme.LIGHT_100};
            font-family: ${FONTS.MEDIUM_200_POPPINS.FONTFAMILY};
            font-size: 1.12rem;
            font-weight: 600;
            line-height: ${FONTS.MEDIUM_200_POPPINS.LINEHEIGHT};

        }
        > span {
            color: ${({ theme }) => theme.LIGHT_300};
            font-family: ${FONTS.MEDIUM_100_POPPINS.FONTFAMILY};
            font-size: 0.75rem;
            line-height: ${FONTS.MEDIUM_100_POPPINS.LINEHEIGHT};
        }
    }

`