import React from 'react';
import {Link, Redirect} from 'react-router-dom';

const Event_Card = ({ename, category, eid, fee, status, deregEvent}) => {
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
			  		<Link to="#Payment"><span className="payLink">Pay Rs. {fee}</span></Link>
			  		<a className='pointer' onClick={() => deregEvent(eid)}><span className="unregLink">Remove</span></a>
			  	</div>
			}
		</div>

		);
}

export default Event_Card;