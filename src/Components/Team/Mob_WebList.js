import React from 'react';
import BigCard from './Big_Card';

const MobWebList = ({ Mob_WebTeam, onClickEaster }) => {
	const cardComponent2 = Mob_WebTeam.map((user, i) => {
		return <BigCard 
		webTeam={true}
		onClickEaster={onClickEaster}
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

export default MobWebList;