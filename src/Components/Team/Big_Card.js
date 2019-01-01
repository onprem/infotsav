import React from 'react';

const BigCard = ({name, email, phone, icon, onClickEaster, webTeam}) => {
	if(webTeam){
		return(
			<div onClick={onClickEaster} className='tc our-team dib width2 pa0 ma2 grow bw2 shadow-5'>
				<img alt='Coordinators' src={require('../../assets/team/'+icon)} />
			<div className='team-content'> 
					<p className='name'>{name}</p>
					<a href={"mailto:"+email}><p className='email'>{email}</p></a>
					<a href={"tel:+91"+phone}><p className='phone'>{phone}</p></a>
				</div>
			</div>
		);
	}
	else{
		return(
			<div className='tc our-team dib width2 pa0 ma2 grow bw2 shadow-5'>
				<img alt='Coordinators' src={require('../../assets/team/'+icon)} />
			<div className='team-content'> 
					<p className='name'>{name}</p>
					<a href={"mailto:"+email}><p className='email'>{email}</p></a>
					<a href={"tel:+91"+phone}><p className='phone'>{phone}</p></a>
				</div>
			</div>
		);		
	}
}

export default BigCard;