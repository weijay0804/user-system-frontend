import React, { useContext, createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isLogin, setIsLogin] = useState(checkIsLogin());

    useEffect(() => {

        const handleStorageChange = () => {
            setIsLogin(checkIsLogin());
        };

        window.addEventListener('storage', handleStorageChange);

        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const logout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("access_token_expire");
        setIsLogin(false);
    }

    return (
        <AuthContext.Provider value={{ isLogin, setIsLogin, logout }}>
            {children}
        </AuthContext.Provider >
    )
}

const checkIsLogin = () => {

    const token = localStorage.getItem("access_token");
    const expire = localStorage.getItem("access_token_expire");

    if (token && expire) {
        const expireDate = new Date(expire);

        if (expireDate > new Date()) {
            return true;
        }
    }

    return false;
}


export const useAuth = () => useContext(AuthContext);