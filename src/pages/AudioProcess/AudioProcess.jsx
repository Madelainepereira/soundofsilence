import './AudioProcess'
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';

function AudioProcess() {

	const text = "Estamos procesando tu audio para devolver las etiquetas correspondientes";
	const textClassName = "processingText";

	return(
		<>
			<Card texto={text} className={textClassName} />
			<Button />
		</>
	)
}
export default AudioProcess;