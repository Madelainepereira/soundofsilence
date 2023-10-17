import './home.css'
import Button2 from '../../components/Button2/Button2';
import logo from '../../assets/logo.svg'
//import HomeLayout from '../../layouts/Homelayout/Homelayout';

const Home = () => {

  return (
          <>
          <div className='overheadSpace'></div>
          <main className='contentHome'>
            <div className='homeimage'><img className='logohome' src={logo} alt="Image sound of silence" /></div>  
            <Button2 text="Login" />
            <Button2 text="Sign Up" />    
          </main>  
          <div className='spaceBelow'></div>
          </>
  );
}

export default Home;