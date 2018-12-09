import React from 'react';
import {Link} from 'react-router-dom'
import events from '../../../assets/events.json';
import Extab from '../Extab/Extab'

export const Robotics_Cards = () => {
	return(
		<div>
			{Object.entries(events.robotics).map(([key, value]) =>
			    <div key={value.eid} className="robo_el">
			      <div className="robo_el__overflow">
			        <div className="robo_el__inner">
			          <div className="robo_el__bg"></div>
			          <div className="robo_el__preview-cont">
			            <h2 className="robo_el__heading">{value.EventName}</h2>
			          </div>
			          <div className="robo_el__content">
			            <div className="robo_el__text">{value.EventName}</div>
			            <div className="robo_el__close-btn"></div>
			            <div class="event_data">
			            	<Extab key={value.eid} eventDetails={value} />
		            	</div>
			          </div>
			        </div>
			      </div>
			      <div className="robo_el__index">
			        <div className="robo_el__index-back">{parseInt(key)+1}</div>
			        <div className="robo_el__index-front">
			          <div className="robo_el__index-overlay" data-index={parseInt(key)+1}>{parseInt(key)+1}</div>
			        </div>
			      </div>
			    </div>
			)};
		</div>
	);
}