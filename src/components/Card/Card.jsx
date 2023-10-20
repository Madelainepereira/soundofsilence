// import PropTypes from 'prop-types';
// import './Card.css';

// function Card({texto, className}) {
//   //const { texto, className } = props;

//   return (
//     <div className="textCard">
//       <p  className={className}>
//         {texto}
//       </p>
//     </div>
//   );
// }

// Card.propTypes = 
// {
//   texto: PropTypes.string.isRequired,
//   className: PropTypes.string, // Define la prop className como opcional
// };

// export default Card;

// Card.jsx
import PropTypes from 'prop-types';
import './Card.css';

function Card({ children, className }) {
  return (
    <div className={`textCard ${className || ''}`}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string, // Define la prop className como opcional
};

export default Card;

