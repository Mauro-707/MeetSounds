import { Outlet, Link } from "react-router-dom"
import './layout.css'
const layout = () =>{
    return(
        <div>
            <nav className="nav_menu">
                <ul className="nav_menu_ul">
                    <li className="nav_menu_li">
                        <img className="logo1" src="/public/Logo5.png" alt="" />
                        <img className="logo2" src="/public/Logo6.png" alt="" />
                    </li>
                    <li className="nav_menu_li">
                        <img src="/public/casa.png" alt="" />
                        <Link className="no_estilo " to="/"  >Inicio</Link>
                    </li>
                    <li className="nav_menu_li">
                        <img src="/public/busqueda-de-lupa.png" alt="" />
                        <Link className="no_estilo" to="/Busqueda"  >Busqueda</Link>
                    </li>
                    <li className="nav_menu_li">
                        <img src="/public/notificaciones.png" alt="" />
                        <Link className="no_estilo" to="/Notificaciones">Notificaciones</Link>
                    </li>
                    <li className="nav_menu_li">
                        <img src="/public/hablar.png" alt="" />
                        <Link className="no_estilo" to="/Mensajes">Mensajes</Link>
                    </li>
                    <li className="nav_menu_li">
                        <img src="/public/Banda.png" alt="" />
                        <Link className="no_estilo" to="/Bandas">Bandas</Link>
                    </li>
                    <li className="nav_menu_li">
                        <img src="/public/config.png" alt="" />
                        <Link className="no_estilo" to="/Bandas">Perfil <br /> Configuracion y Privacidad</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            <Outlet/>
        </div>
    )
}

export default layout;