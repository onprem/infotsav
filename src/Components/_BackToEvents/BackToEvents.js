import React from 'react';
import {Link} from 'react-router-dom'
import './BackToEvents.css'

export const BackToEvents = () => {
	return (
		<div className="events_back">
				<Link to="/events"><span className="fas fa-arrow-left"></span></Link>
		</div>
	);
}