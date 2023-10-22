import PropTypes from 'prop-types';
import './HistoryCards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function HistoryCards({ audioGroup }) {
    const [audioElement, setAudioElement] = useState(null);

    const playAudio = async (audioId) => {
        try {
            const response = await fetch(`http://localhost:8000/audios/${audioId}`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch audio');
            }

            const audioBlob = await response.blob();
            const audioUrl = URL.createObjectURL(audioBlob);

            const newAudioElement = new Audio(audioUrl);
            setAudioElement(newAudioElement);
            newAudioElement.play();
        } catch (error) {
            console.error("Error reproduciendo el audio:", error);
        }
    };

    const stopAudio = () => {
        if (audioElement) {
            audioElement.pause();
            audioElement.currentTime = 0;  // Vuelve el audio al inicio
        }
    };

    const deleteAudio = async (audioId) => {
    const userConfirmed = window.confirm("¿Estás seguro de que deseas eliminar este audio para siempre?");
    if (!userConfirmed) return;
        try {
            const response = await fetch(`http://localhost:8000/audios/${audioId}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Failed to delete audio');
            }

            // Actualización o recarga de la página
            window.location.reload();
        } catch (error) {
            console.error("Error eliminando el audio:", error);
        }
    };

    return (
        <div className='history-card-container'>
            <div className='history-labels'>
                {audioGroup.labels.map((label, index) => (
                    <div key={index}>
                        <p>{label}</p>
                        <p>{(audioGroup.confidence[index] * 100).toFixed(0)}%</p>
                    </div>
                ))}
            </div>
            <figure className='play-icon' onClick={() => playAudio(audioGroup.audio_id)}>
                <FontAwesomeIcon icon={faPlay} size="xl" />
            </figure>
            <figure className='stop-icon' onClick={stopAudio}>
                <FontAwesomeIcon icon={faStop} size="xl" />
            </figure>
            <figure className='delete-icon' onClick={() => deleteAudio(audioGroup.audio_id)}>
                <FontAwesomeIcon icon={faTrash} size="xl" />
            </figure>
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


