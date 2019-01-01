import React from 'react';
import TeamCard from './Team_Card';

const PcWebList = ({ PC_WebTeam, onClickEaster }) => {
	const cardComponent3 = PC_WebTeam.map((user, i) => {
		return <TeamCard
		onClickEaster={onClickEaster}
		key={i} 
		name={PC_WebTeam[i].name} 
		phone={PC_WebTeam[i].phone} 
		email={PC_WebTeam[i].email} 
		name1={PC_WebTeam[i].name1} 
		phone1={PC_WebTeam[i].phone1} 
		email1={PC_WebTeam[i].email1}
		name2={PC_WebTeam[i].name2} 
		phone2={PC_WebTeam[i].phone2} 
		email2={PC_WebTeam[i].email2}
		name3={PC_WebTeam[i].name3} 
		phone3={PC_WebTeam[i].phone3} 
		email3={PC_WebTeam[i].email3} /> 
	});
	return (
		<div>
		{cardComponent3}
		</div>
		);
}

export default PcWebList;