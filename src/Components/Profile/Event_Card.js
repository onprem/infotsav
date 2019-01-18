import React from 'react';
import {Link} from 'react-router-dom';

const EventCard = ({ename, category, eid, fee, status, teamid, deregEvent, payEvent}) => {
	let feeTotal = Math.round(fee + (fee*0.0239));
	let linkTo;
	switch(category){
		case "online": linkTo='/events/online_events'; break;
		case "onsite": linkTo='/events/onsite_events'; break;
		case "gamiacs": linkTo='/events/gamiacs_events'; break;
		case "managerial": linkTo='/events/man_events'; break;
		case "robotics": linkTo='/events/robo_events'; break;
		case "school": linkTo='/events/susp_events'; break;
		case "technical": linkTo='/events/tech_events'; break;
		default: linkTo='/events'
	}
	return(
		<div className='evtCard'>
			<div className='evtName'>
				<Link to={linkTo} ><b>{ename}</b></Link>
			</div>
			<div className='evtCat'>
				<Link to={linkTo} >{category}</Link>
			</div>
			{(status === 1 || fee === 0)?
				<div className='evtStatus'>
					<b>Paid</b>
				</div>
			  :(status === 2)?
			  	  <div className='evtStatus'>
					<b>Pending</b>
				  </div>
			  	:
				  <div className='evtStatus'>
				  	<span className='pointer payLink dim' onClick={() => payEvent(eid, feeTotal, teamid)}>Pay Rs. {fee}</span>
				  	<span className='pointer unregLink dim' onClick={() => deregEvent(eid)}>Remove</span>
				  </div>
			}
		</div>

		);
}

export default EventCard;