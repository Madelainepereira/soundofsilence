import { useState } from 'react';
import Recorder from "../Recorder";

import './button.css'
import oreja from "../../assets/Mask_group.png";



function Button(){
    const [showRecorder, setShowRecorder] = useState(false);

    const toggleRecorder = () => {
        setShowRecorder(!showRecorder);
    };

    return(
        <> 
            <button className="button" onClick={toggleRecorder}>
                PULSAR PARA GRABAR
                <img src={oreja} alt='Icono de oreja'/>
            </button>

            {showRecorder && <Recorder />}
        </>
       
    );
}



export default Button;