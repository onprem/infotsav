import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {info_explore_function} from './info_explore_function';
import './info_explore.css';
import './info_explore_main.css'
import {BackToEvents} from '../../_BackToEvents/BackToEvents'

class info_explore extends Component {

	componentDidMount(){
		info_explore_function();
	}

	render() {
		return (
			<div>
				<BackToEvents/>
				<div className="info_cont s--inactive">
			  <div className="info_cont__inner">
			    <div className="info_el">
			      <div className="info_el__overflow">
			        <div className="info_el__inner">
			          <div className="info_el__bg"></div>
			          <div className="info_el__preview-cont">
			            <h2 className="info_el__heading">Aptitude Quiz</h2>
			          </div>
			          <div className="info_el__content">
			            <div className="info_el__text">Aptitude Quiz</div>
			            <div className="info_el__close-btn"></div>
			            <p class="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			          </div>
			        </div>
			      </div>
			      <div className="info_el__index">
			        <div className="info_el__index-back">1</div>
			        <div className="info_el__index-front">
			          <div className="info_el__index-overlay" data-index="1">1</div>
			        </div>
			      </div>
			    </div>
			    <div className="info_el">
			      <div className="info_el__overflow">
			        <div className="info_el__inner">
			          <div className="info_el__bg"></div>
			          <div className="info_el__preview-cont">
			            <h2 className="info_el__heading">Anime/MCU Quiz</h2>
			          </div>
			          <div className="info_el__content">
			            <div className="info_el__text">Anime/MCU Quiz</div>
			            <div className="info_el__close-btn"></div>
			            <p class="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			          </div>
			        </div>
			      </div>
			      <div className="info_el__index">
			        <div className="info_el__index-back">2</div>
			        <div className="info_el__index-front">
			          <div className="info_el__index-overlay" data-index="2">2</div>
			        </div>
			      </div>
			    </div>
			    <div className="info_el">
			      <div className="info_el__overflow">
			        <div className="info_el__inner">
			          <div className="info_el__bg"></div>
			          <div className="info_el__preview-cont">
			            <h2 className="info_el__heading">Bit Quiz</h2>
			          </div>
			          <div className="info_el__content">
			            <div className="info_el__text">BIT Quiz</div>
			            <div className="info_el__close-btn"></div>
			            <p class="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			          </div>
			        </div>
			      </div>
			      <div className="info_el__index">
			        <div className="info_el__index-back">3</div>
			        <div className="info_el__index-front">
			          <div className="info_el__index-overlay" data-index="3">3</div>
			        </div>
			      </div>
			    </div>
			    <div className="info_el">
			      <div className="info_el__overflow">
			        <div className="info_el__inner">
			          <div className="info_el__bg"></div>
			          <div className="info_el__preview-cont">
			            <h2 className="info_el__heading">Language Quiz</h2>
			          </div>
			          <div className="info_el__content">
			            <div className="info_el__text">Language Quiz</div>
			            <div className="info_el__close-btn"></div>
			            <p class="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			          </div>
			        </div>
			      </div>
			      <div className="info_el__index">
			        <div className="info_el__index-back">4</div>
			        <div className="info_el__index-front">
			          <div className="info_el__index-overlay" data-index="4">4</div>
			        </div>
			      </div>
			    </div>
			    <div className="info_el">
			      <div className="info_el__overflow">
			        <div className="info_el__inner">
			          <div className="info_el__bg"></div>
			          <div className="info_el__preview-cont">
			            <h2 className="info_el__heading">Treasure Hunt</h2>
			          </div>
			          <div className="info_el__content">
			            <div className="info_el__text">Treasure Hunt</div>
			            <div className="info_el__close-btn"></div>
			            <p class="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			          </div>
			        </div>
			      </div>
			      <div className="info_el__index">
			        <div className="info_el__index-back">5</div>
			        <div className="info_el__index-front">
			          <div className="info_el__index-overlay" data-index="5">5</div>
			        </div>
			      </div>
			    </div>
			  </div>
				</div>
			</div>
		)
	}
}

export default info_explore;