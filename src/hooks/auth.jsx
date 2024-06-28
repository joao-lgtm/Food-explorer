import { createContext, useContext, useState, useEffect } from 'react';
import { api } from "../services/api";
import { toast } from 'react-toastify';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    if(email === ""  || password === ""){
      return toast.error("Preencha todos os campos");
    }
    try {

      const response = await api.post("sessions", { email, password }, { withCredentials: true });
      const { user } = response.data;

      localStorage.setItem("@food:user", JSON.stringify(user));
      setData({ user });
    } catch (error) {
      toast.error("Não encontrado");
    }
  }

  async function signOut() {
    localStorage.removeItem("@food:user");
    await api.post("sessions/delete", {}, { withCredentials: true });
    setData({});

  }

  useEffect(() => {
    const user = localStorage.getItem("@food:user");

    if (user) {
      setData({
        user: JSON.parse(user)
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
