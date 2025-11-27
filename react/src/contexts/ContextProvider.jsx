import { createContext, useContext, useState, useEffect, useCallback } from "react";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    jobsRefreshKey: 0,
    setCurrentUser: () => {},
    setJobsRefreshKey: () => {},
    login: () => {},
    logout: () => {},
})

export const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({})
    const [userToken, setUserToken] = useState(localStorage.getItem("TOKEN") || null)
    const [jobsRefreshKey, setJobsRefreshKey] = useState(0);

    const login = (user, token) => {
        setCurrentUser(user);
        setUserToken(token);
        localStorage.setItem("TOKEN", token);
        localStorage.setItem("auth-login", Date.now());
    };

    const logout = useCallback(() => {
        setCurrentUser({});
        setUserToken(null);
        localStorage.removeItem("TOKEN");
        localStorage.setItem("auth-logout", Date.now());
    }, []);

    useEffect(() => {
        const syncAuth = (event) => {
            if (event.key === "auth-login") {
                setUserToken(localStorage.getItem("TOKEN"));
            }

            if (event.key === "auth-logout") {
                setCurrentUser({});
                setUserToken(null);
            }
        };

        window.addEventListener("storage", syncAuth);
        return () => window.removeEventListener("storage", syncAuth);
    }, []);

    useEffect(() => {
        const handleLogout = () => {
            logout();
        };

        window.addEventListener("auth-logout", handleLogout);
        return () => window.removeEventListener("auth-logout", handleLogout);
    }, [logout]);

    return (
        <StateContext.Provider value={{
            currentUser,
            userToken,
            jobsRefreshKey,
            setCurrentUser,
            setJobsRefreshKey,
            login,
            logout,
        }}>
            { children }
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)