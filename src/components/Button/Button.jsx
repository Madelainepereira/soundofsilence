import { useState } from 'react';
import './button.css';
import oreja from "../../assets/Mask_group.png";
import Body from '../Body/Body';

function Button () {
    const [isRecording, setIsRecording] = useState(false);

    const startRecording = async () => {
        try {
            // Código de Made componente recorder

            setIsRecording(true); 
        } catch (error) {
            console.error('Error al acceder al micrófono:', error);
        }
    };


    return(
        <> 
            <button className="button" onClick={startRecording} disabled={isRecording}>
                PULSAR PARA GRABAR
                <img src={oreja} alt='Icono de oreja'/>
            </button>

            <Body capturingSound={isRecording} />
        </>
    );
}

export default Button;