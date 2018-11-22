import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

class Nav extends Component {

  constructor(){
    super();
    this.state={
    }
  }
  
  toggleNavView(){
	    document.querySelector(".hamburger-menu").classList.toggle('animate');
	    var $demoCont = document.querySelector(".navmenu");
	    $demoCont.classList.toggle("credits-active");
  }

  render() {
    return (
	   	<div>
			<div className="menu-wrapper" onClick={this.toggleNavView}>
			  <div className="hamburger-menu"></div>	  
			</div>
			<div className="navmenu" id="navm">
			    <div className="Menu">
				  <ul className="Menu-list" data-offset="10">
				    <li className="Menu-list-item" data-offset="20" onclick>
				      <Link to='/' onClick={this.toggleNavView}>HOME</Link>
				    </li>
				    <li className="Menu-list-item" data-offset="16" onclick>
				      <a href="events.html">EVENTS</a>
				    </li>
				    <li className="Menu-list-item" data-offset="12" onclick>
				      <a href="register.html">REGISTER</a>
				    </li>
				    <li className="Menu-list-item" data-offset="8" onclick>
				      <a href="#">CONTACT</a>
				    </li>
				  </ul>
				</div>
			</div>
		</div>
    );
  }
}

export default Nav;
