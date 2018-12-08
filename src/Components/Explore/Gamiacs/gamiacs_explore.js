import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {gam_explore_function} from './gamiacs_explore_function';
import './gamiacs_explore.css';
import './gamiacs_explore_main.css'
import Extab from '../Extab/Extab'

class gamiacs_explore extends Component {

	componentDidMount(){
		gam_explore_function();
	}

	render() {
		return (
			<div class="gam_cont s--inactive">
			  <div class="gam_cont__inner">
			    <div class="gam_el">
			      <div class="gam_el__overflow">
			        <div class="gam_el__inner">
			          <div class="gam_el__bg"></div>
			          <div class="gam_el__preview-cont">
			            <h2 class="gam_el__heading">NFS</h2>
			          </div>
			          <div class="gam_el__content">
			            <div class="gam_el__text">NFS</div>
			            <div class="gam_el__close-btn"></div>
			            <p class="event_data">
			            	<Extab />
			            </p>
			          </div>
			        </div>
			      </div>
			      <div class="gam_el__index">
			        <div class="gam_el__index-back">1</div>
			        <div class="gam_el__index-front">
			          <div class="gam_el__index-overlay" data-index="1">1</div>
			        </div>
			      </div>
			    </div>

			    <div class="gam_el">
			      <div class="gam_el__overflow">
			        <div class="gam_el__inner">
			          <div class="gam_el__bg"></div>
			          <div class="gam_el__preview-cont">
			            <h2 class="gam_el__heading">CS-GO</h2>
			          </div>
			          <div class="gam_el__content">
			            <div class="gam_el__text">CS-GO</div>
			            <div class="gam_el__close-btn"></div>
			            <p class="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			          </div>
			        </div>
			      </div>
			      <div class="gam_el__index">
			        <div class="gam_el__index-back">2</div>
			        <div class="gam_el__index-front">
			          <div class="gam_el__index-overlay" data-index="2">2</div>
			        </div>
			      </div>
			    </div>

			    <div class="gam_el">
			      <div class="gam_el__overflow">
			        <div class="gam_el__inner">
			          <div class="gam_el__bg"></div>
			          <div class="gam_el__preview-cont">
			            <h2 class="gam_el__heading">FIFA</h2>
			          </div>
			          <div class="gam_el__content">
			            <div class="gam_el__text">FIFA</div>
			            <div class="gam_el__close-btn"></div>
			            <p class="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			          </div>
			        </div>
			      </div>
			      <div class="gam_el__index">
			        <div class="gam_el__index-back">3</div>
			        <div class="gam_el__index-front">
			          <div class="gam_el__index-overlay" data-index="3">3</div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}

export default gamiacs_explore;