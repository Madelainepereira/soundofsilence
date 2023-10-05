import { useState } from 'react';
import './button.css'
import oreja from "../../assets/Mask_group.png";

const Button = () => {
    const [recording, setRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [audioChunks, setAudioChunks] = useState([]);

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);

        recorder.ondataavailable = (e) => {
            if (e.data.size > 0) {
                setAudioChunks((prev) => [...prev, e.data]);
            }
        };

        recorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            audio.play();
        };

        recorder.start();
        setRecording(true);
        setMediaRecorder(recorder);

        setTimeout(() => {
            stopRecording();
        }, 15000); 
    };

    const stopRecording = () => {
        if (mediaRecorder) {
            mediaRecorder.stop();
            setRecording(false);
        }
    };



    return(
        <> 
            <button className="button" onClick={startRecording} disabled={recording}>
                PULSAR PARA GRABAR
                <img src={oreja} alt='Icono de oreja'/>
            </button>

        </>
       
    );
}



export default Button