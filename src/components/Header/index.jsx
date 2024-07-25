import { Container } from "./style";
import { useEffect, useState } from "react";
import { DEVICE_BREAKPOINTS } from "../../style/deviceBreakPoint";
import { Menu } from '../Menu';
import { Receipt } from "../Receipt";
import { useNavigate } from "react-router-dom";
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";
import { RxHamburgerMenu } from "react-icons/rx";
import { Logo } from "../Logo";

export function Header({ setDisherIngredients }) {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
    });
    const { user } = useAuth();
    const navigation = useNavigate();

    function handleHome() {
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
            <RxHamburgerMenu onClick={() => setMenuIsOpen(true)}color="white" size={24}/>
            
            <Logo onClick={() => handleHome()}/>

            <Menu
                setDisherIngredients={setDisherIngredients}
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
            />

            <div>
                {[USER_ROLE.CLIENT].includes(user.role) && <Receipt count={0} />}
            </div>
        </Container>
    )
}