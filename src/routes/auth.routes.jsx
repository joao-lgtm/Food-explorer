import { Routes, Route, Navigate } from "react-router-dom";
import { SingIn } from './../page/SingIn';
import { SingUp } from './../page/SingUp/index';

export function AuthRoutes () {
    return(
        <Routes>
            <Route path="/" element={<SingIn />}></Route>
            <Route path="/SingUp" element={<SingUp />}></Route>
        </Routes>
    )

}