import { Navegador } from "../../commom/Navegador/Navegador";
import { Conteudo } from "./ConteudoPaginaPrincipal";
import './PaginaPrincipal.css';


function Cabecalho({paginaAtual}){
    return(<header className="cabecalho">
                <h1 className="logo">Matricula UFC QXD</h1>
                <span className="pagina-atual">Você está na {paginaAtual}</span>
            </header>
    )
}

export function PaginaPrincipal(){

    return (<div>
                <Cabecalho paginaAtual="página principal"></Cabecalho>
                <Navegador></Navegador>
                <Conteudo></Conteudo>
            </div>
            )
}
