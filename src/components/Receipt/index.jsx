import React from 'react';
import { Container } from './style';
import { PiReceiptLight } from "react-icons/pi";
import { useOrder } from '../../hooks/order';
import { useNavigate } from 'react-router-dom';

export function Receipt() {
    const { order ,count } = useOrder();
    const navigation = useNavigate();

    function handleOrderPreview (id){
        navigation(`/salesOrder/${id}`)
    }
    return (
        <Container onClick={() => order ? handleOrderPreview(order.id) : null} >
            <PiReceiptLight size={24} />
            <div className="notification-count">{ count }</div>
        </Container>
    );
};
