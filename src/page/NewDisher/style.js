import styled from "styled-components";
import { FONTS } from "../../style/fonts";
import { ThemeBlack, ThemeWhite } from "../../style/theme";
import { DEVICE_BREAKPOINTS } from "../../style/deviceBreakPoint";

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

    .ImgAndNameAndCategory{
        display: flex;
        gap: 1.5rem;
    }


    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding: 0.625rem 2rem 3.313rem 2rem;

        h2{
            color: ${({ theme }) => theme.LIGHT_100};
            margin-top: 2.188rem;
            margin-bottom: 1.063rem;
            font-family: ${FONTS.MEDIUM_400_POPPINS.FONTFAMILY};
            font-weight: ${FONTS.MEDIUM_400_POPPINS.WEIGTH};
            font-size: ${FONTS.MEDIUM_400_POPPINS.SIZE};
            line-height: ${FONTS.MEDIUM_400_POPPINS.LINEHEIGHT};
        }

        form{
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .ImgAndNameAndCategory{
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        textarea{

        }
    }
`;

export const PreviewIMG = styled.div`
    display: flex;
    justify-content: center;
    img{
        width: 9.375rem;
        height: 9.375rem;
    }
`;

export const NewIgredients = styled.div`
    width: 100%;
    background:  ${({ theme }) => theme.DARK_900};

    padding: 0.5rem;
    border-radius: 0.5rem;
    

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;

export const Label = styled.label`
    font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
    font-weight: ${FONTS.SMALLREGULAR_ROBOTO.WEIGTH};
    font-size: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
    color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_400 : ThemeWhite.LIGHT_400};
`;