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
		  {question:"What's your email?", type: "emaill", pattern: /^(?=[A-Za-z0-9][A-Za-z0-9@._%+-]{5,253}$)[A-Za-z0-9._%+-]{1,64}@(?:(?=[A-Za-z0-9-]{1,63}\.)[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*\.){1,8}[A-Za-z]{2,5}$/},
	    ],
    	isVerified: false,
    	verificationResponse: '',
    	navigate: false,
    	responseFailed: false
    }
  }
  verifyUserFromUrl = () =>{
	fetch('/api/resetPassRes', {
		method: 'post',
		headers: {'Content-type': 'application/json'},
		body: JSON.stringify({
			id: this.props.match.params.IFID,
			hash: this.props.match.params.hash
		})
	})
	.then((response) => {
		if(response.status===200){
			this.setState({
				isVerified: true,
				verificationResponse: 'Verification Successful'
			})
			setTimeout(this.redirectToLogin, 2000);
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
  	setTimeout(this.verifyUserFromUrl,400);
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
