import "./Header.css"

const Header = () => {
    return (
        <header style={{"background-image": "url('assets/images/header-background.png')"}}>
            <div className="content">
                <h1>Domina las carreras del futuro</h1>

                <p>
                    Miles de personas han aumentado sus ingresos, encontrado su primer empleo o creado su primera empresa estudiando en CB Academy.
                </p>

                <p>¡Tú puedes ser el próximo!</p>

                <button className="btn btn-outline-white">
                    Comienza gratis
                </button>

            </div>

            <div className="image">
                <img src="assets/images/hero-img.png" width="380px" alt="" />
            </div>
        </header>
    )
}


export default Header

