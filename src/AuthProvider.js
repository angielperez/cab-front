import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem("user") || null);
    const [token, setToken] = useState(null);
    const navigate = useNavigate();
    
    const logOut = () => {
        setToken("");
        localStorage.removeItem("token");
        navigate("/login");
    };
    return (
        <AuthContext.Provider value={{ token, user, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;
//Hook personalizado
export const useAuth = () => {
    return {
        token: localStorage.getItem("token") || null,
        actions: useContext(AuthContext)
    }
};