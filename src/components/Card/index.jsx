import { Container, Count, Favorite, Presentation, Price } from "./style";
import { Button } from './../Button';
import Dish from "../../assets/Dish.svg";
import { LuMinus } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useEffect, useState, useRef } from "react";

export function Card({ name = "Salada Ravanello", price = "49,97",liked = false}) {
    const [isOver, setIsOver] = useState(false);
    const [isLiked, setIsLiked] = useState(liked);
    const [count, setCount] = useState(1);

    const favoriteRef = useRef(null);

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

    function ammount(action) {
        if (action === "sum") {
            setCount(count + 1);
        } else if (action === "subtraction" && count > 1) {
            setCount(count - 1);
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
                <LuMinus onClick={() => ammount("subtraction")} cursor="pointer" size={18} />
                {count}
                <LuPlus onClick={() => ammount("sum")} cursor="pointer" size={18} />
            </Count>
            <Button name="Incluir" />
        </Container>
    );
}
