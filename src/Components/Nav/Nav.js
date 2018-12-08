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
			<label aria-hidden="true" onClick={this.toggleNavView} id="labeel" />
			<nav id="menu" className='main-nav-nav'>
				<Link to="/" onClick={this.toggleNavView}>HOME</Link>
				<Link onClick={this.toggleNavView} to="/profile">ABOUT</Link>
				<Link onClick={this.toggleNavView} to="/events">EVENTS</Link>
				<Link onClick={this.toggleNavView} to="/register">REGISTER</Link>
				<Link onClick={this.toggleNavView} to="/login">LOGIN</Link>
				<Link onClick={this.toggleNavView} to="/team">OUR TEAM</Link>
				<Link onClick={this.toggleNavView} to="#">SPONSORS</Link>
			</nav>
		</div>
    );
  }
}

export default Nav;
