import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import EmtList from './EmtList';
import CoordList from './CoordList';
import TMList from './TMList';
import {emts,coord,TMheads} from './Data';
import {parallax} from './Contact_parallax.js';
import './contact.css'

class Contact extends Component {

	componentDidMount() {
		parallax();
	}

	render () {
	return (
		<div>
			 <div className="container">
				 <section className="background">
				   <div className="content-wrapper">
				   		<div className='tc'>
				   			<h1>Meet Our Coordinators</h1>
							<CoordList coord={coord} />
						</div>
				   </div>
				 </section>
				 <section className="background">
				   <div className="content-wrapper">
				   		<div className='tc'>
				   			<h1>A lot Of juhi ma'am</h1>
							<EmtList emts={emts} />
						</div>
				   </div>
				 </section>
			  	 <section className="background">
			       <div className="content-wrapper">
			       		<div className='tc'>
				   			<h1>Technical & Managerial Heads</h1>
							<TMList TMheads={TMheads} />
						</div>
			       </div>
			     </section>
			     <section className="background">
			       <div className="content-wrapper">
			       </div>
			     </section>
			</div>
		</div>
		);
	}
}

export default Contact;