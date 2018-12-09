import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {tech_explore_function} from './tech_explore_function';
import './tech_explore.css';
import './tech_explore_main.css'
import {BackToEvents} from '../../_BackToEvents/BackToEvents'
import {Technical_Cards} from './technical_cards'

class tech_explore extends Component {

	componentDidMount(){
		tech_explore_function();
	}

	render() {
		return (
			<div>
				<BackToEvents/>
				<div className="tech_cont s--inactive">
			  <div className="tech_cont__inner">
			  	<Technical_Cards />
			  </div>
				</div>
			</div>

		)
	}
}

export default tech_explore;