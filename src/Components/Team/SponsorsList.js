import React from 'react';
import SponCard from './Spon_Card';

const SponList = ({ sponsorsteam }) => {
	const cardComponent3 = sponsorsteam.map((user, i) => {
		return <SponCard 
		key={i} 
		icon={sponsorsteam[i].icon}
		name={sponsorsteam[i].name} 
		phone={sponsorsteam[i].phone} /> 
	});
	return (
		<div>
		{cardComponent3}
		</div>
		);
}

export default SponList;