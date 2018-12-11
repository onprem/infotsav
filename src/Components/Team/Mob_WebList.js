import React from 'react';
import Big_Card from './Big_Card';

const Mob_WebList = ({ Mob_WebTeam }) => {
	const cardComponent2 = Mob_WebTeam.map((user, i) => {
		return <Big_Card 
		key={i} 
		name={Mob_WebTeam[i].name} 
		icon={Mob_WebTeam[i].icon}
		phone={Mob_WebTeam[i].phone} 
		email={Mob_WebTeam[i].email} /> 
	});
	return (
		<div>
		{cardComponent2}
		</div>
		);
}

export default Mob_WebList;