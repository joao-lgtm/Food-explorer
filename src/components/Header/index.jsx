import { Container } from "./style";
import Logo from "../../assets/main.svg";
import Hamburger from "../../assets/hamburger.svg";
import { useEffect, useState } from "react";
import { DEVICE_BREAKPOINTS } from "../../style/deviceBreakPoint";
import { Menu } from '../Menu';
import { Receipt } from "../Receipt";
import { useNavigate } from "react-router-dom";

export function Header({ setDisherIngredients }) {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
    });
    const navigation = useNavigate();

    function handleHome(){
        navigation('/');
    }

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        let width = DEVICE_BREAKPOINTS.MD.replace('px', '')

        if (windowSize.width > width) {
            setMenuIsOpen(false)
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        };


    }, [windowSize]);

    return (
        <Container>
            <div onClick={() => setMenuIsOpen(true)}>
                <img src={Hamburger} alt="" />
            </div>
            <img onClick={() => handleHome()} src={Logo} alt="" />

            <Menu
                setDisherIngredients={setDisherIngredients}
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
            />

            <Receipt count={0} />

        </Container>
    )
}