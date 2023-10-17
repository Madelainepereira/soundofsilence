import { useState } from 'react';
import './Login.css';

function Login() 
{
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});
	
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();
		// Aquí se puede agregar la lógica para manejar los datos del formulario (autenticación, etc.)
	};
	
	return(
		<>
			<main className='login-container'>
			<div className='welcomeTextLogin'>
				<h1 className='greetingLogin'>Bienvenid@</h1>
				<h4 className='textLogin'>Escribe tu correo para ingresar</h4>
			</div>
			<form className='loginForm' onSubmit={handleSubmit}>
        <div className='registrationLogin'>
          <label className='identifierLogin'>Nombre de usuario</label>
          <input className='dataLogin'
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className='registrationLogin'>
          <label className='identifierLogin'>Contraseña</label>
          <input className='dataLogin'
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className='loginButton' type='submit'>Iniciar sesión</button>
      </form>
		</main>
		</>
	)
}
export default Login;