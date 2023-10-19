import './UserView.css'
import Button from '../../components/Button/Button'

function UserView() {
	return(
		<>
			<div className='emptyBox'></div>
			<div className='text'>
				<h1 className='greetingTextUser'>¡Hola!</h1>
				<h4 className='textUser'>Ya puedes grabar tu audio</h4>
			</div>
			<Button />
		</>
	)
}
export default UserView;