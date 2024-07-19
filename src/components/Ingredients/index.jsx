import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./style";

export function Ingredients({ isNew = false, value, onClick, ...rest }) {

    return (
        <Container $isNew={isNew}>
                <input
                    type="text"
                    value={value}
                    readOnly={!isNew}
                    {...rest}
                />
                <button
                    type="button"
                    onClick={onClick}
                    className={isNew ? 'button-add' : 'button-delete'}
                >
                    {isNew ? <FiPlus className="" /> : <FiX  />}
                </button>
        </Container>
    )
}