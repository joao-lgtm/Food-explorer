import styled from "styled-components";
import { FONTS } from "../../style/fonts";
import { DEVICE_BREAKPOINTS } from "../../style/deviceBreakPoint";
import { ThemeBlack, ThemeWhite } from "../../style/theme";


export const Container = styled.div`
    width: 50%;
    h2{
        margin: 0;
        font-family: ${FONTS.MEDIUM_400_POPPINS.FONTFAMILY};
        font-size: ${FONTS.MEDIUM_400_POPPINS.SIZE};
        font-weight: ${FONTS.MEDIUM_400_POPPINS.WEIGTH};
        line-height: ${FONTS.MEDIUM_400_POPPINS.LINEHEIGHT};
    }

    img{
        width: 15rem;
        padding: 1.563rem;
    }

    .close{
        display: none;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: none;
        &[data-paymentobservetion="true"]{
           display: block;
           position: absolute;
           z-index: 1;
           top: 80px;
           left: -0px;
           background-color: ${({ theme }) => theme.DARK_400};
           color: white;
           width: 100%;
           height: 100%;
           padding: 0 0.625rem;
           margin-top: 1rem
        }

        .close{
            display: block;
        }

        h2{
            margin: 3.5rem 0 2rem 0;
            font-family: ${FONTS.MEDIUM_400_POPPINS.FONTFAMILY};
            font-size: ${FONTS.MEDIUM_400_POPPINS.SIZE};
            font-weight: ${FONTS.MEDIUM_400_POPPINS.WEIGTH};
            line-height: ${FONTS.MEDIUM_400_POPPINS.LINEHEIGHT};
        }

        span {
            font-family: ${FONTS.SMALLREGULAR_ROBOTO.FONTFAMILY};
            font-size: ${FONTS.SMALLREGULAR_ROBOTO.SIZE};
            font-weight: ${FONTS.SMALLREGULAR_ROBOTO.WEIGTH};
            line-height: ${FONTS.SMALLREGULAR_ROBOTO.LINEHEIGHT};
            color: ${({ theme }) => theme.LIGHT_100}
        }

        img{
            padding: 1.563rem;
        }
    }



    
`;

export const PaymentContainer = styled.div`
    margin-top: 30px ;
    border: 1px solid ${({ theme }) => theme.LIGHT_600};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.5rem;
    

    .conclude {
        display: flex;
        justify-content: center;
        padding: 0.938rem;
        width: 100%;
        
    }

    .conclude button{
        width: 100%;
        padding: 0.938rem;
    }
 `;

export const PaymentMedthod = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 0.938rem;

    color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_100 : ThemeWhite.DARK_800};

    div:first-child {
        border-right: 1px solid ${({ theme }) => theme.LIGHT_600};
    }

    > div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.875rem;
        padding: 0.625rem 0;
        border-bottom: 1px solid ${({ theme }) => theme.LIGHT_600};
        cursor: pointer;

        
        &[data-payment="pix"]{
            background-color:  ${({ theme }) => theme === ThemeBlack ? ThemeBlack.DARK_800 : ThemeWhite.LIGHT_400};
            
            border-top-left-radius: 0.438rem;
        }
        &[data-payment="credito"]{
            background-color:  ${({ theme }) => theme === ThemeBlack ? ThemeBlack.DARK_800 : ThemeWhite.LIGHT_400};
            border-top-right-radius: 0.438rem;
        }
    }
`;


export const InfoCard = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.938rem;
    padding: 0.938rem;
    margin-top: 1.563rem;

    .card_number{
        width: 100%;
    }

    .expiry_cvc{
        display: flex;
        gap: 1.563rem;
        width: 100%;

        > div {
            width: 100%;
        }
    }
`;