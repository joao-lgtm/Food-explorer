import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.LIGHT_600}; ;
    border-radius: 0.5rem;
    width: 9rem;
   
    border-radius: 0.5rem;
    
    border: ${({ theme, $isNew }) => $isNew ? "1px dashed gray" : "none"};
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;

    color: ${({ theme, $isNew }) => $isNew ? "gray" : "white"};

    svg {
        color: ${({ theme }) => theme};
    }

    input {
        width: 100%;
        color: ${({ theme }) => theme.LIGHT_100};
        background: transparent;
        border: none;
        &::placeholder{
            color: ${({ theme }) => theme.LIGHT_600};
        }
        outline: none;
    }

    > button {
        background: none;
        border: none;
        cursor: pointer;
    }

    .button-add{
        color: ${({ theme }) => theme.LIGHT_600}
    }

    .button-delete{
        color: ${({ theme }) => theme.LIGHT_100}
    }
`;
