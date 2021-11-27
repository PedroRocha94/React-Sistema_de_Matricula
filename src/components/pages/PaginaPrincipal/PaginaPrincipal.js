import { Navegador } from "../../commom/Navegador/Navegador";
import { Conteudo } from "./ConteudoPaginaPrincipal";
import './PaginaPrincipal.css';
import { Cabecalho } from "../../commom/Cabecalho/Cabecalho"
import { useContext, useEffect, useState } from "react";
import { listarDisciplinas } from "../../../api/disciplinasAPI";
import { AuthContext } from "../../../App";



export function PaginaPrincipal() {

    const { auth } = useContext(AuthContext);

    const [disciplinas, setDisciplinas] = useState([]);

    useEffect(() => {
        listarDisciplinas(auth.token).then(
            (response) => {
                setDisciplinas(response.data);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }, []);

    return (<div>
        <Cabecalho paginaAtual="página principal"></Cabecalho>
        <Navegador></Navegador>
        <Conteudo disciplinas={disciplinas}></Conteudo>
    </div>
    )
}
