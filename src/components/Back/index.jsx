import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { Container } from './style';
export function Back() {
    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    return (
        <Container onClick={handleBack}>
            <IoIosArrowBack  size={20}/> <span>Voltar</span>
        </Container>
    )

}
