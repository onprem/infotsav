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
		  {question:"What's your name?"},
		  {question:"Gender", type: "sellect"},
		  {question:"Which College do you study in?"},
		  {question:"Which City do you live in?"},
		  {question:"What's your email?", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/},
		  {question:"What's your phone number?", type:'tel', pattern: /^\d{10}$/},
		  {question:"Create your password", type: "password"},
	    ],
	    gotData: false
    }
    this.userData= {
    		name: '',
    		gender: '',
    		college: '',
    		city: '',
    		email: '',
    		phone: '',
    		password: ''
    	}
  }

  componentDidMount(){
  	registerFunctions(this);
  }

  requestRegistration = (userData) =>{
	fetch('http://localhost:3001/register', {
		method: 'post',
		headers: {'Content-type': 'application/json'},
		body: JSON.stringify({userData})
	})
	.then(response => response.json())
	.then((user) => {console.log(user);})
	.catch(console.log);
  }

  updateUserData = () =>{
  	this.userData = {
		name: this.state.questions[0].value,
		gender: this.state.questions[1].value,
		college: this.state.questions[2].value,
		city: this.state.questions[3].value,
		email: this.state.questions[4].value,
		phone: this.state.questions[5].value,
		password: this.state.questions[6].value
  	};
  	if(this.state.gotData){
  		this.requestRegistration(this.userData);
  	}
  }

  render() {
  	if(this.state.questions[0].value)
  		this.updateUserData();

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
