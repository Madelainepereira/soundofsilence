import './Registration.css';
import { useState } from 'react';
import BackButton from '../../components/BackButton/BackButton';
import dbRequest from '../../services/dbRequest';

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
  let responseObject;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
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

    responseObject = await dbRequest.userRegister(formDataToSend);
    setSuccess(responseObject.success);
    setError(responseObject.error);
    window.location.replace('/Login')
  };

  return (
    <>
    <BackButton path='/'></BackButton>
      <div className='welcomeText'>
        <h1 className='greetingRegistration'>Bienvenid@</h1>
        <h4 className='textRegistration'>Ingresa los siguientes datos y crea tu cuenta</h4>
      </div>
      {error && <div className='error-message'>{error}</div>}
      {success && <div className='success-message'>Registro exitoso</div>}
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
       
        <button className='registrationButton' type='submit'>
          Registrar
        </button>
      </form>
    </>
  );
}

export default Registration;

