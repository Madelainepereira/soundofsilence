import PropTypes from 'prop-types';
import './Card.css';

function Card({label, percentage = 0}) 
{

  return (
    <li className='result'>
		<p className='result-label'>{label}</p>
		<p className='result-percentage'>{percentage + "%"}</p>
	</li>
  );
}

Card.propTypes = 
{
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number, // Define la prop className como opcional
};

export default Card;