import './Navbar.css';
import logo from '../../assets/logo.svg';
import { Link, useLocation } from 'react-router-dom';


import { useState } from 'react';


function Navbar() {
  const location = useLocation().pathname;
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // Variable para verificar si el usuario ha iniciado sesión
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Imagina que obtienes la imagen del usuario de alguna manera, por ejemplo, desde el estado global
  const userImage = "URL_DE_LA_IMAGEN_DEL_USUARIO_LOGEADO";

  const handleLogout = () => {
    // Aquí debes implementar la lógica de cierre de sesión
    setIsUserLoggedIn(false); // Cambia el estado para indicar que el usuario se ha desconectado
    // Lógica adicional de cierre de sesión si es necesario
  };

  return (
    <nav className="navbar">
      {location !== '/' ? (
        <Link to="/">
          <img className="navbarLogo" src={logo} alt="Logo" />
        </Link>
      ) : (
        <div></div>
      )}

      {isUserLoggedIn ? ( // Mostrar el menú desplegable solo si el usuario ha iniciado sesión
        <div className="user-menu" onClick={() => setMenuOpen(!isMenuOpen)}>
          <img className="user-avatar" src={userImage} alt="User Avatar" />
          {isMenuOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/historial">Historial</Link>
              </li>
              <li onClick={handleLogout}>Cerrar Sesión</li>
            </ul>
          )}
        </div>
      ) : null}
    </nav>
  );
}

export default Navbar;






