import React from 'react';
import events from '../../../assets/events.json';
import Extab from '../Extab/Extab'

export const GamiacCards = (props) => {
	return(
		<div>
			{Object.entries(events.gamiacs).map(([key, value]) =>
			    <div key={value.eid} className="gam_el">
			      <div className="gam_el__overflow">
			        <div className="gam_el__inner">
			          <div className="gam_el__bg"></div>
			          <div className="gam_el__preview-cont">
			            <h2 className="gam_el__heading">{value.EventName}</h2>
			          </div>
			          <div className="gam_el__content">
			            <div className="gam_el__text">{value.EventName}</div>
			            <div className="gam_el__close-btn"></div>
			            <div className="event_data">
			            	<Extab key={value.eid} eventDetails={value} {...props} />
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="gam_el__index">
			        <div className="gam_el__index-back">{parseInt(key)+1}</div>
			        <div className="gam_el__index-front">
			          <div className="gam_el__index-overlay" data-index={parseInt(key)+1}>{parseInt(key)+1}</div>
			        </div>
			      </div>
			    </div>
			)};
		</div>
	);
}