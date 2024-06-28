import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useAuth } from "../hooks/auth";
import { api } from "../services/api";

function RoutesComponent() {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const validateUser = async () => {
            try {
                await api.get('/users/validated', { withCredentials: true });
            } catch (error) {
                if (error.response?.status === 401) {
                    signOut();
                    navigate('/');
                }
            }
        };

        validateUser();
    }, []);

    return user ? <AppRoutes /> : <AuthRoutes />;
}

export function Routes() {
    return <RoutesComponent />;
}
