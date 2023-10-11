import './Button2.css'
import PropTypes from 'prop-types';

const Button2 = ({ text }) => {
  return (
    <button>
      {text}
    </button>
  );
}

Button2.propTypes = {
    text: PropTypes.string.isRequired, 
  }

export default Button2;