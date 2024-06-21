import { Container, Count, Favorite, Presentation, Price } from "./style";
import { Button } from './../Button';
import Dish from "../../assets/Dish.svg";
import { LuMinus } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useEffect, useState, useRef } from "react";
import { useOrder } from "../../hooks/order";

export function Card({id, name , price ,liked = false}) {
    const [isOver, setIsOver] = useState(false);
    const [isLiked, setIsLiked] = useState(liked);
    const [amount, setAmount] = useState(1);
    const favoriteRef = useRef(null);
    const { handleOrder } = useOrder();

    function Liked(isliked) {
        
        //api.update('/like')
    }


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

    function count(action) {
        if (action === "sum") {
            setAmount(amount + 1);
        } else if (action === "subtraction" && amount > 1) {
            setAmount(amount - 1);
        }
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
            <Presentation>
                <img src={Dish} alt="" />
                {name}
            </Presentation>

            <Price>
                R$ {price}
            </Price>
            <Count>
                <LuMinus onClick={() => count("subtraction")} cursor="pointer" size={18} />
                {amount}
                <LuPlus onClick={() => count("sum")} cursor="pointer" size={18} />
            </Count>
            <Button onClick={() => handleOrder(id, amount ,price)} name="Incluir" />
        </Container>
    );
}
