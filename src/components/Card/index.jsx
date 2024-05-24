import { Container, Count, Presentation, Price } from "./style";
import { Button } from './../Button';
import Dish from "../../assets/Dish.svg";
import { LuMinus } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";

export function Card({ name = "Salada Ravanello", price = "49,97", count = 1 }) {
    return (
        <Container>
            <Presentation>
                <img src={Dish} alt="" srcset="" />
                {name} 
            </Presentation>

            <Price>
                R$ {price}
            </Price>
            <Count>
                <LuMinus size={18}/>
                {count}
                <LuPlus size={18}/>
            </Count>
            <Button name="Incluir" />
        </Container>
    );
}