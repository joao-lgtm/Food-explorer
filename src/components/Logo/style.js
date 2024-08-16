import styled from "styled-components";
import { FONTS } from "../../style/fonts";


export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
        > img {
            width:  10rem;
            height: 1.563rem;
        }
        > div{
            display: flex;
            align-items: center;
            gap: 5px;
            > img {              
                width: ${({ imgSize }) => imgSize || "1.5rem"};
                height: ${({ imgSize }) => imgSize || "1.5rem"};

            }
            > h1{
                font-family: ${FONTS.BIGGERBOLD_ROBOTO.FONTFAMILY};
                font-size: ${({ fontSize }) => fontSize ? fontSize : FONTS.BIGGERBOLD_ROBOTO.SIZE};
                font-weight: ${FONTS.BIGGERBOLD_ROBOTO.WEIGTH};
                color: ${({ theme }) => theme.LIGHT_100};
            }
        }
        > span {
            font-family: ${FONTS.SMALLEST_ROBOTO.FONTFAMILY};
            size: ${FONTS.SMALLEST_ROBOTO.SIZE};
            font-weight: ${FONTS.SMALLEST_ROBOTO.WEIGTH};
            line-height: ${FONTS.SMALLEST_ROBOTO.LINEHEIGHT};
            color: ${({ theme }) => theme.CAKE_200};
        }
`;