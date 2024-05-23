import { Banner, Container, Main, TextBanner } from "./style";
import { Header } from './../../components/Header';
import { Footer } from "../../components/Footer";
import BannerImg from "../../assets/pngegg 2.svg"
export function Home() {
    return (
        <Container>
            <Header />
            <Main>
                <Banner>
                    <img src={BannerImg} alt="" />
                    <TextBanner>
                        <p>Sabores inigualáveis</p>
                        <span>Sinta o cuidado do preparo com ingredientes selecionados.</span>
                    </TextBanner>
                </Banner>
            </Main>
            <Footer />
        </Container>
    )
}