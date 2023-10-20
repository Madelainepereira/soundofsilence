import './History.css'
import HistoryCards from '../../components/HistoryCards/HistoryCards'
import BackButton from '../../components/BackButton/BackButton';

function History() {
	return(
		<>
		<BackButton path='/'></BackButton>	
		<div className='returnText'>
				<p></p>
			</div>		
			<div className='Cards'>
				<HistoryCards />
				<HistoryCards />
				<HistoryCards />
				<HistoryCards />
				<HistoryCards />
			</div>	
		</>
	)
}
export default History;