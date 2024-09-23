import sunPath from "../../assets/sun.svg";
import moonPath from "../../assets/moon.svg";

export const Container = styled.div`
    border: 2px solid red;
    padding: 0.31rem;
    border-radius: 0.625rem;
    width: 4.5rem;
    background-color: white;

    > div {
        background-image: url(${sunPath}); // Agora utilizando a variável sunPath
        background-repeat: no-repeat;
        background-position: center;
        width: 5px;
        padding: 0.925rem;
        border-radius: 50%;
        transform: translateX(0%);
        transition: transform 1s ease-in-out;

        &[data-theme-mode="true"] {
            background-image: url(${moonPath}); // Usando moonPath
            transform: translateX(100%);
        }
    }
`;
