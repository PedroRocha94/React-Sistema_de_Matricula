import { Navegador } from "../../commom/Navegador/Navegador";
import { Conteudo } from "./ConteudoPaginaPrincipal";
import './PaginaPrincipal.css';
import { Cabecalho } from "../../commom/Cabecalho/Cabecalho"



export function PaginaPrincipal() {

    return (<div>
        <Cabecalho paginaAtual="página principal"></Cabecalho>
        <Navegador></Navegador>
        <Conteudo></Conteudo>
    </div>
    )
}
