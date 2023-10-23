import './UserView.css'
import Button from '../../components/Button/Button'

function UserView() {
    const userName = localStorage.getItem('user_name');

    return(
        <>
            <div className='emptyBox'></div>
            <div className='text'>
                <h1 className='greetingTextUser'>¡Hola, {userName ?` ${userName}` : ''}!</h1>
                <h4 className='textUser'>Ya puedes identificar tu audio</h4>
            </div>
            <Button />
        </>
    )
}

export default UserView;