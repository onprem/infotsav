import React from 'react';
import {Link} from 'react-router-dom'
import events from '../../../assets/events.json';
import Extab from '../Extab/Extab'

export const Technical_Cards = (props) => {
	return(
		<div>
			{Object.entries(events.technical).map(([key, value]) =>
			    <div key={value.eid} className="tech_el">
			      <div className="tech_el__overflow">
			        <div className="tech_el__inner">
			          <div className="tech_el__bg"></div>
			          <div className="tech_el__preview-cont">
			            <h2 className="tech_el__heading">{value.EventName}</h2>
			          </div>
			          <div className="tech_el__content">
			            <div className="tech_el__text">{value.EventName}</div>
			            <div className="tech_el__close-btn"></div>
			            <div className="event_data">
			            	<Extab key={value.eid} eventDetails={value} {...props} />
		            	</div>
			          </div>
			        </div>
			      </div>
			      <div className="tech_el__index">
			        <div className="tech_el__index-back">{parseInt(key)+1}</div>
			        <div className="tech_el__index-front">
			          <div className="tech_el__index-overlay" data-index={parseInt(key)+1}>{parseInt(key)+1}</div>
			        </div>
			      </div>
			    </div>
			)};
		</div>
	);
}