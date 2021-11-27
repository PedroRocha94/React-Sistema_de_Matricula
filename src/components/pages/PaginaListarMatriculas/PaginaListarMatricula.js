import { Navegador } from "../../commom/Navegador/Navegador";
import { useForm } from "react-hook-form";
import { useState } from "react";

function FormularioMatricula({ onSubmeter }) {

    const { register, handleSubmit } = useForm();
    const submeter = (matricula) => { onSubmeter(matricula) };

    return (
        <form onSubmit={handleSubmit(submeter)}>
            Nome: <input name="nome" type="text" {...register('nome', { required: true })} /> <br />
            Disciplina: <select name="disciplina" id=""  {...register('disciplina', { required: true })}>
                <option value="LMS">LMS</option>
                <option value="PIW">PIW</option>
                <option value="IHC">IHC</option>
            </select><br />
            <button>Matricular</button>
        </form>
    )
}

function ListarMatriculas({ matriculas }) {
    return (
        <ul>
            {matriculas.map((matricula) => (<li>{matricula.nome} - {matricula.disciplina}</li>))}
        </ul >
    )
}

export function PaginaListarMatricula() {

    const [matriculas, setMatriculas] = useState(
        [
            {
                nome: "Victor",
                disciplina: "PIW",
            },
            {
                nome: "Maria",
                disciplina: "LMS",
            },
        ]
    );

    const adicionarMatricula = (matricula) => {
        setMatriculas([...matriculas, matricula])

    };
    return (
        <div>
            <Navegador></Navegador>
            <ListarMatriculas matriculas={matriculas}></ListarMatriculas>
            <FormularioMatricula onSubmeter={adicionarMatricula}></FormularioMatricula>
        </div>
    )
}
