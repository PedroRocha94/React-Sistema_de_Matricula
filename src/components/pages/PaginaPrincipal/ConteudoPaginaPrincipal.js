import history from "../../../history";

function Card({ disciplina }) {

    let nomeClasse = "card";
    if (disciplina.disponivel === false) {
        nomeClasse += " fundo-vermelho";
    }

    function foiClicado() {
        console.log("clik");
        history.push('/disciplinas' + disciplina.id);
    }

    return (
        <div className={nomeClasse} onClick={foiClicado}>
            <h3 className="titulo-card">{disciplina.nome}</h3>
            <span className="codigo-card">{disciplina.codigo}</span>
        </div>
    )
}

export function Conteudo() {

    let disciplinas = [
        {
            id: "123",
            nome: "LMS",
            codigo: "QXD253",
            disponivel: false,
        },
        {
            id: "234",
            nome: "PIW",
            codigo: "QXD5435",
            disponivel: true,
        },
        {
            id: "345",
            nome: "SOC",
            codigo: "QXD2323",
            disponivel: false,
        },
        {
            id: "456",
            nome: "POO",
            codigo: "QXD4546",
            disponivel: true,
        }
    ];

    let cards = disciplinas.map((disciplina) => (
        <Card
            disciplina={disciplina}>
        </Card>
    )
    )

    return (<div className="conteudo-galeria">
        {cards}
    </div>
    )
}
