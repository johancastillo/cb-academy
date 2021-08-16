import { useEffect } from "react"

import { Link } from "wouter"
import "./Navigation.css"

const openForm = option => {
    const popupAuth = document.getElementById("popup-auth");

    popupAuth.classList.toggle("active")
}


const Navigation = () => {

    useEffect(() => {
        window.addEventListener("scroll", () => {
            
            const scrollSize = window.scrollY;
            const navigation = document.getElementById("navigation")
            const logo = document.getElementById("logo")

            if(scrollSize > 5){
                navigation.classList.add("active")
                logo.src = "assets/images/logo.svg"
            }else{
                navigation.classList.remove("active")
                logo.src = "assets/images/logo-white.svg"
            }
    
        });
    
    }, [])

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navigation">
            <div className="container-fluid">


                <Link to="/" className="logo">
                    <a>
                        <img id="logo" src="assets/images/logo-white.svg" alt="" width="60px" height="auto" className="d-inline-block align-text-top" />
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
                            <Link to="/cursos">

                                <a className="nav-link">
                                    Especialidades
                                </a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/cursos">

                                <a className="nav-link">
                                    Talleres
                                </a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/cursos">

                                <a className="nav-link">
                                    Rutas
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

                <div className="btns-auth">
                    <button className="btn btn-outline-primary btn-login" onClick={() => openForm("login")}>
                        Iniciar sesión
                    </button>

                    <button className="btn btn-primary btn-register" onClick={() => openForm("register")}>
                        !Registráte!
                    </button>
                </div>

            </div>


        </nav>

        <div className="popup-auth" id="popup-auth">
            <div className="image">
                <img src="" alt="" />
            </div>

            <div className="form">

            </div>
        </div>

        </>
    )
}



export default Navigation

