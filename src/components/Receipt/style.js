import styled from "styled-components";
import { FONTS } from "../../style/fonts";

export const Container = styled.div`
      position: relative;
      display: inline-block;

    
    
    .notification-count {
      position: absolute;
      top: -12px;
      right: -10px;
      background-color: #b71c1c;
      color: white;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      
      font-family: ${FONTS.MEDIUM_100_POPPINS.FONTFAMILY};
      font-size: ${FONTS.MEDIUM_100_POPPINS.SIZE};
      font-weight: ${FONTS.MEDIUM_100_POPPINS.WEIGTH};


    }
`;