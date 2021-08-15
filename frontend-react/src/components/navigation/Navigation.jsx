import { Link } from "wouter"

const Navigation = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">

                <a class="navbar-brand" href="#">
                    <img src="assets/images/logo.svg" alt="" width="60px" height="auto" class="d-inline-block align-text-top" />
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                Inicio
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Nosotros
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Cursos
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">
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
