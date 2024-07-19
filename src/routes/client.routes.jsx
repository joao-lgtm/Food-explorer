import { Routes, Route } from 'react-router-dom';

import { Home } from '../page/Home';
import { MyOrder } from '../page/MyOrder';
import { MyOrders } from '../page/MyOrders';
import { DisherPage } from '../page/Disher';


export function ClientRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/salesOrder/:id" element={<MyOrder />}></Route>
            <Route path="/salesOrder" element={<MyOrders />}></Route>
            <Route path="/disher/:id" element={<DisherPage />}></Route>
        </Routes>
    );
}