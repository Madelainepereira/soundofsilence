import { Link } from 'react-router-dom';
import './Avatar.css';

function Avatar() {
    const BASE_URL = "http://localhost:8000";
    const relativeAvatarUrl = localStorage.getItem('user_avatar_url');
    const userAvatarUrl = BASE_URL + "/" + relativeAvatarUrl;
    const userName = localStorage.getItem('user_name');

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user_avatar_url');
        localStorage.removeItem('user_name');
        localStorage.removeItem('user_id');
    };

    return (
        <div className="avatar-container">
            <img src={userAvatarUrl} alt="User Avatar" className="user-avatar"/>
            <div className="dropdown-menu">
                <span>{userName}</span>
                <Link to="/Login"><button onClick={handleLogout}>Cerrar sesión</button></Link>
            </div>
        </div>
    );
}

export default Avatar;

