import React from 'react';
import BigCard from './Big_Card';

const TMList = ({ TMheads }) => {
	const cardComponent2 = TMheads.map((user, i) => {
		return <BigCard 
		key={i} 
		name={TMheads[i].name} 
		icon={TMheads[i].icon}
		phone={TMheads[i].phone} 
		email={TMheads[i].email} /> 
	});
	return (
		<div>
		{cardComponent2}
		</div>
		);
}

export default TMList;