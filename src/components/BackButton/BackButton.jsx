import './BackButton.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BuackButton = ({ path }) => {

  return (
	<Link to={path}>
		<button className='Back'>
			Volver al inicio
		</button>
	</Link>
  );
}

BuackButton.propTypes = {
    text: PropTypes.string.isRequired, 
    path: PropTypes.string.isRequired, 
  }

export default BuackButton;