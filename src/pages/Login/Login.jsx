import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dbRequest from '../../services/dbRequest';
import './Login.css';

function Login() 
{
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});
  
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  let responseObject;
	
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	
	const handleSubmit = async (e) => {
    e.preventDefault();

    responseObject = await dbRequest.userLogin(formData);
    setError(responseObject.error);
    if (responseObject.path)
    {
      navigate(responseObject.path);
    }
	};
	
	return(
		<>
			<main className='login-container'>
				<div className='welcomeTextLogin'>
					<h1 className='greetingLogin'>Bienvenid@</h1>
					<h4 className='textLogin'>Escribe tu correo para ingresar</h4>
				</div>
      
        {error && <div className="error-message">{error}</div>}
			
        <form className='loginForm' onSubmit={handleSubmit}>
            <div className='registrationLogin'>
              <label className='identifierLogin'>Nombre de usuario</label>
              <input className='dataLogin'
                type='text'
                name='username'
                value={formData.username}
                onChange={handleChange}
                required
                autoComplete="current-password"
              />
            </div>
            <div className='registrationLogin'>
              <label className='identifierLogin'>Contraseña</label>
              <input className='dataLogin'
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                autoComplete='current-password'
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