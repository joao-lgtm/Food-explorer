import { useParams } from 'react-router-dom';
import { Container,Main } from './style'
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Disher } from '../../components/Disher';
import { Back } from '../../components/Back';

export function DisherPage() {
    const { id } = useParams();


    return (
        <Container>
            <Header />
            <Main>
                <Back />
                <Disher id={id}/>
            </Main>
            <Footer />
        </Container>
    )
}