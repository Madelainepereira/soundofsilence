import './LabelResults.css'
import Card from '../../components/Card/Card'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../../components/BackButton/BackButton';


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
		<>
			<main className='main'>
				<div className='emptyBoxLR'></div>
			</main>
			<BackButton path='/UserView'></BackButton>
			<section className='results-container'>
				<div className='results'>
					<ul>
						<li className='results-header'>
							<p className='results-label'>Etiqueta</p>
							<p className='results-percentage'>Puntuación</p>
						</li>
						{results.map((result, index) =>
							<Card key={index} label={result.label} percentage={(result.confidence * 100).toFixed(2)}/>
						)}
					</ul>
				</div>
			</section>
		</>
	);
}
export default LabelResults;