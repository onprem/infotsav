import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Footer} from '../Footer/Footer';
import '../../assets/css/signup.css'
import './contact.css'
import headers from "../../assets/logo/headers.png"
import {contactFunctions} from './ContactFunctions'
import {Loader} from '../_Loader/Loader'

class QuickRegister extends Component {

  constructor(props){
    super(props);
    this.state={
	  	questions: [
		  {question:"What's your name?", pattern: /^(\w|\s){3,30}$/},
		  {question:"Email?",type: "emaill", pattern: /^(?=[A-Za-z0-9][A-Za-z0-9@._%+-]{5,253}$)[A-Za-z0-9._%+-]{1,64}@(?:(?=[A-Za-z0-9-]{1,63}\.)[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*\.){1,8}[A-Za-z]{2,5}$/},
		  {question:"College?", pattern: /^[\w\s.,()&+-]{4,80}$/},
		  {question:"Phone number?", type:'tel', pattern: /^[6-9]\d{9}$/},
		  {question:"Event", type: "sellect"}
	    ],
	    gotData: false,
	    responseMessage: '',
	    receivedError: false,
    	loading: false
    }
    this.contactData= {
    		name: '',
    		email: '',
    		phone: '',
    		college: '',
    		event: ''
    	}
  }

  componentWillMount(){
  }

  componentDidMount(){
  	contactFunctions(this);
  }
  
  requestLogin = (user, pass) =>{
  	let error=false;
	fetch('/api/signin', {
		method: 'post',
		headers: {'Content-type': 'application/json'},
		body: JSON.stringify({
			username: user,
			password: pass
		})
	})
	.then(response => {
		if(response.status!==200)
			error=true;
		return response.json()})
	.then((user) => {
		if(error)
			throw(user);
		this.updateAllData(user);
		this.setState({
			gotUserData: true, 
			verification: user.user.confirm
		})
	})
	.catch(err => this.setState({errorRes: err}));
  }

  requestContact = (contactData) =>{
  	let err = false;
	fetch('/api/QuickRegister', {
		method: 'post',
		headers: {'Content-type': 'application/json'},
		body: JSON.stringify({contactData})
	})
	.then(response => {
		if(response.status !== 200)
			err = true;
		return response.json()
	})
	.then((user) => {
		if(err)
			throw(user);
		this.requestLogin(user.email, user.ifid);
		// this.setState({responseMessage: user});
	})
	.catch(err => {this.setState({receivedError: true, responseMessage: err})});
  }

  updateAllData = (user) => {
	this.props.updateLoginState(true);
	this.props.updateUser(user.user);
	this.props.updateEvent(user.userEventReg);
	this.props.updateEventTeams(user.userTeams);
    this.props.updateUserScore(user.userScore);
  }

  updateContactData = () =>{
  	this.contactData = {
		name: this.state.questions[0].value,
		email: this.state.questions[1].value,
		college: this.state.questions[2].value,
		phone: this.state.questions[3].value,
		event: this.state.questions[4].value
  	};
  	if(this.state.gotData && !this.state.responseMessage){
  		this.requestContact(this.contactData);
  	}
  }

  render() {
  	
  	const { loading } = this.state;
  	if(this.state.questions[0].value && !this.state.responseMessage)
  		this.updateContactData();

  	if(this.state.receivedError){
  		setTimeout(()=>{
  			window.location.reload();
  		}, 1200);
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
							We will reach to you as soon as possible.
						</div>
				:
				    <div id="contact">
				      <div className="inputContainer">
				        <input type="text" name="name" className="inputField" required />
				        <label className="inputLabel"></label>
				      </div>
				      <div className="inputContainer">
				        <input type="text" name="email" className="inputField" required />
				        <label className="inputLabel"></label>
				      </div>
				      <div className="inputContainer">
				        <input type="text" name="phone" className="inputField" required />
				        <label className="inputLabel"></label>
				      </div>
				      <div className="inputContainer">
				        <input type="text" name="subject" className="inputField" required />
				        <label className="inputLabel"></label>
				      </div>
				      <div className="">
						<select id='selectbox' defaultValue="500" className='inputContainer selectQuickReg'  name="event">
						  <option value="500" disabled required>Select an event?</option>
						  <option value="8">Aptitude Quiz</option>
						  <option value="10">BIT Quiz</option>
						  <option value="16">Code Rush</option>
						  <option value="15">Code Shuffle</option>
						  <option value="22">Corporate Crisis</option>
						  <option value="26">FIFA</option>
						  <option value="18">Innovate The Good</option>
						  <option value="20">Jobs</option>
						  <option value="9">MARVELlous CINEphilia</option>
						  <option value="28">PUBG</option>
						  <option value="11">Programming Quiz</option>
						  <option value="25">Sameeksha</option>
						  <option value="17">School Olympiad</option>
						  <option value="12">Treasure Hunt</option>
						</select>
				      </div>
				      <div className="buttonContainer dim pointer">
				        <button id="submitButton" className="pointer">Submit</button>
				      </div>
				    </div>

			}
		    <div id="holditc"></div>
	  	  </div>
  		  <Footer />
		</div>
    );
  }
}

export default QuickRegister;