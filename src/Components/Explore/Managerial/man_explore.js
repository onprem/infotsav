import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {man_explore_function} from './man_explore_function';
import './man_explore.css';
import './man_explore_main.css'
import {BackToEvents} from '../../_BackToEvents/BackToEvents'

class man_explore extends Component {

	componentDidMount(){
		man_explore_function();
	}

	render() {
		return (
			<div>
				<BackToEvents/>
				
			 <div className="man_cont s--inactive">
			  <div className="man_cont__inner">
			    <div className="man_el">
			      <div className="man_el__overflow">
			        <div className="man_el__inner">
			          <div className="man_el__bg"></div>
			          <div className="man_el__preview-cont">
			            <h2 className="man_el__heading">Jobs</h2>
			          </div>
			          <div className="man_el__content">
			            <div className="man_el__text">Jobs</div>
			            <div className="man_el__close-btn"></div>
			            <p className="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			          </div>
			        </div>
			      </div>
			      <div className="man_el__index">
			        <div className="man_el__index-back">1</div>
			        <div className="man_el__index-front">
			          <div className="man_el__index-overlay" data-index="1">1</div>
			        </div>
			      </div>
			    </div>

			    <div className="man_el">
			      <div className="man_el__overflow">
			        <div className="man_el__inner">
			          <div className="man_el__bg"></div>
			          <div className="man_el__preview-cont">
			            <h2 className="man_el__heading">Pinnacle</h2>
			          </div>
			          <div className="man_el__content">
			            <div className="man_el__text">Pinnacle</div>
			            <div className="man_el__close-btn"></div>
			            <p className="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			          </div>
			        </div>
			      </div>
			      <div className="man_el__index">
			        <div className="man_el__index-back">2</div>
			        <div className="man_el__index-front">
			          <div className="man_el__index-overlay" data-index="2">2</div>
			        </div>
			      </div>
			    </div>

			    <div className="man_el">
			      <div className="man_el__overflow">
			        <div className="man_el__inner">
			          <div className="man_el__bg"></div>
			          <div className="man_el__preview-cont">
			            <h2 className="man_el__heading">Corporate Crisis</h2>
			          </div>
			          <div className="man_el__content">
			            <div className="man_el__text">Corporate Crisis</div>
			            <div className="man_el__close-btn"></div>
			            <p className="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			          </div>
			        </div>
			      </div>
			      <div className="man_el__index">
			        <div className="man_el__index-back">3</div>
			        <div className="man_el__index-front">
			          <div className="man_el__index-overlay" data-index="3">3</div>
			        </div>
			      </div>
			    </div>

			    <div className="man_el">
			      <div className="man_el__overflow">
			        <div className="man_el__inner">
			          <div className="man_el__bg"></div>
			          <div className="man_el__preview-cont">
			            <h2 className="man_el__heading">IPL Auction</h2>
			          </div>
			          <div className="man_el__content">
			            <div className="man_el__text">IPL Auction</div>
			            <div className="man_el__close-btn"></div>
			            <p className="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			          </div>
			        </div>
			      </div>
			      <div className="man_el__index">
			        <div className="man_el__index-back">4</div>
			        <div className="man_el__index-front">
			          <div className="man_el__index-overlay" data-index="4">4</div>
			        </div>
			      </div>
			    </div>

			    <div className="man_el">
			      <div className="man_el__overflow">
			        <div className="man_el__inner">
			          <div className="man_el__bg"></div>
			          <div className="man_el__preview-cont">
			            <h2 className="man_el__heading">Brandsome</h2>
			          </div>
			          <div className="man_el__content">
			            <div className="man_el__text">Brandsome</div>
			            <div className="man_el__close-btn"></div>
			            <p className="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			          </div>
			        </div>
			      </div>
			      <div className="man_el__index">
			        <div className="man_el__index-back">5</div>
			        <div className="man_el__index-front">
			          <div className="man_el__index-overlay" data-index="5">5</div>
			        </div>
			      </div>
			    </div>

			    <div className="man_el">
			      <div className="man_el__overflow">
			        <div className="man_el__inner">
			          <div className="man_el__bg"></div>
			          <div className="man_el__preview-cont">
			            <h2 className="man_el__heading">Sameeksha</h2>
			          </div>
			          <div className="man_el__content">
			            <div className="man_el__text">Sameeksha</div>
			            <div className="man_el__close-btn"></div>
			            <p className="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			          </div>
			        </div>
			      </div>
			      <div className="man_el__index">
			        <div className="man_el__index-back">6</div>
			        <div className="man_el__index-front">
			          <div className="man_el__index-overlay" data-index="6">6</div>
			        </div>
			      </div>
			    </div>
			  </div>
				</div>
			</div>
		)
	}
}

export default man_explore;