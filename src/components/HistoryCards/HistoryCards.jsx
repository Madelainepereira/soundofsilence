import PropTypes from 'prop-types';
import './HistoryCards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';

function HistoryCards({ audioGroup }) {
    return (
        <div className='history-card-container'>
            <div className='history-labels'>
                {audioGroup.labels.map((label, index) => (
                    <div key={index}>
                        <p>{label}</p>
                        <p>{(audioGroup.confidence[index] * 100).toFixed(0)}%</p>
                    </div>
                ))}
            </div>
            <figure className='play-icon'>
                <FontAwesomeIcon icon={faPlay} size="xl" />
            </figure>
        </div>
    );
}

HistoryCards.propTypes = {
    audioGroup: PropTypes.shape({
        labels: PropTypes.arrayOf(PropTypes.string).isRequired,
        confidence: PropTypes.arrayOf(PropTypes.number).isRequired
    }).isRequired
};

export default HistoryCards;


// function HistoryCards() {
// 	return(
// 		<>
// 			<div className='history-card-container'>
// 				<div className='history-labels'>
// 					{/* aqui coloquen la info de las etiquetas a enviar */}
// 				</div>
// 				<figure className='play-icon'>
// 					<FontAwesomeIcon icon={faPlay} size="xl" />
// 				</figure>
// 			</div>
// 		</>
// 	)
// }
