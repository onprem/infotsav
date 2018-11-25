import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../assets/css/solid.min.css'
import '../../assets/css/fontawesome.min.css'
import './Register.css';
import {registerFunctions} from './RegisterFunctions'

class Register extends Component {

  constructor(){
    super();
    this.state={
	  	questions: [
		  {question:"What's your first name?"},
		  {question:"What's your last name?"},
		  {question:"Gender", type: "sellect"},
		  {question:"Which College do you study in?"},
		  {question:"Which City do you live in?"},
		  {question:"What's your email?", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/},
		  {question:"What's your phone number?", type:'tel', pattern: /^\d{10}$/},
		  {question:"Create your password", type: "password"},
	    ],
    	userData: {}
    }
  }

  componentDidMount(){
  	registerFunctions(this);
  	// this.setState({questions: registerFunctions(this.state.questions)});
  }
  componentWillUnmount(){
  }
  componentDidUpdate(){
  }

  render() {
  	if(this.state.questions)
  		console.log(this.state.questions);
    return (
	   	<div className='register-container'>
   		  <div id="progress"></div>
		  <div className="center">
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
	  	</div>
  
		</div>
    );
  }
}

export default Register;
