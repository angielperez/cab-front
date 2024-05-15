import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem("user") || null);
    const [token, setToken] = useState(null);
    const navigate = useNavigate();
    const loginAction = (data) => {
        if (data.username === "admin" && data.password === "12345") {
            let token = "kjsdhufhsdjfnlsduf8"
            setUser(data.username);
            setToken(token);
            localStorage.setItem("user", data.username);
            localStorage.setItem("token", token);
            navigate("/dashboard");
            return;
        }
        throw Error("Usuario no encontrado");
    };
    const logOut = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/login");
    };
    return (
        <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;
//Hook personalizado
export const useAuth = () => {
    return {
        user: localStorage.getItem("user") || null,
        token: localStorage.getItem("token") || null,
        actions: useContext(AuthContext)
    }
};