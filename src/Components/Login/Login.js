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
    	username: '',
    	password: '',
    	gotUserData: false,
    	verification: 0,
    	errorRes: ""    
    }
  }

  componentDidMount(){
  	registerFunctions(this);
  }

  requestLogin = () =>{
  	let error=false;
	fetch('/api/signin', {
		method: 'post',
		headers: {'Content-type': 'application/json'},
		body: JSON.stringify({
			username: this.state.username,
			password: this.state.password
		})
	})
	.then(response => {
		if(response.status!==200)
			error=true;
		return response.json()})
	.then((user) => {
		if(error)
			throw(user);
		this.setState({
			gotUserData: true, 
			verification: user.confirm
		})
	})
	.catch(err => this.setState({errorRes: err}));
  }

  render() {
  	if(this.state.username && this.state.password && !this.state.gotUserData){
  		this.requestLogin();
  	}

  	if(this.state.gotUserData && this.state.verification){
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
		  	{(this.state.gotUserData && !this.state.verification)?
				<div className='f3 white'>
					Please verify your email to continue.
				</div>
			:
				(this.state.errorRes)?
					<div className='f3 white'>
						{this.state.errorRes}
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
		    <div id="sendto">Don't have an account? <Link to="/register">REGISTER</Link></div>
		    <div id="holdit"></div>
	  	</div>
  			<Footer />
		</div>
    );
  }
}

export default Login;
