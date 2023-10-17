import './Navbar.css';
import logo from '../../assets/logo.svg';


function Navbar() {
  return (
    <nav className="navbar">
        <img className='navbarLogo' src={logo} alt="Logo" />
    </nav>
  );
}

export default Navbar;