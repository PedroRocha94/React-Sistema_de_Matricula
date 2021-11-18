import { Navegador } from "../../commom/Navegador/Navegador";

function Conteudo(){
    
    let disciplinas = [
        {
            nome: "LMS",
            codigo: "QXD253"
        },
        {
            nome: "PIW",
            codigo: "QXD5435"
        },
        {
            nome: "SOC",
            codigo: "QXD2323"
        },
        {
            nome:"POO",
            codigo:"QXD4546"
        }
    ];
    
    //let lis = [];
    //for(let i=0; i<disciplinas.length;i++){
    //    lis.push(<li>{disciplinas[i].nome} - {disciplinas[i].codigo}</li>)
    //}

    let lis = disciplinas.map(
        (disciplina) => (
                           <li>
                               {disciplina.nome} - {disciplina.codigo}
                           </li>
                        )
    );

    return(<div>
                <ul>
                    {lis}
                </ul>
           </div>
    )
}

function Cabecalho({paginaAtual}){
    return(<header>
                <h1>Matricula UFC QXD</h1>
                <span>Você está na {paginaAtual}</span>
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
