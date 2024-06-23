import React from 'react';
import { Container } from './style';
import recipt from '../../assets/Vector.svg'
import { useOrder } from '../../hooks/order';
import { useNavigate } from 'react-router-dom';

export function Receipt() {
    const { order ,count } = useOrder();
    const navigation = useNavigate();

    function handleOrderPrview (id){
        navigation(`/salesOrder/${id}`)
    }
    return (
        <Container onClick={() => handleOrderPrview(order.id)} >
            <img src={recipt} alt="" srcset="" />
            <div className="notification-count">{ count }</div>
        </Container>
    );
};
