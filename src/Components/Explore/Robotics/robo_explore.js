import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {robo_explore_function} from './robo_explore_function';
import './robo_explore.css';
import './robo_explore_main.css'
import {BackToEvents} from '../../_BackToEvents/BackToEvents'

class robo_explore extends Component {

	componentDidMount(){
		robo_explore_function();
	}

	render() {
		return (
			<div>
			<BackToEvents/>
			

			 <div className="robo_cont s--inactive">
			  <div className="robo_cont__inner">
			    <div className="robo_el">
			      <div className="robo_el__overflow">
			        <div className="robo_el__inner">
			          <div className="robo_el__bg"></div>
			          <div className="robo_el__preview-cont">
			            <h2 className="robo_el__heading">Blazing Wheel</h2>
			          </div>
			          <div className="robo_el__content">
			            <div className="robo_el__text">Blazing Wheel</div>
			            <div className="robo_el__close-btn"></div>
			            <p className="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			          </div>
			        </div>
			      </div>
			      <div className="robo_el__index">
			        <div className="robo_el__index-back">1</div>
			        <div className="robo_el__index-front">
			          <div className="robo_el__index-overlay" data-index="1">1</div>
			        </div>
			      </div>
			    </div>
			    <div className="robo_el">
			      <div className="robo_el__overflow">
			        <div className="robo_el__inner">
			          <div className="robo_el__bg"></div>
			          <div className="robo_el__preview-cont">
			            <h2 className="robo_el__heading">Robo War</h2>
			          </div>
			          <div className="robo_el__content">
			            <div className="robo_el__text">Robo War</div>
			            <div className="robo_el__close-btn"></div>
			            <p className="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			          </div>
			        </div>
			      </div>
			      <div className="robo_el__index">
			        <div className="robo_el__index-back">2</div>
			        <div className="robo_el__index-front">
			          <div className="robo_el__index-overlay" data-index="2">2</div>
			        </div>
			      </div>
			    </div>
			    <div className="robo_el">
			      <div className="robo_el__overflow">
			        <div className="robo_el__inner">
			          <div className="robo_el__bg"></div>
			          <div className="robo_el__preview-cont">
			            <h2 className="robo_el__heading">Robo Maze</h2>
			          </div>
			          <div className="robo_el__content">
			            <div className="robo_el__text">Robo Maze</div>
			            <div className="robo_el__close-btn"></div>
			            <p className="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			          </div>
			        </div>
			      </div>
			      <div className="robo_el__index">
			        <div className="robo_el__index-back">3</div>
			        <div className="robo_el__index-front">
			          <div className="robo_el__index-overlay" data-index="3">3</div>
			        </div>
			      </div>
			    </div>
			    <div className="robo_el">
			      <div className="robo_el__overflow">
			        <div className="robo_el__inner">
			          <div className="robo_el__bg"></div>
			          <div className="robo_el__preview-cont">
			            <h2 className="robo_el__heading">Robo Soccer</h2>
			          </div>
			          <div className="robo_el__content">
			            <div className="robo_el__text">Robo Soccer</div>
			            <div className="robo_el__close-btn"></div>
			            <p className="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			          </div>
			        </div>
			      </div>
			      <div className="robo_el__index">
			        <div className="robo_el__index-back">4</div>
			        <div className="robo_el__index-front">
			          <div className="robo_el__index-overlay" data-index="4">4</div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
			</div>

		)
	}
}

export default robo_explore;