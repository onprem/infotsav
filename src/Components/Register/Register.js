import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Footer} from '../Footer/Footer';
import '../../assets/css/solid.min.css'
import '../../assets/css/fontawesome.min.css'
import '../../assets/css/signup.css'
import headers from "../../assets/logo/headers.png"
import {registerFunctions} from './RegisterFunctions'
import {Loader} from '../_Loader/Loader'

class Register extends Component {

  constructor(){
    super();
    this.state={
	  	questions: [
		  {question:"What's your name?", pattern: /^(\w|\s){3,30}$/},
		  {question:"Gender", type: "sellect", pattern: /^(male|female|other)$/},
		  {question:"College Name?", pattern: /^(\w|\s){4,80}$/},
		  {question:"City?", pattern: /^(\w|\s){3,38}$/},
		  {question:"What's your email?",type: "emaill", pattern: /^(?=[A-Za-z0-9][A-Za-z0-9@._%+-]{5,253}$)[A-Za-z0-9._%+-]{1,64}@(?:(?=[A-Za-z0-9-]{1,63}\.)[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*\.){1,8}[A-Za-z]{2,5}$/},
		  {question:"What's your phone number?", type:'tel', pattern: /^[6-9]\d{9}$/},
		  {question:"Create your password", type: "password", pattern: /^.{3,36}$/},
	    ],
	    gotData: false,
	    responseMessage: '',
	    receivedError: false,
    	loading: true,
    	redirect: false
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

  componentWillMount(){
  	if(!this.props.isLoggedIn){
		let err=false;
		fetch('/api/checkToken')
		.then(response => {
			if(response.status!==200)
				throw(response);
		    this.setState({ loading: false, redirect: true });
		    this.props.updateLoginState(true);
		})
		.catch(() => {
			this.setState({ loading: false });
  			registerFunctions(this);
		});
	} else this.setState({loading: false, redirect: true});
  }

  componentDidMount(){
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
  	
  	const { loading, redirect } = this.state;
  	if(this.state.redirect){
  		return <Redirect to='/profile' />
  	}
  	if(this.state.questions[0].value && !this.state.responseMessage)
  		this.updateUserData();

  	if(this.state.receivedError){
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
	  		(loading)?
	  			<Loader />
  			:
			  	(this.state.responseMessage)?
			  		(this.state.receivedError)?
						<div className='f3 white'>
							{this.state.responseMessage}
						</div>
					:
						<div className='f3 white'>
							{this.state.responseMessage} <br />
							Verify your email to continue <br />
							Didn't get the verification email? Please check your spam folder.
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
