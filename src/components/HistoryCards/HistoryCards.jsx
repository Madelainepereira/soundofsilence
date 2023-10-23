import PropTypes from 'prop-types';
import './HistoryCards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const API_URL = "http://localhost:8000/audios/";

function HistoryCards({ audioGroup }) {
    const [audioElement, setAudioElement] = useState(null);

    const playAudio = async (audioId) => {
        try {
            const response = await fetch(API_URL + audioId);
            
            if (!response.ok) throw new Error('Failed to fetch audio');
            
            const audioBlob = await response.blob();
            const newAudioElement = new Audio(URL.createObjectURL(audioBlob));

            setAudioElement(newAudioElement);
            newAudioElement.play();
        } catch (error) {
            console.error("Error reproduciendo el audio:", error);
        }
    };

    const stopAudio = () => {
        if (!audioElement) return;
        audioElement.pause();
        audioElement.currentTime = 0;
    };

    const deleteAudio = async (audioId) => {
        const userConfirmed = window.confirm("¿Estás seguro de que deseas eliminar este audio para siempre?");
        if (!userConfirmed) return;

        try {
            const response = await fetch(API_URL + audioId, { method: 'DELETE' });
            if (!response.ok) throw new Error('Failed to delete audio');
            window.location.reload();
        } catch (error) {
            console.error("Error eliminando el audio:", error);
        }
    };

    const renderIcon = (icon, action) => (
        <figure className={`${icon}-icon`} onClick={action}>
            <FontAwesomeIcon icon={icon} size="xl" />
        </figure>
    );

    return (
        <div className='history-card-container'>
            <div className='history-labels'>
                <ul>
                {audioGroup.labels.map((label, index) => (
                    <li className='result-container' key={index}>
                        <p className='label'>{label}</p>
                        <p className='porcentage'>{(audioGroup.confidence[index] * 100).toFixed(0)}%</p>
                    </li>
                ))}
                </ul>
            </div>
            <div className='icons-container'>
            {renderIcon(faPlay, () => playAudio(audioGroup.audio_id))}
            {renderIcon(faStop, stopAudio)}
            {renderIcon(faTrash, () => deleteAudio(audioGroup.audio_id))}
            </div>
        </div>
    );
}

HistoryCards.propTypes = {
    audioGroup: PropTypes.shape({
        labels: PropTypes.arrayOf(PropTypes.string).isRequired,
        confidence: PropTypes.arrayOf(PropTypes.number).isRequired,
        audio_id: PropTypes.number.isRequired
    }).isRequired
};

export default HistoryCards;



