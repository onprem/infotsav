import React from 'react';
import Big_Card from './Big_Card';

const CoordList = ({ coord }) => {
	const cardComponent2 = coord.map((user, i) => {
		return <Big_Card 
		key={i} 
		name={coord[i].name} 
		icon={coord[i].icon}
		phone={coord[i].phone} 
		email={coord[i].email} /> 
	});
	return (
		<div>
		{cardComponent2}
		</div>
		);
}

export default CoordList;