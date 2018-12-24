import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Footer} from '../Footer/Footer';
import '../../assets/css/solid.min.css'
import '../../assets/css/fontawesome.min.css'
import '../../assets/css/signup.css'
import headers from "../../assets/logo/headers.png"
import {registerFunctions} from './ForgotFunctions'
import {Loader} from '../_Loader/Loader'

class ForgotPass extends Component {

  constructor(props){
    super(props);
    this.state={
	  	questions: [
		  {question:"What's your email?", type: "emaill", pattern: /^(?=[A-Za-z0-9][A-Za-z0-9@._%+-]{5,253}$)[A-Za-z0-9._%+-]{1,64}@(?:(?=[A-Za-z0-9-]{1,63}\.)[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*\.){1,8}[A-Za-z]{2,5}$/},
	    ],
    	username: '',
    	password: '',
    	gotUserData: false,
    	verification: 0,
    	gotError: false,
    	errorRes: "",
    	loading: true,
    	redirect: false
    }
  }
  componentWillMount(){
  	if(!this.props.isLoggedIn){
		fetch('/api/checkToken')
		.then(response => {
			if(response.status!==200)
				throw(response);
		    this.setState({ loading: false, redirect: true });
		    this.props.updateLoginState(true);
		})
		.catch((err) => {
			this.setState({ loading: false });
			registerFunctions(this);
		});
	} else this.setState({loading: false, redirect: true});
  }

  componentDidMount(){
  	// if(!this.props.isLoggedIn && !this.state.loading)
  	// 	registerFunctions(this);
  }

  requestLogin = () =>{
  	let error=false;
	fetch('/api/resetPassReq', {
		method: 'post',
		headers: {'Content-type': 'application/json'},
		body: JSON.stringify({
			email: this.state.username
		})
	})
	.then(response => {
		if(response.status!==200)
			error=true;
		return response.json()})
	.then((message) => {
		if(error)
			throw(message);
		console.log(message);
		this.setState({
			gotUserData: true,
			errorRes: message 
		})
	})
	.catch(err => this.setState({gotError: true, errorRes: err}));
  }

  render() {
  	const { loading } = this.state;
  	if(this.state.redirect){
  		return <Redirect to='/profile' />
  	}

  	if(this.state.username && !this.state.gotUserData){
  		this.requestLogin();
  	}

  	if(this.state.gotError){
  		setTimeout(()=>{
  			window.location.reload();
  		}, 1100);
  	}
    return (
  		
	   	<div className='register-container'>
	   	  <div>
			<Link to='/'><img src={headers} className="headim" alt="infotsav logo" /></Link>
		  </div>
   		  <div id="progress"></div>
		  <div className="center">
		  	<div id="headdin">
		  		<h1>Reset Password</h1>
		  	</div>
		  	{
	  		(loading)?
	  			<Loader />
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

export default ForgotPass;
