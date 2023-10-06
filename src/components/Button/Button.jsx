import './button.css'
import oreja from "../../assets/Mask_group.png";


function Button(){
    return(
        <> 
            <button className="button">
                PULSAR PARA GRABAR
                <img src={oreja}/>
            </button>
        </>
    );
}

export default Button;