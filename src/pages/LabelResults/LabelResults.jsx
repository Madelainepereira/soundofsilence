import './LabelResults.css'
import Card from '../../components/Card/Card'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../../components/BackButton/BackButton';
import dbRequest from '../../services/dbRequest';


function LabelResults() {
	const  {audioId} = useParams();
	const [results, setResults] = useState([]);

	useEffect(() => 
	{
		let responseObject;

		const fetchPredictions = async () =>
		{
			responseObject = await dbRequest.getLabels(audioId);
			setResults(responseObject.results);
		}
	
		fetchPredictions();
	}, [audioId]);

	return (
		<>
		<BackButton path='/UserView'></BackButton>
		<section className='results-container'>
			<div className='results'>
			<ul>
				<li className='results-header'>
					<p className='results-label'>Etiqueta</p>
					<p className='results-percentage'>Puntuación</p>
				</li>
				{results.map((result, index) =>
					<Card key={index} label={result.label} percentage={result.confidence.toFixed(2)}/>
				)}
			</ul>
			</div>
		</section>
		</>
	);
}
export default LabelResults;