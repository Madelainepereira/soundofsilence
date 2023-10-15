import './Navbar.css';
import Logohome from '../../assets/Logohome.png';


function Navbar() {
  return (
    <nav className="navbar">
        <img className='navbarLogo' src={Logohome} alt="Logo" />
    </nav>
  );
}

export default Navbar;