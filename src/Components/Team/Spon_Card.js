import React from 'react';

const SponCard = ({name, phone,icon}) => {
	return(
		<div className='tc our-team dib width4 pa0 ma2 grow bw2 shadow-5'>
			<img alt='Spon_Team' src={require('../../assets/team/'+icon)} />
		<div className='team-content1'> 
				<p className='name'>{name}</p>
				<a href={"tel:+91"+phone}><p className='phone'>{phone}</p></a>
			</div>
		</div>

		);
}

export default SponCard;