import React from 'react';
import Card2 from './Card2';

const TMList = ({ TMheads }) => {
	const cardComponent2 = TMheads.map((user, i) => {
		return <Card2 
		key={i} 
		name={TMheads[i].name} 
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