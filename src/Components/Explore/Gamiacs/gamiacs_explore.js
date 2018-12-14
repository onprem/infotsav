import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {gam_explore_function} from './gamiacs_explore_function';
import './gamiacs_explore.css';
import './gamiacs_explore_main.css'
import Extab from '../Extab/Extab'
import {BackToEvents} from '../../_BackToEvents/BackToEvents'
import events from '../../../assets/events.json';
import {Gamiac_Cards} from './gamiacs_cards'

class gamiacs_explore extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		gam_explore_function();
	}

	render() {
		let a=0;
		return (
			<div>
				<BackToEvents />
				<div className="gam_cont s--inactive">
				  <div className="gam_cont__inner">
				  	<Gamiac_Cards {...this.props} />
				  </div>
				</div>
			</div>
		)
	}
}

export default gamiacs_explore;