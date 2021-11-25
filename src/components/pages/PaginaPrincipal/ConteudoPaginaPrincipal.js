function Card({ nome, codigo, disponivel }) {

    let nomeClasse = "card";
    if (disponivel === false) {
        nomeClasse += " fundo-vermelho";
    }

    return (
        <div className={nomeClasse}>
            <h3 className="titulo-card">{nome}</h3>
            <span className="codigo-card">{codigo}</span>
        </div>
    )
}

export function Conteudo() {

    let disciplinas = [
        {
            nome: "LMS",
            codigo: "QXD253",
            disponivel: false,
        },
        {
            nome: "PIW",
            codigo: "QXD5435",
            disponivel: true,
        },
        {
            nome: "SOC",
            codigo: "QXD2323",
            disponivel: false,
        },
        {
            nome: "POO",
            codigo: "QXD4546",
            disponivel: true,
        }
    ];

    let cards = disciplinas.map((disciplina) => (
        <Card
            nome={disciplina.nome}
            codigo={disciplina.codigo}
            disponivel={disciplina.disponivel}>
        </Card>
    )
    )

    return (<div className="conteudo-galeria">
        {cards}
    </div>
    )
}
