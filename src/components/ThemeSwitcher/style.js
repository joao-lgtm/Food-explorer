import styled from "styled-components";
import { ThemeBlack, ThemeWhite } from "../../style/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  
  // Estilo baseado no tema
  background-color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.DARK_800  : ThemeWhite. LIGHT_100};
  color: #fff;

  div {
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
    background-color: #555;
    transition: background-color 0.3s ease;

    &:hover {
      background-color:#666;
    }
  }
`;