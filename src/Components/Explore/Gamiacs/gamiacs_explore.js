import React, { Component } from 'react';
import {gam_explore_function} from './gamiacs_explore_function';
import './gamiacs_explore.css';
import './gamiacs_explore_main.css'
import {BackToEvents} from '../../_BackToEvents/BackToEvents'
import {GamiacCards} from './gamiacs_cards'

class gamiacs_explore extends Component {
	// constructor(props){
	// 	super(props);
	// }

	componentDidMount(){
		gam_explore_function();
	}

	render() {
		return (
			<div>
				<BackToEvents />
				<div className="gam_cont s--inactive">
				  <div className="gam_cont__inner">
				  	<GamiacCards {...this.props} />
				  </div>
				</div>
			</div>
		)
	}
}

export default gamiacs_explore;