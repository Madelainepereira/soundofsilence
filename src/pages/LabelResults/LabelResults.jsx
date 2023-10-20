import './LabelResults.css'
import Card from '../../components/Card/Card'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function LabelResults() {
	const  {audioId} = useParams();
	const [results, setResults] = useState([]);

useEffect(() => {
	async function fetchPredictions() {
	try {
		const response = await fetch(`http://localhost:8000/audios/${audioId}/predictions`);
	if (!response.ok) {
		throw new Error('Failed to fetch predictions');
	}
	const data = await response.json();
	console.log("Data from server:", data);
	setResults(data);
		} catch (error) {
	console.error("There was an error fetching the predictions:", error);
		}
}

fetchPredictions();
	}, [audioId]);

	return (
<main className='main'>
    <div className='emptyBoxLR'></div>
    <Card>
        {results.map((result, index) => (
            <p key={index}>{`Etiqueta: ${result.label}, Puntuación: ${result.confidence.toFixed(2)}`}</p>
        ))}
    </Card>
</main>


	);
}
export default LabelResults;