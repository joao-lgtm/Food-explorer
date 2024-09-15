import styled from "styled-components";
import { ThemeBlack, ThemeWhite } from "../../style/theme";
import { DEVICE_BREAKPOINTS } from "../../style/deviceBreakPoint";
import { FONTS } from "../../style/fonts";

export const Container = styled.footer`
    grid-area: footer;
    display: flex;
    align-items: center;
    justify-content: space-around;

    padding: 1.719rem;

    background-color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.DARK_700 : ThemeWhite.LIGHT_100};
    color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_100 : ThemeWhite.DARK_700};

    border-top: 1px solid ${({ theme }) => theme.DARK_700};

    .theme{
        display: none;
    }

    > img {
        width: 11.563rem;
        height: 1.813rem;
    }

    > div > span {
        font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
        font-size: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
        font-weight: ${FONTS.SMALLREGULAR_ROBOTO.WEIGTH};
        line-height: ${FONTS.SMALLREGULAR_ROBOTO.LINEHEIGHT};
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding: 1.83rem 1.73rem;
       
        > img {
            width: 8.875rem;
            height: 1.14rem;
        }
        > div > span {
            font-family: "DM Sans";
            font-size: 0.75rem;
        }
   
        .theme{
            display: block;
        }
        }
`;