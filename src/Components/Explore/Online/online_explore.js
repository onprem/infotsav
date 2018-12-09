import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {online_explore_function} from './online_explore_function';
import './online_explore.css';
import './online_explore_main.css';
import {BackToEvents} from '../../_BackToEvents/BackToEvents'
import {Online_Cards} from './online_cards'

class online_explore extends Component {

	componentDidMount(){
		online_explore_function();
	}

	render() {
		return (
			<div>
				<BackToEvents/>
				<div class="online_cont s--inactive">

					  <div class="online_cont__inner">
					  	<Online_Cards />
					  </div>
				</div>
			</div>
		)
	}
}

export default online_explore;