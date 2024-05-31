import { Container } from "./style";
import Logo from "../../assets/main.svg";
import Hamburger from "../../assets/hamburger.svg";
import { useEffect, useState } from "react";
import { DEVICE_BREAKPOINTS } from "../../style/deviceBreakPoint";
import { Menu } from '../Menu';
import { Receipt } from "../Receipt";

export function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
    });

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
                <img src={Hamburger} alt=""/>
            </div>
            <img src={Logo} alt="" />

            <Menu
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
            />

            <Receipt count={0} />

        </Container>
    )
}