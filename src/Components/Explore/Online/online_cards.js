import React from 'react';
import {Link} from 'react-router-dom'
import events from '../../../assets/events.json';
import Extab from '../Extab/Extab'

export const Online_Cards = () => {
	return(
		<div>
			{Object.entries(events.online).map(([key, value]) =>
			    <div key={value.eid} className="online_el">
			      <div className="online_el__overflow">
			        <div className="online_el__inner">
			          <div className="online_el__bg"></div>
			          <div className="online_el__preview-cont">
			            <h2 className="online_el__heading">{value.EventName}</h2>
			          </div>
			          <div className="online_el__content">
			            <div className="online_el__text">{value.EventName}</div>
			            <div className="online_el__close-btn"></div>
			            <div class="event_data">
			            	<Extab key={value.eid} eventDetails={value} />
		            	</div>
			          </div>
			        </div>
			      </div>
			      <div className="online_el__index">
			        <div className="online_el__index-back">{parseInt(key)+1}</div>
			        <div className="online_el__index-front">
			          <div className="online_el__index-overlay" data-index={parseInt(key)+1}>{parseInt(key)+1}</div>
			        </div>
			      </div>
			    </div>
			)};
		</div>
	);
}