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

export function Conteudo({ disciplinas }) {



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
