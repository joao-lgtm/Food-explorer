import styled from "styled-components";
import { FONTS } from "../../style/fonts";
import { DEVICE_BREAKPOINTS } from './../../style/deviceBreakPoint';
import { ThemeBlack, ThemeWhite } from "../../style/theme";

export const Container = styled.div`
    position: relative;
    background:  ${({ theme }) => theme === ThemeBlack ? ThemeBlack.DARK_200 : ThemeWhite.LIGHT_100};

    border: 1px solid ${({ theme }) => theme.DARK_300};
    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    
    padding: 1.5rem 1.5rem 2.875rem 1.5rem ;
    width: 304px;
    height: auto;
    color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_100 : ThemeWhite.DARK_200};


    .large-device{
        display: flex;
        justify-content: center;
        gap: 16px;
        width: 100%;
        > button {
            width: 92px;
        }
    }

    .small-device{
        display: none;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        position: relative;

        border: 1px solid ${({ theme }) => theme.DARK_300};
        border-radius: 0.5rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;

        width: 18.18rem;
        padding: 1.5rem;


        .large-device{
           display: none;
        }

        .small-device{
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 1rem;
            > button{
                width: 100%;
            }
        }
    }




`;

export const Favorite = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
`;

export const Edit = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;  
`;

export const Disher = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    height: auto;
    justify-content: center;

    button{
        width: 100%;
    } 

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 100%;
        height: 100%;
        justify-content: center;

        button{
            width: 100%;
        } 
    }

`;

export const Presentation = styled.div`
    cursor: pointer; 
    
    > img {
            width: 176px;
            height: 176px;
        }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        > img {
            width: 88px;
            height: 88px;
        }
    }
`;

export const Name = styled.div`
    font-family: ${FONTS.BOLD_300_POPPINS.FONTFAMILY}; 
    font-size: ${FONTS.BOLD_300_POPPINS.SIZE};
    font-weight: ${FONTS.BOLD_300_POPPINS.WEIGTH};
    line-height: ${FONTS.BOLD_300_POPPINS.LINEHEIGHT}; 



    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        font-family: ${FONTS.MEDIUM_100_POPPINS.FONTFAMILY};
        font-size: ${FONTS.MEDIUM_100_POPPINS.SIZE};
        font-weight: ${FONTS.MEDIUM_100_POPPINS.WEIGTH};
        line-height: ${FONTS.MEDIUM_100_POPPINS.LINEHEIGHT};  
    }
    
`;

export const Description = styled.div`
    font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
    font-size: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
    font-weight: ${FONTS.SMALLREGULAR_ROBOTO.WEIGHT};
    color: ${({ theme }) => theme.LIGHT_400};

    height: 40px;
    text-align: center;
   
    color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_400 : ThemeWhite.DARK_200};

    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: none;
    }
`;


export const Price = styled.div`
    color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.CAKE_200 : ThemeWhite.CAKE_100};

    font-family: ${FONTS.BIGGESTREGULAR_ROBOTO.FONTFAMILY};
    font-size: ${FONTS.BIGGESTREGULAR_ROBOTO.SIZE};
    font-weight: ${FONTS.BIGGESTREGULAR_ROBOTO.SIZE};
    line-height: ${FONTS.BIGGESTREGULAR_ROBOTO.SIZE};


    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
        font-size: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
        font-weight: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
        line-height: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
    }

 

    
`;
