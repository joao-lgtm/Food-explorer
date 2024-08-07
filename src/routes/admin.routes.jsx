import { Route, Routes } from "react-router-dom";
import { DisherPage } from "../page/Disher";
import { NewDisher } from "../page/NewDisher";
import { Home } from "../page/Home";
import { EditDisher } from "../page/EditDisher";
import { MyOrders } from './../page/MyOrders/index';

export function AdminRoutes () {
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/newDisher" element={<NewDisher />}></Route>
            <Route path="/disher/:id" element={<DisherPage />}></Route>
            <Route path="/disher/edit/:id" element={<EditDisher />}></Route>
            <Route path="/salesOrder" element={<MyOrders />}></Route>
        </Routes>
    )
}