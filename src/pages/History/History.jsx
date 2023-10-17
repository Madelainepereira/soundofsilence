import './History.css'
import HistoryCards from '../../components/HistoryCards/HistoryCards'

function History() {
	return(
		<>	<div className='returnText'>
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