import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Footer} from '../Footer/Footer';
import '../../assets/css/solid.min.css'
import '../../assets/css/fontawesome.min.css'
import '../../assets/css/signup.css'
import headers from "../../assets/logo/headers.png"
import {registerFunctions} from './RegisterFunctions'

class Register extends Component {

  constructor(){
    super();
    this.state={
	  	questions: [
		  {question:"What's your name?"},
		  {question:"Gender", type: "sellect"},
		  {question:"College Name?"},
		  {question:"City?"},
		  {question:"What's your email?", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/},
		  {question:"What's your phone number?", type:'tel', pattern: /^\d{10}$/},
		  {question:"Create your password", type: "password"},
	    ],
	    gotData: false,
	    responseMessage: '',
	    receivedError: false 
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
  	let err = false;
	fetch('/api/register', {
		method: 'post',
		headers: {'Content-type': 'application/json'},
		body: JSON.stringify({userData})
	})
	.then(response => {
		if(response.status !== 200)
			err = true;
		return response.json()
	})
	.then((user) => {
		if(err)
			throw(user);
		this.setState({responseMessage: user});
	})
	.catch(err => {this.setState({receivedError: true, responseMessage: err})});
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
  	if(this.state.gotData && !this.state.responseMessage){
  		this.requestRegistration(this.userData);
  	}
  }

  render() {
  	if(this.state.questions[0].value && !this.state.responseMessage)
  		this.updateUserData();

  	if(this.state.errorRes){
  		setTimeout(()=>{
  			window.location.reload();
  		}, 1200);
  	}

    return (
	   	<div className='register-container'>
	   	  <div>
			<Link to='/'><img src={headers} className="headim" alt="infotsav logo" /></Link>
		  </div>
   		  <div id="progress"></div>
		  <div className="center">
		    <div id="headdin">
		  		<h1>Register</h1>
		  	</div>
		  	{
		  	(this.state.responseMessage)?
		  		(this.state.receivedError)?
					<div className='f3 white'>
						{this.state.responseMessage}
					</div>
				:
					<div className='f3 white'>
						{this.state.responseMessage} <br />
						Please verify your email to continue
					</div>
			:
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
			}
		    <div id="sendto">Already have an account? <Link to="/login">LOGIN</Link></div>
		    <div id="holdit"></div>
	  	  </div>
  		  <Footer />
		</div>
    );
  }
}

export default Register;
