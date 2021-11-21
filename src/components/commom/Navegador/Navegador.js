import "./Navegador.css";

export function Navegador(props){
    
    let Link = ({linkTexto}) => (<a className="link-navegador" href="http://globo.com">{linkTexto}</a>);

    return (
        <nav className="navegador">
            <Link linkTexto="Matriculas"></Link>
            <Link linkTexto="Disciplinas"></Link>
            <Link linkTexto="Horarios"></Link>
        </nav>
    )
}
