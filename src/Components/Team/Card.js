import React from 'react';

const Card = ({name, email, phone,icon}) => {
	return(
		<div className='tc our-team dib width pa0 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={require('../../assets/team/'+icon)} />
		<div className='team-content'> 
				<p className='name'>{name}</p>
				<a href={"mailto:"+email}><p className='email'>{email}</p></a>
				<a href={"tel:+91"+phone}><p className='phone'>{phone}</p></a>
			</div>
		</div>

		);
}

export default Card;