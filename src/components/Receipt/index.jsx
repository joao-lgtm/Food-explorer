import React from 'react';
import { Container } from './style';
import recipt from '../../assets/Vector.svg'

export function Receipt ({ count }) {
    return (
        <Container>
            <img src={recipt} alt="" srcset="" />
            {count > 0 && <div className="notification-count">{count}</div>}
        </Container>
    );
};
