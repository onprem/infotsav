import React, { Component } from 'react';
import {susp_explore_function} from './susp_explore_function';
import './susp_explore.css';
import './susp_explore_main.css'
import {BackToEvents} from '../../_BackToEvents/BackToEvents'
import {SuspCards} from './susp_cards'
class susp_explore extends Component {
	// constructor(props){
	// 	super(props);
	// }

	componentDidMount(){
		susp_explore_function();
	}

	render() {
		return (
			<div>
				<BackToEvents />
			 <div className="susp_cont s--inactive">
			  <div className="susp_cont__inner">
			  	<SuspCards {...this.props} />
			  </div>
				</div>
			</div>
		)
	}
}

export default susp_explore;