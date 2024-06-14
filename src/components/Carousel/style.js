import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const ContainerCarousel = styled.div`
    max-width: 100%;
    overflow-x: auto;
    display: inline-flex;
    gap: 16px;


    > * {
        flex-shrink: 0;
    }
`;