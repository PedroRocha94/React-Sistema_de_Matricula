import "./Navegador.css";
import { NavLink } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "../../../App";

function NavegadorLogado({ nome }) {

    const { setAuth } = useContext(AuthContext);


    return (
        <nav className="navegador">
            <NavLink exact className="link-navegador" to="/">
                Página Principal
            </NavLink>
            <NavLink className="link-navegador" to="/matriculas">
                Listar Matriculas
            </NavLink>
            <div className="link-navegador" style={{ "margin-left": "auto" }}
                onClick={() => { setAuth({ token: null, nome: null }) }}>
                Logout
            </div>
            <div className="link-navegador">
                {nome}
            </div>

        </nav>
    )

}

function NavegadorNaoLogado() {
    return (
        <nav className="navegador">
            <NavLink className="link-navegador" to={"/cadastro/"} style={{ "margin-left": "auto" }}>
                Cadastrar-se
            </NavLink>
            <NavLink className="link-navegador" to={"/login/"}>
                Login
            </NavLink>
        </nav>
    )
}


export function Navegador() {

    const { auth } = useContext(AuthContext);

    return (
        <div>
            {
                auth.token == null ?
                    <NavegadorNaoLogado></NavegadorNaoLogado> :
                    <NavegadorLogado nome={auth.nome}></NavegadorLogado>
            }
        </div>


    )
}
