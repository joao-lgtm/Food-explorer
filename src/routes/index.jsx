import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { AuthProvider } from "../hooks/auth";

export function Routes() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AuthRoutes />
            </AuthProvider>
        </BrowserRouter>
    )

}