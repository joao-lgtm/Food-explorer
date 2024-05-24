import styled from "styled-components";

export const Container = styled.div`
    background: ${({theme}) => theme.DARK_200};

    border: 1px solid ${({theme}) => theme.DARK_300};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap:12px;

    width: 18.18rem;
    padding: 24px;
    color: white;

    > button {
        width: 100%;
    }
`;


export const Presentation = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Price = styled.div`

`;

export const Count = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:16px;
`;

