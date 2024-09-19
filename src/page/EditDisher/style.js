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
    padding: 0 7.813rem;

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
        width: 100%;
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .ImgAndNameAndCategory{
        display: flex;
        align-items: center;
        gap: 1.5rem;

        div {
            &:nth-child(1) {
                flex: 2;
            }

            &:nth-child(2) {
                flex: 4;
            }

            &:nth-child(3) {
                flex: 4; 
            }
        }
    }

    .igredientsAndPrice{
        display: flex;
        flex-direction: row;
        gap: 2rem;

        .igredients{
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: 90%;
        }
    }


    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
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

            div{
                width: 100%;
            }
        }
       
        .igredientsAndPrice{
            display: flex;
            flex-direction: column;
            gap: 1rem;

            .igredients{
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                width: 100%;
            }
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

export const Label = styled.label`
    font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
    font-weight: ${FONTS.SMALLREGULAR_ROBOTO.WEIGTH};
    font-size: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
    color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_100 : ThemeWhite.DARK_800};
`;

export const NewIgredients = styled.div`
    width: 100%;
    background:  ${({ theme }) => theme === ThemeBlack ? ThemeBlack.DARK_800  : ThemeWhite.LIGHT_100};
    border: 1px solid ${({ theme }) => theme === ThemeBlack ? ThemeBlack.DARK_800 : ThemeWhite.DARK_800};
    color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_300  : ThemeWhite.DARK_800};
    
    padding: 0.5rem;
    border-radius: 0.5rem;
    

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;

export const Buttons = styled.div`
    display: flex;
    gap: 1.5rem;
    width: 100%;

    > button{
        padding: 1rem 0;
        width: 100%;
    }
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        display: flex;
        gap: 1.5rem;
        width: 100%;

        > button{
            padding: 1rem 0;
            width: 100%;
        }
    }
`;


export const ExcludeButton = styled.button`
    background-color: ${({ theme }) => theme.DARK_800};
    border-radius: 0.5rem;
    border: none;

    color: ${({ theme }) => theme.LIGHT_100};
   
    cursor: pointer;
    
    font-family: ${FONTS.MEDIUM_100_POPPINS.FONTFAMILY};
    font-size: ${FONTS.MEDIUM_100_POPPINS.SIZE};
    line-height: ${FONTS.MEDIUM_100_POPPINS.LINEHEIGHT};
    font-weight: ${FONTS.MEDIUM_100_POPPINS.WEIGTH};
`;