// import './History.css'
// import HistoryCards from '../../components/HistoryCards/HistoryCards'
// import BackButton from '../../components/BackButton/BackButton';

// function History() {
// return(
// 	<>	
// 		<BackButton path='/'></BackButton>	
// 		<div className='returnText'>
// 			<p></p>
// 		</div>
// 		<div className='cards'>
// 			{/* aqui coloquen el map con HistoryCards */}
// 		</div>	
// 	</>
// )
// }
// export default History;


import './History.css';
import HistoryCards from '../../components/HistoryCards/HistoryCards';
import BackButton from '../../components/BackButton/BackButton';
import { useState, useEffect } from 'react';


function History() {
    const [audios, setAudios] = useState([]);
    const userId = localStorage.getItem('user_id'); 

    useEffect(() => {
        async function fetchAudios() {
            try {
                const response = await fetch(`http://localhost:8000/user/${userId}/last_audios`);
                
                if (!response.ok) {
                    throw new Error('Failed to fetch audios');
                }
                
                const data = await response.json();
				console.log("Data from server:", data);
                setAudios(data);
            } catch (error) {
                console.error("There was an error fetching the audios:", error);
            }
        }

        fetchAudios();
    }, [userId]);

	const groupedAudios = audios.reduce((acc, audio) => {
		if (!acc[audio.audio_id]) {
			acc[audio.audio_id] = {
				labels: [],
				confidence: [],
				audio_id: audio.audio_id
			};
		}
		acc[audio.audio_id].labels.push(audio.label);
		acc[audio.audio_id].confidence.push(audio.confidence);
		return acc;
	}, {});
	
	const groupedAudiosArray = Object.values(groupedAudios);

    return(
        <>	
         <div className='main-content'>
            <BackButton text="Volver al inicio" path='/UserView'></BackButton>	
            <div className='returnText'>
                <p></p>
            </div>
            <div className='cards'>
    {groupedAudiosArray.map(audioGroup => <HistoryCards key={audioGroup.audio_id} audioGroup={audioGroup} />)}
			</div>
            </div>
        </>
    )
}

export default History;
