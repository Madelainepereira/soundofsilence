/* eslint-disable no-unused-vars */
import './History.css'
import HistoryCards from '../../components/HistoryCards/HistoryCards'
import BackButton from '../../components/BackButton/BackButton';

function History() {
return(
	<>	
		<BackButton path='/UserView'></BackButton>	
		<div className='returnText'>
			<p></p>
		</div>
		<div className='cards'>
			{/* aqui coloquen el map con HistoryCards */}
		</div>	
	</>
)
}
export default History;