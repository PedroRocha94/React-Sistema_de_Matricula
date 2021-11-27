import { Cabecalho } from '../../commom/Cabecalho/Cabecalho';
import { Navegador } from '../../commom/Navegador/Navegador';

export function PaginaDetalheMatricula(props) {
    console.log(props)
    return (
        <div>
            <Cabecalho></Cabecalho>
            <Navegador></Navegador>
            <h1>Página de Detalhe da Matricula</h1>
            <p>
                Aqui mostra as informações da Matricula
            </p>
        </div>


    );
}
