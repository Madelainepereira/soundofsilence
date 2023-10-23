import './Navbar.css';
import logo from '../../assets/logo.svg';
import { useLocation } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';

function Navbar() {
    const location = useLocation().pathname;
    const token = localStorage.getItem('token');

    return (
        <nav className="navbar">
            {token ? (
                <>
                    
                        <img className='navbarLogo' src={logo} alt="Logo" />
                    
                    {(location !== '/Login' && location !== '/Registration' && location !== '/' && location !== '/PrivacyTerms') && <Avatar className='avatar' />}
                </>
            ) : (
                <img className='navbarLogo' src={logo} alt="Logo" />
                
            )}
        </nav>
    );
}

export default Navbar;







