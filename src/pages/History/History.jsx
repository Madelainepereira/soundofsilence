import './History.css'
import HistoryCards from '../../components/HistoryCards/HistoryCards'
import BackButton from '../../components/BackButton/BackButton';

function History() {
<<<<<<< HEAD
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
=======
return(
	<>	
		<BackButton path='/'></BackButton>	
		<div className='returnText'>
			<p></p>
		</div>
		<div className='cards'>
			{/* aqui coloquen el map con HistoryCards */}
		</div>	
	</>
)
>>>>>>> ab1354ade1cc995d4d4bf0cc5dda8672ec204808
}
export default History;