import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {info_explore_function} from './info_explore_function';
import './info_explore.css';
import './info_explore_main.css'
import {BackToEvents} from '../../_BackToEvents/BackToEvents'
import {Info_Cards} from './info_cards'

class info_explore extends Component {

	componentDidMount(){
		info_explore_function();
	}

	render() {
		return (
			<div>
				<BackToEvents/>
				<div className="info_cont s--inactive">
				  <div className="info_cont__inner">
				  	<Info_Cards />
				  </div>
				</div>
			</div>
		)
	}
}

export default info_explore;