import React from 'react';
import Card2 from './Card2';

const CoordList = ({ coord }) => {
	const cardComponent2 = coord.map((user, i) => {
		return <Card2 
		key={i} 
		name={coord[i].name} 
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