import './Body.css'
//import cat from '../../assets/cat.jpg';
import picto from '../../assets/Image_def.png'
import Button from '../Button/Button';

function Body () {
	return (
		<>
			<main className='main'>
				<div className='pictogram'>
					<img className='pictogramImage' src={picto} alt="cat image" />
					<p className='bodyText'><strong>Título pictograma</strong></p>
				</div>
				<Button />
			</main>
		</>
	)
}

export default Body;