import './Button.css'
import recorder from "../../assets/Mask_group.png";
import { useState } from 'react';
import Body from '../Body/Body';


function Button () 
{
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [audioStream, setAudioStream] = useState(null);
    const [audioUrl, setAudioUrl] = useState(null);
    const [isRecording, setRecording] = useState(false);

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
                setRecording(false);
            };

            recorder.start();
            setAudioStream(stream);
            setMediaRecorder(recorder);
            setRecording(true);
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
            <Body capturingSound={isRecording} />

            <button className={`button ${isRecording ? 'loading' : ''}`} onClick={isRecording ? stopRecording : startRecording}>
                {isRecording ? 'Detener grabación' : 'Pulsar para grabar'}
                <img src={recorder} alt='Icon recorder'/>
            </button>


            <button className='play' onClick={playAudio} disabled={!audioUrl}>
                Reproducir grabación
            </button>
        </>
    );
}

export default Button;

