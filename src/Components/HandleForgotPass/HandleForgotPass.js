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
		  {question:"What's your password", type: "password", pattern: /^.{3,36}$/},
		  {question:"Once again please?", type: "password", confirm: 1, pattern: /^.{3,36}$/},
	    ],
    	isVerified: false,
    	verificationResponse: '',
    	navigate: false,
    	responseFailed: false,
    	password: '',
    	wrongPass: false,
    	formProgress: true
    }
  }
  verifyUserFromUrl = () =>{
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
				verificationResponse: 'Password change succesful!'
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

  redirectToLogin = () =>{
  	this.setState({navigate: true});
  }

  componentDidMount(){
  	// setTimeout(this.verifyUserFromUrl,400);
  	registerFunctions(this);
  }

  render() {
  		if(this.state.wrongPass){
  			setTimeout(()=> {
  				window.location.reload();
  			}, 1400);
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
		    <div id="register">
		      <i id="progressButton" className="fas fa-arrow-right next"></i>
		      <div id="inputContainer">
		        <input id="inputField" required autoFocus />
		        <label id="inputLabel"></label>
		        <div id="inputProgress"></div>
		      </div>
		    </div>
		  	{(this.state.isVerified)?
		  		<div>
				  	<div className='f3 white'>
				  		{this.state.verificationResponse}
				  	</div>
				    <div id="sendto">You're all set! <Link to="/login">LOGIN</Link></div>
			    </div>
			    :
			    (!this.state.responseFailed)?
			    	<Loader />
					:
					<div className='f3 white'>
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
