import styled from "styled-components";
import { ThemeBlack, ThemeWhite } from "../../style/theme";
import { FONTS } from "../../style/fonts";
import { DEVICE_BREAKPOINTS } from "../../style/deviceBreakPoint";

export const Container = styled.header`
    grid-area: header;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.DARK_700 : ThemeWhite.LIGHT_100};
    justify-content: space-evenly;
    padding: 3.5rem 1.75rem 1.5rem 1.75rem;
    
    .icon{
         display: none;
    }

    .search{
        width: 60%;
    }

    .receipt{
        display: none;
    }
    
    .button-receipt{
        padding: 16px 46.5px 16px 46.5px ;
    }

    .logout{
        cursor: pointer;
        > svg{
            width: 22px;
            height: 22px;
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

        .logout{
            display: none;
        }
    }



`;
