import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {susp_explore_function} from './susp_explore_function';
import './susp_explore.css';
import './susp_explore_main.css'
import {BackToEvents} from '../../_BackToEvents/BackToEvents'

class susp_explore extends Component {

	componentDidMount(){
		susp_explore_function();
	}

	render() {
		return (
			<div>
				<BackToEvents />
			 <div class="susp_cont s--inactive">
			  <div class="susp_cont__inner">
			    <div class="susp_el">
			      <div class="susp_el__overflow">
			        <div class="susp_el__inner">
			          <div class="susp_el__bg"></div>
			          <div class="susp_el__preview-cont">
			            <h2 class="susp_el__heading">School Olympiad</h2>
			          </div>
			          <div class="susp_el__content">
			            <div class="susp_el__text">School Olympiad</div>
			            <div class="susp_el__close-btn"></div>
			            <p class="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			          </div>
			        </div>
			      </div>
			      <div class="susp_el__index">
			        <div class="susp_el__index-back">1</div>
			        <div class="susp_el__index-front">
			          <div class="susp_el__index-overlay" data-index="1">1</div>
			        </div>
			      </div>
			    </div>

			    <div class="susp_el">
			      <div class="susp_el__overflow">
			        <div class="susp_el__inner">
			          <div class="susp_el__bg"></div>
			          <div class="susp_el__preview-cont">
			            <h2 class="susp_el__heading">Innovate The Good</h2>
			          </div>
			          <div class="susp_el__content">
			            <div class="susp_el__text">Innovate The Good</div>
			            <div class="susp_el__close-btn"></div>
			            <p class="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			          </div>
			        </div>
			      </div>
			      <div class="susp_el__index">
			        <div class="susp_el__index-back">2</div>
			        <div class="susp_el__index-front">
			          <div class="susp_el__index-overlay" data-index="2">2</div>
			        </div>
			      </div>
			    </div>

			    <div class="susp_el">
			      <div class="susp_el__overflow">
			        <div class="susp_el__inner">
			          <div class="susp_el__bg"></div>
			          <div class="susp_el__preview-cont">
			            <h2 class="susp_el__heading">Whizz Troop</h2>
			          </div>
			          <div class="susp_el__content">
			            <div class="susp_el__text">Whizz Troop</div>
			            <div class="susp_el__close-btn"></div>
			            <p class="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			          </div>
			        </div>
			      </div>
			      <div class="susp_el__index">
			        <div class="susp_el__index-back">3</div>
			        <div class="susp_el__index-front">
			          <div class="susp_el__index-overlay" data-index="3">3</div>
			        </div>
			      </div>
			    </div>
			  </div>
				</div>
			</div>
		)
	}
}

export default susp_explore;