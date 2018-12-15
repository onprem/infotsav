import React from 'react';
import {Link, Redirect} from 'react-router-dom';

const Big_Card = ({ename, category, fee, status}) => {
	return(
		<div className='evtCard'>
			<div className='evtName'>
				{ename}
			</div>
			<div className='evtCat'>
				<Link to="/events">{category}</Link>
			</div>
			<div className='evtStatus'>
			{(status)?
				<b>Paid</b>
			  :
			  	<div>
			  		<Link to='#payment-gateway'>Pay Rs. {fee} </Link>
			  		<Link to="#un-register">Remove Event</Link>
			  	</div>
			}
			</div>
		</div>

		);
}

export default Big_Card;