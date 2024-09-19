import styled from "styled-components";
import { FONTS } from "../../style/fonts";
import { DEVICE_BREAKPOINTS } from "../../style/deviceBreakPoint";
import { ThemeBlack, ThemeWhite } from "../../style/theme";


export const Container = styled.div`
    width: 50%;

    > h2 {
        color:  ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_100 : ThemeWhite.DARK_800};

        font-family: ${FONTS.MEDIUM_400_POPPINS.FONTFAMILY};
        font-size: ${FONTS.MEDIUM_400_POPPINS.SIZE};
        font-weight: ${FONTS.MEDIUM_400_POPPINS.WEIGTH};
        line-height: ${FONTS.MEDIUM_400_POPPINS.LINEHEIGHT};
       
    }
  


    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    
    margin-bottom: 1.9375rem;

    > h2 {
        font-family: ${FONTS.MEDIUM_400_POPPINS.FONTFAMILY};
        font-size: ${FONTS.MEDIUM_400_POPPINS.SIZE};
        font-weight: ${FONTS.MEDIUM_400_POPPINS.WEIGTH};
        line-height: ${FONTS.MEDIUM_400_POPPINS.LINEHEIGHT};
       
    }
  
    span {
        font-family: ${FONTS.MEDIUM_200_POPPINS.FONTFAMILY};
        font-size: ${FONTS.MEDIUM_200_POPPINS.SIZE};
        font-weight: ${FONTS.MEDIUM_200_POPPINS.WEIGTH};
        line-height: ${FONTS.MEDIUM_200_POPPINS.LINEHEIGHT};   
    }

    }
`;

export const DishesContainer = styled.div`
    margin-top: 1.875rem ;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        
    }
`;

export const Presentation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:  ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_100 : ThemeWhite.DARK_800};

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 100%;
    }
`;

export const Dishes = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8125rem;
    > img {
        width: 4.5rem;
        height: 4.5rem;
    }
    .detailsAndRemove{
        display: flex;
        flex-direction: column;
        
        > span {
            font-size: 0.875rem;
        }
    }

    .price{
        color:  ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_400 : ThemeWhite.DARK_800};

        > span{
            font-size: 0.875rem;
        }
    }
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: flex;
        gap: 0.8125rem;
        align-items: center;
        justify-content: space-between;

        padding: 1.68rem 0rem 1rem 0rem;
        
        > img {
            width: 4.5rem;
            height: 4.5rem;
        }

        .detailsAndRemove{
        display: flex;
        flex-direction: column;
        
        > span {
            font-size: 0.75rem;
        }
    }
        .price{
            width: fit-content;
            > span{
                font-size: 0.75rem; 
                color: hsla(240, 7%, 78%, 1);
            }
          

        }
    }
   
`;

export const Description = styled.div`
    display: flex;
    gap: 0.625rem;
    align-items: baseline;

    @media (max-width: ${DEVICE_BREAKPOINTS}) {
        width: 50%;
    }

`;


export const Quantity = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
`;

export const Count = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:1rem;

    font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
    font-size: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
    font-weight: ${FONTS.SMALLREGULAR_ROBOTO.WEIGTH};
    line-height: ${FONTS.SMALLREGULAR_ROBOTO.LINEHEIGHT};
`;

export const Remove = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    cursor: pointer;
    > span {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.TOMATO_300};
    }
`;

export const Address = styled.div`
    h3{
        color:  ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_100 : ThemeWhite.DARK_800};
        font-family: ${FONTS.MEDIUM_200_POPPINS.FONTFAMILY};
        font-size: ${FONTS.MEDIUM_200_POPPINS.SIZE};
        font-weight: ${FONTS.MEDIUM_200_POPPINS.WEIGTH};
        line-height: ${FONTS.MEDIUM_200_POPPINS.LINEHEIGHT}; 
        margin: 2rem 0;
    }
    div{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        color:  ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_100 : ThemeWhite.DARK_800};
        
        > span{
            b{
                font-size: 1.1rem;
            }
            font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
            font-size: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
            font-weight: ${FONTS.SMALLREGULAR_ROBOTO.WEIGTH};
            line-height: ${FONTS.SMALLREGULAR_ROBOTO.LINEHEIGHT};
        }

    }
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: flex;
        flex-direction: column;
        margin-top: 1.5rem;
    }
`

export const Total = styled.div`
    margin-top: 1.5rem;
    color:  ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_100 : ThemeWhite.DARK_800};
    span {
        b{
            font-size: 1.1rem;
        }
        font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
        font-size: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
        font-weight: ${FONTS.SMALLREGULAR_ROBOTO.WEIGTH};
        line-height: ${FONTS.SMALLREGULAR_ROBOTO.LINEHEIGHT};
    }
`;