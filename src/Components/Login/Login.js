import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Footer} from '../Footer/Footer';
import '../../assets/css/solid.min.css'
import '../../assets/css/fontawesome.min.css'
import '../../assets/css/signup.css'
import headers from "../../assets/logo/headers.png"
import {registerFunctions} from './LoginFunctions'

class Login extends Component {

  constructor(){
    super();
    this.state={
	  	questions: [
		  {question:"What's your email?", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/},
		  {question:"What's your password", type: "password"},
	    ],
    	email: '',
    	password: ''
    }
  }

  componentDidMount(){
  	registerFunctions(this);
  }

  render() {
  	console.log(this.state.username);
  	if(this.state.username){
		return <Redirect to='/profile' />
  	}

    return (
  		
	   	<div className='register-container'>
	   	  <div>
			<Link to='/'><img src={headers} className="headim" alt="infotsav logo" /></Link>
		  </div>
   		  <div id="progress"></div>
		  <div className="center">
		  	<div id="headdin">
		  		<h1>Login</h1>
		  	</div>
		    <div id="register">
		      <i id="progressButton" className="fas fa-arrow-right next"></i>
		      <div id="inputContainer">
		        <input id="inputField" required autoFocus />
		        <label id="inputLabel"></label>
		        <select id="selectBox" className='doNotDisplay'>
		          <option value="male">Male</option>
		          <option value="female">Female</option>
		          <option value="other">Other</option>
		        </select>
		        <div id="inputProgress"></div>
		      </div>
		    </div>
		    <div id="sendto">Don't have an account? <Link to="/register">REGISTER</Link></div>
		    <div id="holdit"></div>
	  	</div>
  			<Footer />
		</div>
    );
  }
}

export default Login;
