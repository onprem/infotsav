import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Footer} from '../Footer/Footer';
import '../../assets/css/signup.css'
import headers from "../../assets/logo/headers.png"
import {Loader} from '../_Loader/Loader'
import {registerFunctions} from './HandleForgotFunctions'

class Login extends Component {

  constructor(props){
    super(props);
    this.state={
	  	questions: [
		  {question:"New password?", type: "password", pattern: /^.{3,36}$/},
		  {question:"Once again please?", type: "password", confirm: 1, pattern: /^.{3,36}$/},
	    ],
    	isVerified: false,
    	verificationResponse: '',
    	navigate: false,
    	responseFailed: false,
    	password: '',
    	wrongPass: false,
    	formProgress: true,
    	requestSent: false,
    	initialCheck: false
    }
  }
  verifyUserFromUrl = () =>{
  	if(!this.state.requestSent){
  		this.setState({requestSent: true});
		fetch('/api/resetPassRes', {
			method: 'post',
			headers: {'Content-type': 'application/json'},
			body: JSON.stringify({
				id: this.props.match.params.IFID,
				hash: this.props.match.params.hash,
				password: this.state.password
			})
		})
		.then((response) => {
			if(response.status===200){
				this.setState({
					isVerified: true,
					verificationResponse: 'Password changed succesfully!'
				})
				setTimeout(this.redirectToLogin, 1300);
			}
			else if(response.redirected){
				this.props.history.push('/404')
			}
			else{
				this.setState({
					isVerified: false,
					responseFailed: true,
					verificationResponse: 'Some error occurred :('
				})
			}
		})
		.catch(console.log);
	}
  }

  redirectToLogin = () =>{
  	this.setState({navigate: true});
	this.props.logOut();
  }
  componentWillMount(){
	fetch('/api/resetPassInit', {
		method: 'post',
		headers: {'Content-type': 'application/json'},
		body: JSON.stringify({
			id: this.props.match.params.IFID,
			hash: this.props.match.params.hash,
		})
	})
	.then((response) => {
		if(response.redirected){
			this.props.history.replace('/404')
		}
	})
	.catch(console.log);
  }

  componentDidMount(){
  	// setTimeout(this.verifyUserFromUrl,400);
  	registerFunctions(this);
  }

  render() {
  		if(this.state.wrongPass){
  			setTimeout(()=> {
  				console.log(this.state);
  				window.location.reload();
  			}, 1400);
  		}

  		if(!this.state.wrongPass && !this.state.formProgress && this.state.password){
  			this.verifyUserFromUrl();
  		}

  		if(this.state.navigate){
  			return <Redirect to="/login" />;
  		}

    return (
	   	<div className='register-container'>
	   	  <div>
			<img src={headers} className="headim" alt="infotsav logo" />
		  </div>
   		  <div id="progress"></div>
		  <div className="center">
		  	<div id="headdin">
		  		<h1>Reset Password</h1>
		  	</div>
		  	{(this.state.formProgress)?
			    <div id="register">
			      <i id="progressButton" className="fas fa-arrow-right next"></i>
			      <div id="inputContainer">
			        <input id="inputField" required autoFocus />
			        <label id="inputLabel"></label>
			        <div id="inputProgress"></div>
			      </div>
			    </div>
		    :
		    	(this.state.wrongPass)?
		    		<div className='f3 white z-0'>
		    			Passwords don't match. Try again!
	    			</div>
    			:
				  	(this.state.isVerified)?
				  		<div className='z-0'>
						  	<div className='f3 white'>
						  		{this.state.verificationResponse}
						  	</div>
						    <div id="sendto">You're all set! <Link to="/login">LOGIN</Link></div>
					    </div>
			    	:
					    (!this.state.responseFailed)?
					    	<Loader />
						:
							<div className='f3 white z-0'>
								{this.state.verificationResponse}
							</div>
			}
		    <div id="holdit"></div>
	  	</div>
  			<Footer />
		</div>
    );
  }
}

export default Login;
