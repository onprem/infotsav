import React from 'react';
import {Link, Redirect} from 'react-router-dom';

const Event_Card = ({ename, category, eid, fee, status, deregEvent}) => {
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
				<b>{ename}</b>
			</div>
			<div className='evtCat'>
				<Link to={linkTo} >{category}</Link>
			</div>
			{(status)?
				<div className='evtStatus'>
					<b>Paid</b>
				</div>
			  :
			  	<div className='evtStatus'>
			  		<Link to="#Payment" className="payLink"><span >Pay Rs. {fee}</span></Link>
			  		<a className='pointer' onClick={() => deregEvent(eid)}><span className="unregLink">Remove</span></a>
			  	</div>
			}
		</div>

		);
}

export default Event_Card;