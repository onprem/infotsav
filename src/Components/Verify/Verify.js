import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Footer} from '../Footer/Footer';
import '../../assets/css/signup.css'
import './verify.css'
import headers from "../../assets/logo/headers.png"

class Login extends Component {

  constructor(props){
    super(props);
    this.state={
    	isVerified: true,
    	verificationResponse: '',
    	navigate: false
    }
  }
  verifyUserFromUrl = () =>{
	fetch('/api/verify', {
		method: 'post',
		headers: {'Content-type': 'application/json'},
		body: JSON.stringify({
			id: this.props.match.params.IFID,
			hash: this.props.match.params.hash
		})
	})
	.then(response => response.json())
	.then((message) => {
		this.setState({
			isVerified: true,
			verificationResponse: message
		})
		setTimeout(this.redirectToLogin, 1000);
	})
	.catch(console.log);
  }

  redirectToLogin = () =>{
  	console.log('Hello');
  	this.setState({navigate: true});
  }

  componentDidMount(){
  	this.verifyUserFromUrl();
  }

  render() {
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
		  		<h1>Verification</h1>
		  	</div>
		  	{(this.state.isVerified)?
		  		<div>
				  	<div className='f3 white'>
				  		{this.state.verificationResponse}
				  	</div>
				    <div id="sendto">You're all set! <Link to="/login">LOGIN</Link></div>
			    </div>
			    :
		      	<div className="spinner_on_verification">
					<svg className='ver_load_svg' viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
						<circle className="length" fill="none" strokeWidth="8" strokeLinecap="round" cx="33" cy="33" r="28"></circle>
					</svg>
					<svg className='ver_load_svg' viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
						<circle fill="none" strokeWidth="8" strokeLinecap="round" cx="33" cy="33" r="28"></circle>
					</svg>
					<svg className='ver_load_svg' viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
						<circle fill="none" strokeWidth="8" strokeLinecap="round" cx="33" cy="33" r="28"></circle>
					</svg>
					<svg className='ver_load_svg' viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
						<circle fill="none" strokeWidth="8" strokeLinecap="round" cx="33" cy="33" r="28"></circle>
					</svg>
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
