import './UserView.css';
import Button from '../../components/Button/Button';
//import DropDown from '../../components/DropDown/DropDown';


function UserView() {
	const userName = localStorage.getItem('user_name');
    //const userImage = localStorage.setItem('profile_image'); // Asume que has almacenado la imagen del usuario

    //const handleLogout = () => {
        // Implementa la lógica de logout aquí, por ejemplo, limpiar el localStorage y redirigir al login.
        //localStorage.removeItem('user_name');
        //localStorage.removeItem('user_image');
        // Luego redirige al login.
    //  };
	return (
    <>
    {/* <DropDown username={userName} userImage={userImage} onLogout={handleLogout} /> */}

    <div className='emptyBox'></div>
	<div className='text'>
    <h1 className='greetingTextUser'>¡Hola, {userName ? ` ${userName}` : ''}!</h1>
    <h4 className='textUser'>Ya puedes identificar tu audio</h4>
    </div>
<Button />
    </>
);
}

export default UserView;