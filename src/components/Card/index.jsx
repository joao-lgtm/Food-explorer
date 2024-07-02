import { Container, Favorite, Presentation, Price } from "./style";
import { Button } from './../Button';
import { Count } from '../../components/Count';
import Dish from "../../assets/Dish.svg";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useEffect, useState, useRef } from "react";
import { useOrder } from "../../hooks/order";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function Card({id, img,  name , price ,liked = false}) {
    const [isOver, setIsOver] = useState(false);
    const [isLiked, setIsLiked] = useState(liked);
    const [amount, setAmount] = useState(1);
    const favoriteRef = useRef(null);
    const { handleOrder } = useOrder();
    const navigation = useNavigate();

    function Liked(isliked) {
        
        //api.update('/like')
    }

    const disherImg = img ? `${api.defaults.baseURL}/files/${img}` : null;

    useEffect(() => {
        const handleMouseEnter = () => setIsOver(true);
        const handleMouseLeave = () => setIsOver(false);

        const favoriteElement = favoriteRef.current;
        favoriteElement.addEventListener("mouseenter", handleMouseEnter);
        favoriteElement.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            favoriteElement.removeEventListener("mouseenter", handleMouseEnter);
            favoriteElement.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    function singleDisher(id) {
        navigation(`/disher/${id}`)
    }
    return (
        <Container>
            <Favorite
                onClick={() => Liked(!isLiked)}
                ref={favoriteRef}
            >
                {isOver || isLiked ?
                    <MdOutlineFavorite cursor="pointer" color="white" size={24} />
                    : <MdOutlineFavoriteBorder cursor="pointer" color="white" size={24} />
                }
            </Favorite>
            <Presentation  onClick={() => singleDisher(id)}>
                <img src={disherImg} alt="" />
                {name}
            </Presentation>

            <Price>
                R$ {price}
            </Price>
            <Count setAmount={setAmount} amount={amount} size={18}/>
            <Button onClick={() => handleOrder(id, amount ,price)} name="Incluir" />
        </Container>
    );
}
