import { Banner, Container, Main, TextBanner } from "./style";
import { Header } from './../../components/Header';
import { Footer } from "../../components/Footer";
import BannerImg from "../../assets/pngegg 2.svg"
import { CarouselTest } from "../../components/Carousel";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function Home() {
    const [dishes, setDishes] = useState();
    const [disheringredients, setDisherIngredients] = useState("");
    const { signOut } = useAuth();


    
    useEffect(() => {
        async function handleDishes() {
            try {
                const response = await api.get(`/dishes?disher_ingredients=${disheringredients}`, { withCredentials: true });
                setDishes(response.data);
            } catch (error) {
                if (error.response?.status === 401) {
                    signOut();
                    window.location.href = '/';
                }
            }
        }

        handleDishes()
    }, [disheringredients]);


    return (
        <Container>
            <Header setDisherIngredients={setDisherIngredients} />
            <Main >
                <Banner>
                    <div>
                        <img src={BannerImg} alt="" />
                    </div>
                    <TextBanner>
                        <h2>Sabores inigualáveis</h2>
                        <span>Sinta o cuidado do preparo com ingredientes selecionados.</span>
                    </TextBanner>
                </Banner>
                {dishes && dishes.map(disher => (
                    <CarouselTest key={disher.key} title={disher.key} disher={disher.value} />
                ))}
            </Main>
            <Footer />
        </Container>
    )
}