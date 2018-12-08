import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {gam_explore_function} from './gamiacs_explore_function';
import './gamiacs_explore.css';
import './gamiacs_explore_main.css'
import Extab from '../Extab/Extab'
import {BackToEvents} from '../../_BackToEvents/BackToEvents'
import events from '../../../assets/events.json';

class gamiacs_explore extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		gam_explore_function();
	}

	render() {
		let a=0;
		return (
			<div>
				<BackToEvents />
				<div className="gam_cont s--inactive">
				  <div className="gam_cont__inner">
				    <div className="gam_el">
				      <div className="gam_el__overflow">
				        <div className="gam_el__inner">
				          <div className="gam_el__bg"></div>
				          <div className="gam_el__preview-cont">
				            <h2 className="gam_el__heading">NFS</h2>
				          </div>
				          <div className="gam_el__content">
				            <div className="gam_el__text">NFS</div>
				            <div className="gam_el__close-btn"></div>
				            <div className="event_data">
				            	<Extab key={events.gamiacs.c.eid} eventDetails={events.gamiacs.c} />
				            </div>
				          </div>
				        </div>
				      </div>
				      <div className="gam_el__index">
				        <div className="gam_el__index-back">1</div>
				        <div className="gam_el__index-front">
				          <div className="gam_el__index-overlay" data-index="1">1</div>
				        </div>
				      </div>
				    </div>

				    <div className="gam_el">
				      <div className="gam_el__overflow">
				        <div className="gam_el__inner">
				          <div className="gam_el__bg"></div>
				          <div className="gam_el__preview-cont">
				            <h2 className="gam_el__heading">CS-GO</h2>
				          </div>
				          <div className="gam_el__content">
				            <div className="gam_el__text">CS-GO</div>
				            <div className="gam_el__close-btn"></div>
				            <div className="event_data">
			            		<Extab key={events.gamiacs.b.eid} eventDetails={events.gamiacs.b} />
				            </div>
				          </div>
				        </div>
				      </div>
				      <div className="gam_el__index">
				        <div className="gam_el__index-back">2</div>
				        <div className="gam_el__index-front">
				          <div className="gam_el__index-overlay" data-index="2">2</div>
				        </div>
				      </div>
				    </div>

				    <div className="gam_el">
				      <div className="gam_el__overflow">
				        <div className="gam_el__inner">
				          <div className="gam_el__bg"></div>
				          <div className="gam_el__preview-cont">
				            <h2 className="gam_el__heading">FIFA</h2>
				          </div>
				          <div className="gam_el__content">
				            <div className="gam_el__text">FIFA</div>
				            <div className="gam_el__close-btn"></div>
				            <div className="event_data">
				            	<Extab key={events.gamiacs.a.eid} eventDetails={events.gamiacs.a} />
				            </div>
				          </div>
				        </div>
				      </div>
				      <div className="gam_el__index">
				        <div className="gam_el__index-back">3</div>
				        <div className="gam_el__index-front">
				          <div className="gam_el__index-overlay" data-index="3">3</div>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		)
	}
}

export default gamiacs_explore;