import './home.css'
import Logohome from'../../assets/Logohome.png'
import Button2 from '../../components/Button2/Button2';
//import HomeLayout from '../../layouts/Homelayout/Homelayout';

const Home = () => {

  return (
          <>
          <div className='overheadSpace'></div>
          <main className='contentHome'>
            <div className='homeimage'><img className='logohome' src={Logohome} alt="Image sound of silence" /></div>  
            <Button2 text="Login" />
            <Button2 text="Sign Up" />    
          </main>  
          <div className='spaceBelow'></div>
          </>
  );
}

export default Home;