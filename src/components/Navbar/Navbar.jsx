import './Navbar.css';
import logo from '../../assets/logo.svg';
import { Link, useLocation } from 'react-router-dom';


function Navbar() 
{
	const location = useLocation().pathname;

	console.log(location);
  return (
    <nav className="navbar">
		{location !== '/' ?
			<Link to={"/"}>
				<img className='navbarLogo' src={logo} alt="Logo" />
			</Link>
			:
			<div></div>
		}
    </nav>
  );
}
export default Navbar;





