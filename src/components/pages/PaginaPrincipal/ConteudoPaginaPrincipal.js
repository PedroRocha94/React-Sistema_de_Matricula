function Card({nome, codigo}){
    return(
        <div className="card">
            <h3 className="titulo-card">{nome}</h3>
            <span className="codigo-card">{codigo}</span>
        </div>
    )
}

export function Conteudo(){

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
    
    let cards = disciplinas.map((disciplina)=>(
                                                <Card 
                                                      nome={disciplina.nome} 
                                                      codigo={disciplina.codigo}>
                                                </Card>
                                              )
                                )

    return(<div className="conteudo-galeria">
                {cards}
           </div>
    )
}
