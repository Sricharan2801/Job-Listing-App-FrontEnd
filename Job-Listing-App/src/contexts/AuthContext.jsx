import { createContext,useContext,useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [isLoggedIn,setIsLoggedIn] = useState(()=>{
        const storedToken = localStorage.getItem("token")
        return !!storedToken;
    });

    const login = ()=>{
        setIsLoggedIn(true)
    }

    const logout = ()=>{
        setIsLoggedIn(false)
        localStorage.removeItem("token");
        localStorage.removeItem("userName")
    }

    return <AuthContext.Provider  value={{isLoggedIn,login,logout}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = ()=>{
    return useContext(AuthContext)
}