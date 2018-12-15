import React from 'react';
import {Link, Redirect} from 'react-router-dom';

const Big_Card = ({ename, category, fee, status}) => {
	return(
		<div className='evtCard'>
			<div className='evtName'>
				<b>{ename}</b>
			</div>
			<div className='evtCat'>
				<Link to="/events">{category}</Link>
			</div>
			{(status)?
				<div className='evtStatus'>
					<b>Paid</b>
				</div>
			  :
			  	<div className='evtStatus'>
			  		<span className="payLink"><Link to='#payment-gateway'>Pay Rs. {fee}</Link></span>
			  		<span className="unregLink"><Link to="#un-register">Remove</Link></span>
			  	</div>
			}
		</div>

		);
}

export default Big_Card;