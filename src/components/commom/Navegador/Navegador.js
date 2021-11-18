export function Navegador(props){
    
    let Link = ({linkTexto}) => (<a className="link-navegador" href="http://globo.com">{linkTexto}</a>);

    return (
        <nav>
            <Link linkTexto="Link 1 "></Link>
            <Link linkTexto="Link 2 "></Link>
            <Link linkTexto="Link 3 "></Link>
        </nav>
    )
}
