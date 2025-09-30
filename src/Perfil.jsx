import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { LoginContext } from "./LoginContext"

export function Perfil(){
    const navegador = useNavigate()
    const {user, logout} = useContext(LoginContext)

    const cerrar = ()=>{
        logout()
        navegador("/")
    }

    return(
        <>
        <h1>Hola, {user}</h1>
        <p> Nombre : {user}</p>
        <p> Correo : correo@correo.cl</p>
        <button onClick={cerrar}>Cerrar Sesion</button>
        </>
    )
}