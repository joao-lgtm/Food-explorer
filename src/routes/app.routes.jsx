import { Route, Routes } from "react-router-dom";
import { Home } from "../page/Home";

export function AppRoutes () {
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
        </Routes>
    )
}