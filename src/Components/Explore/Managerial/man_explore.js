import React, { Component } from 'react';
import {man_explore_function} from './man_explore_function';
import './man_explore.css';
import './man_explore_main.css'
import {BackToEvents} from '../../_BackToEvents/BackToEvents'
import {ManCards} from './man_cards'

class man_explore extends Component {
	// constructor(props){
	// 	super(props);
	// }

	componentDidMount(){
		man_explore_function();
	}

	render() {
		return (
			<div>
				<BackToEvents/>
				
			 <div className="man_cont s--inactive">
			  <div className="man_cont__inner">
			  	<ManCards {...this.props} />
			  </div>
				</div>
			</div>
		)
	}
}

export default man_explore;