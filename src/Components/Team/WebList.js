import React from 'react';
import Card2 from './Card2';

const WebList = ({ WebTeam }) => {
	const cardComponent2 = WebTeam.map((user, i) => {
		return <Card2 
		key={i} 
		name={WebTeam[i].name} 
		icon={WebTeam[i].icon}
		phone={WebTeam[i].phone} 
		email={WebTeam[i].email} /> 
	});
	return (
		<div>
		{cardComponent2}
		</div>
		);
}

export default WebList;