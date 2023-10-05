import { useState } from "react";

const Recorder = () => {
    const [recording, setRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [audioChunks, setAudioChunks] = useState([]);

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true});
        const recorder = new MediaRecorder(stream);

        recorder.ondataavailable = (e) => {
            if (e.data.size > 0) {
                setAudioChunks((prev) => [...prev, e.data]);
            }
        };

        recorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, {type: 'audio/wav'});
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            audio.play();
        };

        recorder.start();
        setRecording(true);
        setMediaRecorder(recorder);
    
    };

    const stopRecording = () => {
        if (mediaRecorder) {
            mediaRecorder.stop();
            setRecording(false);
        }
    };

    return (
        <div>
            <h2>Grabador de Audio</h2>
            <button onClick={startRecording} disabled={recording}>
                Comenzar Grabación
            </button>
            <button onClick={stopRecording} disabled={!recording}>
                Detener Grabación
            </button>
        </div>
    );
};

export default Recorder;