import styled from "styled-components";
import { ThemeBlack, ThemeWhite } from "../../style/theme";

export const Dropdown = styled.div`
  position: relative;
  width: 100%;
  background-color:  ${({ theme }) => theme === ThemeBlack ? ThemeBlack.DARK_900 : ThemeWhite.LIGHT_100};
  border: 1px solid ${({ theme }) => theme.DARK_900};
  color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_100 : ThemeWhite.DARK_900};
  border-radius: 0.25rem;
`;

export const DropdownToggle = styled.div`
  padding: 0.625rem;
  background-color:  ${({ theme }) => theme === ThemeBlack ? ThemeBlack.DARK_900 : ThemeWhite.LIGHT_100};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 0.25rem;
  width: 100%;

  .infos{
    display: flex; 
    align-items: center;
    gap: 0.5rem;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color:  ${({ theme }) => theme === ThemeBlack ? ThemeBlack.DARK_900 : ThemeWhite.LIGHT_100};
  border: 1px solid ${({ theme }) => theme === ThemeBlack ? ThemeBlack.LIGHT_100 : ThemeWhite.DARK_900};
  border-radius: 0.25rem;
  max-height: 12.5rem;
  overflow-y: auto;
  z-index: 1;
`;

export const DropdownItem = styled.div`
  padding: 0.625rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  background-color:  ${({ theme }) => theme === ThemeBlack ? ThemeBlack.DARK_900 : ThemeWhite.LIGHT_100};

  &:hover {
    background-color: ${({ theme }) => theme === ThemeBlack ? ThemeBlack.DARK_500 : ThemeWhite.LIGHT_300};
  }
`;

export const StatusBall = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 100%;
  margin-right: 0.625rem;

  &[data-status="0"] {
    background-color: ${({ theme }) => theme.TOMATO_300};
  }

  &[data-status="1"] {
    background-color: ${({ theme }) => theme.CARROT_100};
  }

  &[data-status="2"] {
    background-color: ${({ theme }) => theme.CAKE_100};
  }

  &[data-status="3"] {
    background-color: ${({ theme }) => theme.MINT_100};
  }
`;

export const Arrow = styled.span`
  border: solid ${({ theme }) => theme.GRAY_300};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 0.188rem;
  transform: rotate(45deg);
  margin-left: auto;
`;