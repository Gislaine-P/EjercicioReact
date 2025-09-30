import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { LoginContext } from "./LoginContext"


function Login(){

    const { user,login } = useContext(LoginContext)
    const navegador = useNavigate()
    const [usuario, setUsuario] = useState("")


    const validar = () =>{

        if(usuario === "javi"){
            login(usuario)
  
            navegador("/perfil")
        }else{
            alert("Usuario no registrado")
        }

    }

    return(
        <form>
            <input type="text"
            value={usuario}
            onChange={(e)  => setUsuario(e.target.value)}
            />
            <button onClick={validar}>
                Inicia sesión
            </button>
        </form>
    )
}

export default Login