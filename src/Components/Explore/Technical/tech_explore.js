import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {tech_explore_function} from './tech_explore_function';
import './tech_explore.css';
import './tech_explore_main.css'
import {BackToEvents} from '../../_BackToEvents/BackToEvents'

class tech_explore extends Component {

	componentDidMount(){
		tech_explore_function();
	}

	render() {
		return (
			<div>
				<BackToEvents/>
				<div class="tech_cont s--inactive">
			  <div class="tech_cont__inner">
			    <div class="tech_el">
			      <div class="tech_el__overflow">
			        <div class="tech_el__inner">
			          <div class="tech_el__bg"></div>
			          <div class="tech_el__preview-cont">
			            <h2 class="tech_el__heading">Hackathon</h2>
			          </div>
			          <div class="tech_el__content">
			            <div class="tech_el__text">Hackathon</div>
			            <div class="tech_el__close-btn"></div>
			            <p class="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			          </div>
			        </div>
			      </div>
			      <div class="tech_el__index">
			        <div class="tech_el__index-back">1</div>
			        <div class="tech_el__index-front">
			          <div class="tech_el__index-overlay" data-index="1">1</div>
			        </div>
			      </div>
			    </div>
			    <div class="tech_el">
			      <div class="tech_el__overflow">
			        <div class="tech_el__inner">
			          <div class="tech_el__bg"></div>
			          <div class="tech_el__preview-cont">
			            <h2 class="tech_el__heading">Techathalon</h2>
			          </div>
			          <div class="tech_el__content">
			            <div class="tech_el__text">Techathalon</div>
			            <div class="tech_el__close-btn"></div>
			            <p class="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			          </div>
			        </div>
			      </div>
			      <div class="tech_el__index">
			        <div class="tech_el__index-back">2</div>
			        <div class="tech_el__index-front">
			          <div class="tech_el__index-overlay" data-index="2">2</div>
			        </div>
			      </div>
			    </div>
			    <div class="tech_el">
			      <div class="tech_el__overflow">
			        <div class="tech_el__inner">
			          <div class="tech_el__bg"></div>
			          <div class="tech_el__preview-cont">
			            <h2 class="tech_el__heading">Code Shuffle</h2>
			          </div>
			          <div class="tech_el__content">
			            <div class="tech_el__text">Code Shuffle</div>
			            <div class="tech_el__close-btn"></div>
			            <p class="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			          </div>
			        </div>
			      </div>
			      <div class="tech_el__index">
			        <div class="tech_el__index-back">3</div>
			        <div class="tech_el__index-front">
			          <div class="tech_el__index-overlay" data-index="3">3</div>
			        </div>
			      </div>
			    </div>
			    <div class="tech_el">
			      <div class="tech_el__overflow">
			        <div class="tech_el__inner">
			          <div class="tech_el__bg"></div>
			          <div class="tech_el__preview-cont">
			            <h2 class="tech_el__heading">Code Rush</h2>
			          </div>
			          <div class="tech_el__content">
			            <div class="tech_el__text">Code Rush</div>
			            <div class="tech_el__close-btn"></div>
			            <p class="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			          </div>
			        </div>
			      </div>
			      <div class="tech_el__index">
			        <div class="tech_el__index-back">4</div>
			        <div class="tech_el__index-front">
			          <div class="tech_el__index-overlay" data-index="4">4</div>
			        </div>
			      </div>
			    </div>
			  </div>
				</div>
			</div>

		)
	}
}

export default tech_explore;