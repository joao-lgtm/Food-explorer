import { useNavigate, useParams } from 'react-router-dom';
import { Back, Container,Main } from './style'
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { IoIosArrowBack } from 'react-icons/io';
import { Disher } from '../../components/Disher';

export function DisherPage() {
    const { id } = useParams();

    const navigate = useNavigate();
  
    function handleBack() {
        navigate(-1);
    }
    return (
        <Container>
            <Header />
            <Main>
                <Back onClick={handleBack}>
                    <IoIosArrowBack size={20} /> <span>Voltar</span>
                </Back>
                <Disher id={id}/>
            </Main>
            <Footer />
        </Container>
    )
}