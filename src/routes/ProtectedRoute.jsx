import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Preloader from "../components/Preloader";

const ProtectedRoute = ({ allowedRoles, children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}auth/verify-auth`, { withCredentials: true })
            .then((res) => {
                setIsAuthenticated(res.data.isAuthenticated);
                setUser(res.data.user);
            })
            .catch(() => setIsAuthenticated(false))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <Preloader/>;

    if (!isAuthenticated) return <Navigate to="/login" />;

    

    if (!allowedRoles.includes(user?.role)) {
        return <Navigate to="/" />;
    }

    

    return children; 
};

export default ProtectedRoute;


