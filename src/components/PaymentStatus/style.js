import styled from "styled-components";
import { ThemeBlack, ThemeWhite } from "../../style/theme";
import { FONTS } from "../../style/fonts";

export const Container = styled.div`
     color:  ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_100 : ThemeWhite.DARK_800};
    > div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2.313rem;
        padding: 5.688rem;

        > span{
            font-family: ${FONTS.BIGGERBOLD_ROBOTO.FONTFAMILY};
            font-size: ${FONTS.BIGGERBOLD_ROBOTO.SIZE};
            font-weight:${FONTS.BIGGERBOLD_ROBOTO.WEIGTH};
            color:  ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_400 : ThemeWhite.DARK_800};
        }
    }
`;