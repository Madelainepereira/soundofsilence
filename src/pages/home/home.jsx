import Button2 from './Button2';
import logo from '../../assets/logo.png'; 

const Home = () => {

  return (
    <div>
      <img src={logo} alt="Image sound of silence" />
      <Button2 text="Botón 1" />
      <Button2 text="Botón 2" />
    </div>
  );
}

export default Home;