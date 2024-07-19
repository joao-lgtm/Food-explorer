import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";
import { api } from "../services/api";
import { USER_ROLE } from "../utils/roles";
import { ClientRoutes } from "./client.routes";
import { AdminRoutes } from "./admin.routes";

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

    function AccessRoute() {
        switch (user.role) {
          case USER_ROLE.ADMIN:
            return <AdminRoutes />
          case USER_ROLE.CLIENT:
            return <ClientRoutes />
        }
      }

    return user ? <AccessRoute /> : <AuthRoutes />;
}

export function Routes() {
    return <RoutesComponent />;
}
