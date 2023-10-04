import './Body.css'
import descarga from '../../assets/descarga.png';

function Body () {
	return (
		<>
			<div className='pictogram'>
				<img className='pictogramImage' src={descarga} alt="descargaP" />
				<p className='bodyText'>Título pictograma</p>
			</div>
		</>
	)
}

export default Body;