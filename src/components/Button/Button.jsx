import './Button.css'
import recorder from "../../assets/Image_recorder.png";
import { useState } from 'react';

function Button () 
{
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [audioStream, setAudioStream] = useState(null);
    const [audioUrl, setAudioUrl] = useState(null);

    const startRecording = async () => 
    {
        try 
        {
            // Detener la grabación anterior si existe
            stopRecording();

            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const recorder = new MediaRecorder(stream);
            const audioChunks = [];

            recorder.ondataavailable = (e) => 
            {
                if (e.data.size > 0) 
                {
                    audioChunks.push(e.data);
                }
            };

            recorder.onstop = () => 
            {
                const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                console.log(audioBlob);
                const url = URL.createObjectURL(audioBlob);
                setAudioUrl(url);
            };

            recorder.start();
            setAudioStream(stream);
            setMediaRecorder(recorder);
        } 
        catch (error)
        {
            console.error('Error al iniciar la grabación:', error);
        }
    };

    const stopRecording = () => 
    {
        if (mediaRecorder && mediaRecorder.state === 'recording')
        {
            mediaRecorder.stop();
            audioStream.getTracks().forEach((track) => track.stop());
        }
    }

    const playAudio = () => 
    {
        if (audioUrl) 
        {
            const audioElement = new Audio(audioUrl);
            audioElement.play();
        }
    }

    return (
        <> 
            <div className='buttonsBody'>
            <button className='recordButton' onClick={mediaRecorder && mediaRecorder.state === 'recording' ? stopRecording : startRecording}>
                {mediaRecorder && mediaRecorder.state === 'recording' ? 'DETENER GRABACIÓN' : 'PULSAR PARA GRABAR'}
                <img src={recorder} alt='Icon recorder'/>
            </button>
            <button className='playButton' onClick={playAudio} disabled={!audioUrl}>
                Reproducir grabación
            </button>
            </div>
        </>
    );
}

export default Button;
