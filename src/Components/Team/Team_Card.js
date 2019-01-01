import React from 'react';
import team from '../../assets/team/team.jpg';

const TeamCard = ({onClickEaster, name, email, phone,name1, email1, phone1,name2, email2, phone2,name3, email3, phone3 }) => {
	return(
		<div className='our-team dib width3' onClick={onClickEaster}>
			<img alt='Web Team' src={team} />
			<div className='team-align'>
				<div className='team-contentx'> 
					<p className='name'>{name}</p>
					<a href={"mailto:"+email}><p className='email'>{email}</p></a>
					<a href={"tel:+91"+phone}><p className='phone'>{phone}</p></a>
				</div>

				<div className='team-contentx'> 
					<p className='name'>{name1}</p>
					<a href={"mailto:"+email1}><p className='email'>{email1}</p></a>
					<a href={"tel:+91"+phone1}><p className='phone'>{phone1}</p></a>
				</div>

				<div className='team-contentx'> 
					<p className='name'>{name2}</p>
					<a href={"mailto:"+email2}><p className='email'>{email2}</p></a>
					<a href={"tel:+91"+phone2}><p className='phone'>{phone2}</p></a>
				</div>

				<div className='team-contentx'> 
					<p className='name'>{name3}</p>
					<a href={"mailto:"+email3}><p className='email'>{email3}</p></a>
					<a href={"tel:+91"+phone3}><p className='phone'>{phone3}</p></a>
				</div>
			</div>

		</div>

		);
}

export default TeamCard;