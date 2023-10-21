import './HistoryCards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';

function HistoryCards() {
	return(
		<>
			<div className='history-card-container'>
				<div className='history-labels'>
					{/* aqui coloquen la info de las etiquetas a enviar */}
				</div>
				<figure className='play-icon'>
					<FontAwesomeIcon icon={faPlay} size="xl" />
				</figure>
			</div>
		</>
	)
}
export default HistoryCards;