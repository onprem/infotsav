import React from 'react';
import Small_Card from './Small_Card';

const EmtList = ({ emts }) => {
	const cardComponent = emts.map((user, i) => {
		return <Small_Card 
		key={i} 
		icon={emts[i].icon}
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