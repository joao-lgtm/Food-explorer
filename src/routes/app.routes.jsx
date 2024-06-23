import { Route, Routes } from "react-router-dom";
import { Home } from "../page/Home";
import { MyOrder } from "../page/MyOrder";

export function AppRoutes () {
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/salesOrder/:id" element={<MyOrder />}></Route>
        </Routes>
    )
}