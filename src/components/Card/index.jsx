import { Container, Disher, Edit, Favorite, Name, Presentation, Price } from "./style";
import { Button } from './../Button';
import { Count } from '../../components/Count';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useEffect, useState, useRef } from "react";
import { useOrder } from "../../hooks/order";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";

export function Card({ id, img, name, price, liked = false }) {
    const { user } = useAuth();
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

    function editDisher(id) {
        navigation(`disher/edit/${id}`)
    }

    return (
        <Container>
            {[USER_ROLE.ADMIN].includes(user.role) &&
                <>
                    <Edit ref={favoriteRef}>
                        <MdOutlineModeEditOutline onClick={() => editDisher(id)} cursor="pointer" color="white" size={24} />
                    </Edit>
                </>
            }
            {[USER_ROLE.CLIENT].includes(user.role) &&
                <>
                    <Favorite
                        onClick={() => Liked(!isLiked)}
                        ref={favoriteRef}
                    >
                        {isOver || isLiked ?
                            <MdOutlineFavorite cursor="pointer" color="white" size={24} />
                            : <MdOutlineFavoriteBorder cursor="pointer" color="white" size={24} />
                        }
                    </Favorite>
                </>
            }
            <Disher>
                <Presentation onClick={() => singleDisher(id)}>
                    <img src={disherImg} alt="" />

                </Presentation>
                <Name>{name}</Name>
                <Price>
                    R$ {price}
                </Price>
                {[USER_ROLE.CLIENT].includes(user.role) &&
                    <>
                        <Count setAmount={setAmount} amount={amount} size={18} />

                        <Button onClick={() => handleOrder(id, amount, price)} name="Incluir" />
                    </>
                }
            </Disher>
        </Container>
    );
}
