import { Link } from "wouter"

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <a className="navbar-brand" href="#">
                    <img src="assets/images/logo.svg" alt="" width="60px" height="auto" className="d-inline-block align-text-top" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Inicio
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Nosotros
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Cursos
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contáctanos
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}



export default Navigation

