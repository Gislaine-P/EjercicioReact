import { createContext, useEffect, useState } from "react";

 export const LoginContext = createContext()

 export function LoginProvider({ children }){
    const [user,setUser] = useState(null)

    useEffect(()=>{
        const usuarioGuardado = localStorage.getItem("user")
        if(usuarioGuardado) setUser(usuarioGuardado)
    },[])

    const login = (userInfo) => {
        setUser(userInfo)
        localStorage.setItem("user",userInfo)
    }


    const logout = () =>{
        setUser(null)
        localStorage.removeItem("user")
    }

    return(
        <LoginContext.Provider value={{user,login,logout}}>
            { children }
        </LoginContext.Provider>

    )
 }