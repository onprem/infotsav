import React from 'react';
import Card from './Card';

const EmtList = ({ emts }) => {
	const cardComponent = emts.map((user, i) => {
		return <Card 
		key={i} 
		name={emts[i].name} 
		phone={emts[i].phone} 
		email={emts[i].email} /> 
	});
	return (
		<div>
		{cardComponent}
		</div>
		);
}

export default EmtList;