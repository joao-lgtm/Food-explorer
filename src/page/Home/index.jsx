import { Banner, Container, Main, TextBanner } from "./style";
import { Header } from './../../components/Header';
import { Footer } from "../../components/Footer";
import BannerImg from "../../assets/pngegg 2.svg"
import { Card } from "../../components/Card";
export function Home() {
    return (
        <Container>
            <Header />
            <Main>
                <Banner>
                    <div>
                        <img src={BannerImg} alt="" />
                    </div>
                    <TextBanner>
                        <p>Sabores inigualáveis</p>
                        <span>Sinta o cuidado do preparo com ingredientes selecionados.</span>
                    </TextBanner>
                </Banner>


                <Card />
            </Main>
            <Footer />
        </Container>
    )
}