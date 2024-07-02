import Cards from 'react-credit-cards-2';
import { Container } from './styled';
import { useState } from 'react';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { Input } from '../Input';
export function PaymentMethod() {
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;

        setState((prev) => ({ ...prev, [name]: value }));
    }

    const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    }

    return (
        <Container>
            <div>

            </div>
            <Cards
                number={state.number}
                expiry={state.expiry}
                cvc={state.cvc}
                name={state.name}
                focused={state.focus}
            />

            <Input
                type="number"
                name="number"
                placeholder="Card Number"
                value={state.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
            />
            <Input
                type="number"
                name="expiry"
                placeholder="expiry"
                value={state.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
            />
            <Input
                type="text"
                name="name"
                placeholder="name"
                value={state.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
            />


            <Input
                type="number"
                name="cvc"
                placeholder="cvc"
                value={state.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
            />


        </Container>
    )
}