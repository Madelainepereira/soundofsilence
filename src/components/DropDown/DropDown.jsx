import { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde React Router


function DropDown({ username, userImage, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    onLogout();
    setIsOpen(false);
  };

  return (
    <div className="user-dropdown-menu">
      <button className="user-dropdown-button" onClick={toggleMenu}>
        <img src={userImage} alt={username} />
      </button>
      {isOpen && (
        <div className="user-dropdown-content">
          <div className="user-info">
            <img src={userImage} alt={username} />
            <span>{username}</span>
          </div>
          <Link to="/login"> 
            <button onClick={handleLogout}>Log Out</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default DropDown;
