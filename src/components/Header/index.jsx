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
import { Input } from "../Input";
import { CiSearch } from "react-icons/ci";
import { Button } from './../Button';
import { useOrder } from "../../hooks/order";
import { PiReceiptLight,PiSignOut } from "react-icons/pi";
import { GoSignOut } from "react-icons/go";

export function Header({ setDisherIngredients }) {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
    });
    const { signOut, user } = useAuth();
    const navigation = useNavigate();
    const { order ,count } = useOrder();
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

    function handleOrderPreview (id){
        navigation(`/salesOrder/${id}`)
    }
    return (
        <Container>
            <RxHamburgerMenu className='icon' onClick={() => setMenuIsOpen(true)} color="white" size={24} />

            <Logo onClick={() => handleHome()} />

            <Menu
                setDisherIngredients={setDisherIngredients}
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
            />

            <div className='search'>
                <Input type="text" onChange={e => setDisherIngredients(e.target.value)} icon={CiSearch} placeholder="Busque por pratos ou ingredientes" />
            </div>

            {[USER_ROLE.CLIENT].includes(user.role) && <Button  onClick={() => order ? handleOrderPreview(order.id) : null}  className='button-receipt' icon={PiReceiptLight } name={`pedidos (${count})`}/>}

            {[USER_ROLE.ADMIN].includes(user.role) && <Button onClick={() => navigation('/newDisher')} className='button-receipt' name={`Novo prato`}/>}

            <div className="receipt">
                {[USER_ROLE.CLIENT].includes(user.role) && <Receipt count={0} />}
            </div>

            <div className="logout">
                <GoSignOut onClick={() => (navigation('/') ,signOut())} color="white"/>
            </div>
            
        </Container>
    )
}