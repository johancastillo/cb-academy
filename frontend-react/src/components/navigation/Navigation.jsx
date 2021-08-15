import { Link } from "wouter"
import "./Navigation.css"

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">


                <Link to="/" className="logo">
                    <a>
                    <img  src="assets/images/logo.svg" alt="" width="60px" height="auto" className="d-inline-block align-text-top" />
                    </a>

                </Link>


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/">
                                <a className="nav-link active" aria-current="page">
                                    Inicio
                                </a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/nosotros">

                                <a className="nav-link">
                                    Nosotros
                                </a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/cursos">

                                <a className="nav-link">
                                    Cursos
                                </a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/contacto">

                                <a className="nav-link">
                                    Contáctanos
                                </a>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}



export default Navigation

