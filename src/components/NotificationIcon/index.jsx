// src/NotificationIcon.js
import React from 'react';
import { Container } from './style';
import { PiReceipt } from 'react-icons/pi';
import recipt from '../../assets/Vector.svg'

const NotificationIcon = ({ count }) => {
    return (
        <Container>
            <img src={recipt} alt="" srcset="" />
            {count > 0 && <div className="notification-count">{count}</div>}
        </Container>
    );
};

export default NotificationIcon;
