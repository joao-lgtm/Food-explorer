import styled from "styled-components";
import { FONTS } from "../../style/fonts";
import { DEVICE_BREAKPOINTS } from "../../style/deviceBreakPoint";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 47px;
    color: ${({ theme }) => theme.LIGHT_300};


    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: flex;
        flex-direction: column;
    }
`;

export const Img = styled.div`
    > img {
        width: 24.375rem;
        height: 389px;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;

        > img {
            width: 263px;
            height: 263px;
        }
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
`;

export const Title = styled.div`
    display: flex;
    
    > h2 {
            font-family: ${FONTS.MEDIUM_500_POPPINS.FONTFAMILY};
            font-size: ${FONTS.MEDIUM_500_POPPINS.SIZE};
            line-height: ${FONTS.MEDIUM_500_POPPINS.LINEHEIGHT};
            font-weight: ${FONTS.MEDIUM_500_POPPINS.WEIGTH};
        }


    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: flex;
        justify-content: center;
        > h2 {
            font-family: ${FONTS.MEDIUM_400_POPPINS.FONTFAMILY};
            font-size: 1.6rem;
            line-height: ${FONTS.MEDIUM_400_POPPINS.LINEHEIGHT};
            font-weight: ${FONTS.MEDIUM_400_POPPINS.WEIGTH};
        }
    }
`;

export const Description = styled.div`
        > span {
                text-align: center;
                font-family: ${FONTS.REGULAR_300_POPPINS.FONTFAMILY};
                font-size: ${FONTS.REGULAR_300_POPPINS.SIZE};
                line-height: ${FONTS.REGULAR_300_POPPINS.LINEHEIGHT};
        }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: flex;
        justify-content: center;
        > span {
                text-align: center;
                font-family: ${FONTS.REGULAR_300_POPPINS.FONTFAMILY};
                font-size: ${FONTS.REGULAR_300_POPPINS.SIZE};
                line-height: ${FONTS.REGULAR_300_POPPINS.LINEHEIGHT};
        }
    }
`;

export const Ingredients = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1.5rem;
        margin-bottom: 3rem;
    }
`;


export const OrderControls = styled.div`
    display: flex;
    gap: 33px;

    > button{
        padding: 12px 24px;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: flex;
        gap: 0.625rem;
        
        > div {
            flex: 1;
        }
        > button{
            flex: 2;
        }
    }
`;