import React from 'react';
import {Link, Redirect} from 'react-router-dom';

const Event_Card = ({ename, category, eid, fee, status, teamid, deregEvent, payEvent}) => {
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
			  		<a className='pointer' onClick={() => payEvent(eid, fee, teamid)}><span className="payLink">Pay Rs. {fee}</span></a>
			  		<a className='pointer' onClick={() => deregEvent(eid)}><span className="unregLink">Remove</span></a>
			  	</div>
			}
		</div>

		);
}

export default Event_Card;