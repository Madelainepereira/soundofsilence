import './Registration.css'
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
export default Registration;
