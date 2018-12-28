import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Footer} from '../Footer/Footer';
import '../../assets/css/signup.css'
import './contact.css'
import headers from "../../assets/logo/headers.png"
import {contactFunctions} from './ContactFunctions'
import {Loader} from '../_Loader/Loader'

class Contact extends Component {

  constructor(){
    super();
    this.state={
	  	questions: [
		  {question:"What's your name?", pattern: /^(\w|\s){3,30}$/},
		  {question:"What's your email?",type: "emaill", pattern: /^(?=[A-Za-z0-9][A-Za-z0-9@._%+-]{5,253}$)[A-Za-z0-9._%+-]{1,64}@(?:(?=[A-Za-z0-9-]{1,63}\.)[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*\.){1,8}[A-Za-z]{2,5}$/},
		  {question:"What's your phone number?", type:'tel', pattern: /^[6-9]\d{9}$/},
		  {question:"Subject", pattern: /^.{2,100}$/},
		  {question:"Message", pattern: /^[^*`~<>]{10,1500}$/}
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
    		subject: '',
    		message: ''
    	}
  }

  componentWillMount(){
  }

  componentDidMount(){
  	contactFunctions(this);
  }

  requestContact = (contactData) =>{
  	let err = false;
	fetch('/api/contact', {
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
		this.setState({responseMessage: user});
	})
	.catch(err => {this.setState({receivedError: true, responseMessage: err})});
  }

  updateContactData = () =>{
  	this.contactData = {
		name: this.state.questions[0].value,
		email: this.state.questions[1].value,
		phone: this.state.questions[2].value,
		subject: this.state.questions[3].value,
		message: this.state.questions[4].value
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

    return (
	   	<div className='register-container'>
	   	  <div>
			<Link to='/'><img src={headers} className="headim" alt="infotsav logo" /></Link>
		  </div>
   		  <div id="progress"></div>
		  <div className="center">
		    <div id="headdin">
		  		<h1>Contact Us</h1>
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
				      <div className="inputContainer">
				        <textarea name="message" className="inputField" rows="4" cols="40"></textarea>
				        <label className="inputLabel"></label>
				      </div>
				      <div className="buttonContainer">
				        <button id="submitButton">Submit</button>
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

export default Contact;