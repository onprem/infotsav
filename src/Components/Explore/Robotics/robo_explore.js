import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {robo_explore_function} from './robo_explore_function';
import './robo_explore.css';
import './robo_explore_main.css'
import {BackToEvents} from '../../_BackToEvents/BackToEvents'
import {Robotics_Cards} from './robo_cards'

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
			  	<Robotics_Cards />
			  </div>
			</div>
			</div>

		)
	}
}

export default robo_explore;