/* eslint-disable no-unused-vars */
/*import './Registration.css'
import { useState } from 'react';

function Registration () {

	const [formData, setFormData] = useState({
		nombre: '',
		apellido: '',
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Aquí se puede agregar la lógica para manejar los datos del formulario
	};

	return(
		<>
			<div className='welcomeText'>
				<h1 className='greetingRegistration'>Bienvenid@</h1>
				<h4 className='textRegistration'>Ingresa los siguientes datos y crea tu cuenta</h4>
			</div>
		<form className='registrationForm' onSubmit={handleSubmit}>
    <div className='formGroup'>
          <label className='identifier'>Nombre</label>
          <input className='registrationBox'
            type='text'
            name='nombre'
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className='formGroup'>
          <label className='identifier'>Apellido</label>
          <input className='registrationBox'
            type='text'
            name='apellido'
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div className='formGroup'>
          <label className='identifier'>Nombre de usuario</label>
          <input className='registrationBox'
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className='formGroup'>
          <label className='identifier'>Correo Electrónico</label>
          <input className='registrationBox'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='formGroup'>
          <label className='identifier'>Contraseña</label>
          <input className='registrationBox'
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className='formGroup'>
          <label className='identifier'>Confirmar Contraseña</label>
          <input className='registrationBox'
            type='password'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button className='registrationButton' type='submit'>Registrar</button>
      </form>
		</>
	);
}
export default Registration;*/

import './Registration.css';
import { useState } from 'react';
import BackButton from '../../components/BackButton/BackButton';
import PopUp from '../../components/PopUp/PopUp';

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    last_name: '',
    user_name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      setPopUpMessage('Las contraseñas no coinciden'); // Actualizar el mensaje del PopUp
      setShowPopUp(true);
      return;
    }

    const userJSON = JSON.stringify({
      name: formData.name,
      last_name: formData.last_name,
      user_name: formData.user_name,
      email: formData.email,
      password: formData.password
    });

    const formDataToSend = new FormData();
    formDataToSend.append('user', userJSON);

    if (profileImage) {
        formDataToSend.append('profile_image', profileImage);
    }

    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setSuccess(true);
        setError(null);
        setPopUpMessage('Registro exitoso');
        setShowPopUp(true);
        window.location.replace('/Login');
      } else {
        setError('Error en el registro');
        setSuccess(false);
        setPopUpMessage('Error en el registro'); 
        setShowPopUp(true);
      }
    } catch (error) {
      setError('Error de red');
      setSuccess(false);
      setPopUpMessage('Error de red'); 
      setShowPopUp(true);
    }
  };
  const handleClosePopUp = () => {
    setShowPopUp(false); 
  };
  return (
    <>
    <div className='main-content'>
    <BackButton path='/'></BackButton>
      <div className='welcomeText'>
        <h1 className='greetingRegistration'>Bienvenid@</h1>
        <h4 className='textRegistration'>Ingresa los siguientes datos y crea tu cuenta</h4>
      </div>
      <form className='registrationForm' onSubmit={handleSubmit}>
        <div className='formGroup'>
          <label className='identifier'>Nombre</label>
          <input
            className='registrationBox'
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='formGroup'>
          <label className='identifier'>Apellido</label>
          <input
            className='registrationBox'
            type='text'
            name='last_name'
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='formGroup'>
          <label className='identifier'>Nombre de usuario</label>
          <input
            className='registrationBox'
            type='text'
            name='user_name'
            value={formData.user_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='formGroup'>
          <label className='identifier'>Correo Electrónico</label>
          <input
            className='registrationBox'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='formGroup'>
          <label className='identifier'>Contraseña</label>
          <input
            className='registrationBox'
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className='formGroup'>
          <label className='identifier'>Confirmar Contraseña</label>
          <input
            className='registrationBox'
            type='password'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className='formGroup'>
  <label className='identifier'>Foto de perfil</label>
  <label htmlFor='fileInput' className='registrationBox' id='regis'>
    Elegir archivo
  </label>
  <input
    id='fileInput'
    type='file'
    onChange={(e) => setProfileImage(e.target.files[0])}
    required
    style={{ display: 'none' }} 
  />
</div>
       
        <button className='registrationButton' type='submit' path="/Login">
          Registrar
        </button>
      </form>
      {showPopUp && (
        <PopUp message={popUpMessage} onClose={handleClosePopUp} />
      )}
      </div>
    </>
  );
}

export default Registration;

