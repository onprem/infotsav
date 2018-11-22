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
	    document.getElementById('menu').classList.toggle('shownav');
		document.getElementsByClassName('burgers')[0].classList.toggle('open');
  }

  render() {
    return (
	   	<div className='main-nav-div'>
			<button className="burgers" onClick={this.toggleNavView} />
			<label aria-hidden="true" onClick={this.toggleNavView} title="menu" id="labeel">
			</label>
			<nav id="menu">
				<Link to="/" onClick={this.toggleNavView}>HOME</Link>
				<a href="events.html">EVENTS</a>
				<a href="#">CONTACT US</a>
				<a href="#">SPONSORS</a>
				<a href="#">ABOUT</a>
			</nav>
		</div>
    );
  }
}

export default Nav;
