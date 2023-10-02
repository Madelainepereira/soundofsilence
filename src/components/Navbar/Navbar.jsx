import './Navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" />
    </nav>
  );
}

export default Navbar;