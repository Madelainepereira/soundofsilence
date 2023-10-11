import Button2 from '../../components/Button2/Button2';
import logo from '../../assets/logo.png'; 
import './home.css'

const Home = () => {

  return (
    <div className='home'> 
      <div className='homeimage'><img className='logohome' src={logo} alt="Image sound of silence" /></div>
      
      <Button2 text="Login" />
      <Button2 text="Sign Up" />
    </div>
  );
}

export default Home;