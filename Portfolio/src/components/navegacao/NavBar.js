import { Link } from "react-router-dom"

function NavBar(){
    return(
        <body>
        <header>
        <nav>
            <a class="logo"><Link to="/">LUCAS PESSOLI</Link></a>
            <ul class="nav-list">
            <Link to="/curriculo"><li>Curriculo</li></Link>
            <Link to="/contato"><li>Contato</li></Link>
            <Link to="/github"><li>Github</li></Link>
            </ul>
        </nav>
        </header>
        </body>
    )
}

export default NavBar