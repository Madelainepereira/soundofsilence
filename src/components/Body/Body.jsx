import './Body.css'
import cat from '../../assets/cat.jpg';

function Body () {
	return (
		<>
			<div className='pictogram'>
				<img className='pictogramImage' src={cat} alt="cat image" />
				<p className='bodyText'>CAT</p>
			</div>
		</>
	)
}

export default Body;