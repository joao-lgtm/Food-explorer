import { Route, Routes } from "react-router-dom";
import { Home } from "../page/Home";
import { MyOrder } from "../page/MyOrder";
import { DisherPage } from "../page/Disher";
import { MyOrders } from "../page/MyOrders";

export function AppRoutes () {
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/salesOrder/:id" element={<MyOrder />}></Route>
            <Route path="/salesOrder" element={<MyOrders />}></Route>
            <Route path="/disher/:id" element={<DisherPage />}></Route>
        </Routes>
    )
}