import React from 'react';
import juhi from './Juhi.jpg';

const Card2 = ({name, email, phone}) => {
	return(
		<div className='tc our-team dib width2 pa0 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={juhi} />
		<div className='team-content'> 
				<p className='name'>{name}</p>
				<p className='email'>{email}</p>
				<p className='phone'>{phone}</p>
			</div>
		</div>

		);
}

export default Card2;