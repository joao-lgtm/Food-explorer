import styled from "styled-components";
import { ThemeBlack, ThemeWhite } from "../../style/theme";
import { FONTS } from "../../style/fonts";
import { DEVICE_BREAKPOINTS } from "../../style/deviceBreakPoint";

export const Container = styled.header`
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    border-bottom: 1px solid ${({ theme }) => theme.DARK_700};
    background-color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.DARK_700 : ThemeWhite.LIGHT_100};
    color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_100 : ThemeWhite.DARK_700};


    padding: 3.5rem 1.75rem 1.5rem 1.75rem;
    font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
    font-size: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
    font-weight: ${FONTS.SMALLREGULAR_ROBOTO.WEIGTH};
    line-height: ${FONTS.SMALLREGULAR_ROBOTO.LINEHEIGHT};


    .favorites{
        cursor: pointer;
    }
    .order-history{
        cursor: pointer;
    }
    
    .icon{
         display: none;
    }

    .search{
        width: 23%;
    }

    .theme{
        display: block;
    }

    .receipt{
        display: none;
    }
    
    .button-receipt{
        padding: 1rem 2.906rem 1rem 2.906rem ;
    }

    .logout{
        cursor: pointer;
        > svg{
            width: 1.375rem;
            height: 1.375rem;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        justify-content: space-between;
        .icon{
            display: block;
        }

        .search{
            display: none;
        }

        .receipt{
            display: block;
        }
        .button-receipt{
            display: none;
        }

        .theme{
            display: none;
        }

        .logout{
            display: none;
        }
        .favorites{
            display: none;
        }
        .order-history{
            display: none;
        }
    }



`;
