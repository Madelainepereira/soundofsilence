import PropTypes from 'prop-types';
import './HistoryCards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import dbRequest from '../../services/dbRequest';

function HistoryCards({ audioGroup }) {
    const [audioElement, setAudioElement] = useState(null);

    const playAudio = async (audioId) => 
    {
        const newAudioElement = await dbRequest.playAudio(audioId);

        if (newAudioElement)
        {
            setAudioElement(newAudioElement);
            newAudioElement.play();
        }
    };

    const stopAudio = () => {
        if (!audioElement) return;
        audioElement.pause();
        audioElement.currentTime = 0;
    };

    const deleteAudio = async (audioId) => 
    {
        await dbRequest.deleteAudio(audioId);
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



