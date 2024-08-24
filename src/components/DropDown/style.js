import styled from "styled-components";

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  width: 200px;
`;

export const DropdownToggle = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.GRAY_100};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.DARK_600};
  border: 1px solid ${({ theme }) => theme.GRAY_300};
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1;
`;

export const DropdownItem = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.DARK_700};

  &:hover {
    background-color: ${({ theme }) => theme.DARK_500};
  }
`;

export const StatusBall = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 100%;
  margin-right: 10px;

  &[data-status="0"] {
    background-color: ${({ theme }) => theme.TOMATO_300};
  }

  &[data-status="1"] {
    background-color: ${({ theme }) => theme.CARROT_100};
  }

  &[data-status="2"] {
    background-color: ${({ theme }) => theme.MINT_100};
  }
`;

export const Arrow = styled.span`
  border: solid ${({ theme }) => theme.GRAY_300};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  margin-left: auto;
`;