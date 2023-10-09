import './Body.css'
import cat from '../../assets/cat.jpg';
import PropTypes from 'prop-types';


function Body({capturingSound}) {
	
	return (
		<div className='pictogram'>
            {capturingSound ? (
                <p className='bodyText'>Capturando sonido</p>
            ) : (
                <img className='pictogramImage' src={cat} alt="cat image" />
            )}
        </div>
    );
}

Body.propTypes = {
    capturingSound: PropTypes.bool.isRequired, 
};

export default Body;