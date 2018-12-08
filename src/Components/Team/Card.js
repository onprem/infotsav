import React from 'react';

const Card = ({name, email, phone}) => {

	return(
		<div className='tc our-team dib width pa0 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={require('../../assets/photos/co_juhi.jpg')} />
		<div className='team-content'> 
				<p className='name'>{name}</p>
				<p className='email'>{email}</p>
				<p className='phone'>{phone}</p>
			</div>
		</div>

		);
}

export default Card;