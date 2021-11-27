import { Navegador } from "../../commom/Navegador/Navegador";
import { Cabecalho } from "../../commom/Cabecalho/Cabecalho";
import { useForm } from "react-hook-form";
import history from "../../../history";
import { cadastrar } from "../../../api/auth";


function FormularioCadastro() {
    const { register, handleSubmit } = useForm();
    const submeter = (aluno) => {

        cadastrar(aluno).then((response) => {
            console.log(response);
            history.push("/login");
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <form onSubmit={handleSubmit(submeter)} className="formulario-cadastro">
            Nome: <input type="text" name="nome" {...register('nome', { required: true })} /> <br />
            Matricula: <input type="text" name="matricula" {...register('matricula', { required: true })} /> <br />
            Senha: <input type="password" name="senha" {...register('senha', { required: true })} /> <br />
            <button>Cadastrar</button>
        </form>
    )
}

export function PaginaCadastro() {
    return (
        <div>
            <Cabecalho></Cabecalho>
            <Navegador></Navegador>
            <FormularioCadastro></FormularioCadastro>
        </div>
    )
}