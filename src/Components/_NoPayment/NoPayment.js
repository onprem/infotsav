import React, { Component } from 'react';
import './NoPayment.css';

class NoPayment extends Component {
	closeListen = () =>{
		var payAnn = document.getElementsByClassName('announcement')[0];
		var closeAnn = document.getElementsByClassName('close-ann')[0];

		closeAnn.addEventListener("click", function(){
		    payAnn.classList.remove('show-notif');
		});
	}
	componentDidMount(){
		this.closeListen();
	}
	render() {
		return(
		  	<div className="announcement show-notif">
		  		<span className="fas fa-exclamation-circle"></span>
				<span>&nbsp; Announcement: Due to heavy participation, last date for payments is 27-Jan-19.</span>
				<span className="close-ann fas fa-times"></span>
			</div>
		);
	}
}
export default NoPayment;