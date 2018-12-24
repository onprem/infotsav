import React, { Component } from 'react';
import {online_explore_function} from './online_explore_function';
import './online_explore.css';
import './online_explore_main.css';
import {BackToEvents} from '../../_BackToEvents/BackToEvents'
import {OnlineCards} from './online_cards'

class online_explore extends Component {
	// constructor(props){
	// 	super(props);
	// }

	componentDidMount(){
		online_explore_function();
	}

	render() {
		return (
			<div>
				<BackToEvents/>
				<div className="online_cont s--inactive">

					  <div className="online_cont__inner">
					  	<OnlineCards {...this.props} />
					  </div>
				</div>
			</div>
		)
	}
}

export default online_explore;