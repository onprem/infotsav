import React, { Component } from 'react';
import {tech_explore_function} from './tech_explore_function';
import './tech_explore.css';
import './tech_explore_main.css'
import {BackToEvents} from '../../_BackToEvents/BackToEvents'
import {TechnicalCards} from './technical_cards'

class tech_explore extends Component {
	// constructor(props){
	// 	super(props);
	// }

	componentDidMount(){
		tech_explore_function();
	}

	render() {
		return (
			<div>
				<BackToEvents/>
				<div className="tech_cont s--inactive">
			  <div className="tech_cont__inner">
			  	<TechnicalCards {...this.props} />
			  </div>
				</div>
			</div>

		)
	}
}

export default tech_explore;