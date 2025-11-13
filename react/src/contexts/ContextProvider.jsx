import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    setCurrentUser: () => {},
    setUserToken: () => {}
})

export const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({})
    const [userToken, _setUserToken] = useState(localStorage.getItem("TOKEN") || sessionStorage.getItem("TOKEN") || '')

    const setUserToken = (token, remember = false) => {
        if (token) {
            if (remember) {
                localStorage.setItem("TOKEN", token);
            } else {
                sessionStorage.setItem("TOKEN", token);
            }
        } else {
        localStorage.removeItem("TOKEN");
        sessionStorage.removeItem("TOKEN");
        }
        _setUserToken(token);
    };

    return (
        <StateContext.Provider value={{
            currentUser,
            userToken,
            setCurrentUser,
            setUserToken
        }}>
            { children }
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)