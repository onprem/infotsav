import React, { Component } from 'react';
import {info_explore_function} from './info_explore_function';
import './info_explore.css';
import './info_explore_main.css'
import {BackToEvents} from '../../_BackToEvents/BackToEvents'
import {InfoCards} from './info_cards'

class info_explore extends Component {
	// constructor(props){
	// 	super(props);
	// }

	componentDidMount(){
		info_explore_function();
	}

	render() {
		return (
			<div>
				<BackToEvents/>
				<div className="info_cont s--inactive">
				  <div className="info_cont__inner">
				  	<InfoCards {...this.props} />
				  </div>
				</div>
			</div>
		)
	}
}

export default info_explore;