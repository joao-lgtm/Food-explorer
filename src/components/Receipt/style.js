import styled from "styled-components";
import { FONTS } from "../../style/fonts";

export const Container = styled.div`
      position: relative;
      display: inline-block;

    
    
    .notification-count {
      position: absolute;
      top: -0.75rem;
      right: -0.625rem;
      background-color: #b71c1c;
      color: ${({theme}) => theme.LIGHT_100};
      width: 1.25rem;
      height: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      
      font-family: ${FONTS.MEDIUM_100_POPPINS.FONTFAMILY};
      font-size: ${FONTS.MEDIUM_100_POPPINS.SIZE};
      font-weight: ${FONTS.MEDIUM_100_POPPINS.WEIGTH};


    }
`;