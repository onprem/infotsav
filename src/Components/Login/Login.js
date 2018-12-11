import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Footer} from '../Footer/Footer';
import '../../assets/css/solid.min.css'
import '../../assets/css/fontawesome.min.css'
import '../../assets/css/signup.css'
import headers from "../../assets/logo/headers.png"
import {registerFunctions} from './LoginFunctions'
import {Loader} from '../_Loader/Loader'

class Login extends Component {

  constructor(props){
    super(props);
    this.state={
	  	questions: [
		  {question:"What's your email?", type: "emaill", pattern: /^(?=[A-Za-z0-9][A-Za-z0-9@._%+-]{5,253}$)[A-Za-z0-9._%+-]{1,64}@(?:(?=[A-Za-z0-9-]{1,63}\.)[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*\.){1,8}[A-Za-z]{2,5}$/},
		  {question:"What's your password", type: "password", pattern: /^.{3,36}$/},
	    ],
    	username: '',
    	password: '',
    	gotUserData: false,
    	verification: 0,
    	errorRes: "",
    	loading: true,
    	redirect: false
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
  	// if(!this.props.isLoggedIn && !this.state.loading)
  	// 	registerFunctions(this);
  }
  componentDidUpdate(prevProps, prevState){
  	// if(!this.state.loading && !this.props.isLoggedIn)
  	// 	registerFunctions(this);
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
		this.props.updateLoginState(true);
		this.props.updateEvent(user.userEventReg);
		this.props.updateUser(user.user);
		this.setState({
			gotUserData: true, 
			verification: user.user.confirm
		})
	})
	.catch(err => this.setState({errorRes: err}));
  }

  render() {
  	const { loading, redirect } = this.state;
  	if(this.state.redirect){
  		return <Redirect to='/profile' />
  	}

  	if(this.state.username && this.state.password && !this.state.gotUserData){
  		this.requestLogin();
  	}

  	if(this.state.gotUserData && this.state.verification){
  		return <Redirect to='/profile' />
  	}
  	if(this.state.errorRes){
  		setTimeout(()=>{
  			window.location.reload();
  		}, 1000);
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
		  	{
	  		(loading)?
	  			<Loader />
  			:
		  		(this.state.gotUserData && !this.state.verification)?
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
