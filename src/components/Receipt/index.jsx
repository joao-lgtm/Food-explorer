import React from 'react';
import { Container } from './style';
import recipt from '../../assets/Vector.svg'
import { useOrder } from '../../hooks/order';

export function Receipt() {
    const { count } = useOrder()
    return (
        <Container>
            <img src={recipt} alt="" srcset="" />
            <div className="notification-count">{ count }</div>
        </Container>
    );
};
