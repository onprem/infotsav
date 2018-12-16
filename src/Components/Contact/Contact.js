import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Footer} from '../Footer/Footer';
import '../../assets/css/solid.min.css'
import '../../assets/css/fontawesome.min.css'
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
    	loading: false,
    	redirect: false
    }
    this.contactData= {
    		name: '',
    		email: '',
    		mobile: '',
    		subject: '',
    		message: ''
    	}
  }

  componentWillMount(){
 //  	if(!this.props.isLoggedIn){
	// 	let err=false;
	// 	fetch('/api/checkToken')
	// 	.then(response => {
	// 		if(response.status!==200)
	// 			throw(response);
	// 	    this.setState({ loading: false, redirect: true });
	// 	    this.props.updateLoginState(true);
	// 	})
	// 	.catch(() => {
	// 		this.setState({ loading: false });
 //  			registerFunctions(this);
	// 	});
	// } else this.setState({loading: false, redirect: true});

  }

  componentDidMount(){
  	contactFunctions(this);
  }

  requestContact = (contactData) =>{
  	let err = false;
  	console.log(contactData);
  	this.setState({responseMessage: "Haha Gotem"});
	// fetch('/api/contact', {
	// 	method: 'post',
	// 	headers: {'Content-type': 'application/json'},
	// 	body: JSON.stringify({contactData})
	// })
	// .then(response => {
	// 	if(response.status !== 200)
	// 		err = true;
	// 	return response.json()
	// })
	// .then((user) => {
	// 	if(err)
	// 		throw(user);
	// 	this.setState({responseMessage: user});
	// })
	// .catch(err => {this.setState({receivedError: true, responseMessage: err})});
  }

  updateContactData = () =>{
  	this.contactData = {
		name: this.state.questions[0].value,
		email: this.state.questions[1].value,
		mobile: this.state.questions[2].value,
		subject: this.state.questions[3].value,
		message: this.state.questions[4].value
  	};
  	if(this.state.gotData && !this.state.responseMessage){
  		this.requestContact(this.contactData);
  	}
  }

  render() {
  	
  	const { loading, redirect } = this.state;
  	if(this.state.questions[0].value && !this.state.responseMessage)
  		this.updateContactData();

  	if(this.state.receivedError){
  		// setTimeout(()=>{
  		// 	window.location.reload();
  		// }, 1200);
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
							Your message has been submitted.<br />
							We will reach to you as soon as possible.
						</div>
				:
				    <div id="contact">
				      <div className="inputContainer">
				        <input className="inputField" required autoFocus />
				        <label className="inputLabel"></label>
				      </div>
				      <div className="inputContainer">
				        <input className="inputField" required />
				        <label className="inputLabel"></label>
				      </div>
				      <div className="inputContainer">
				        <input className="inputField" required />
				        <label className="inputLabel"></label>
				      </div>
				      <div className="inputContainer">
				        <input className="inputField" required />
				        <label className="inputLabel"></label>
				      </div>
				      <div className="inputContainer">
				        <textarea className="inputField" rows="4" cols="40"></textarea>
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