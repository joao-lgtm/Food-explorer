import { Route, Routes } from "react-router-dom";
import { DisherPage } from "../page/Disher";
import { NewDisher } from "../page/NewDisher";
import { Home } from "../page/Home";

export function AdminRoutes () {
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/newDisher" element={<NewDisher />}></Route>
            <Route path="/disher/:id" element={<DisherPage />}></Route>
        </Routes>
    )
}