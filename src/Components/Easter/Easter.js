import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Footer} from '../Footer/Footer';
import '../../assets/css/solid.min.css'
import '../../assets/css/fontawesome.min.css'
import '../../assets/css/signup.css'
import headers from "../../assets/logo/headers.png"
import {Loader} from '../_Loader/Loader'
import './Easter.css'

class Easter extends Component {

  constructor(props){
    super(props);
    this.state={
    	loading: true,
	    redirect: false,
	    error: false,
	    errorMessage: '',
      	field: '',
      	userScore: 0,
      	leaderboard: []
	};
  }

  componentWillMount(){
  	if(!this.props.isLoggedIn){
		fetch('/api/checkToken')
		.then(response => {
			if(response.status!==200)
				throw(response);
		    this.setState({ loading: false });
		    this.props.updateLoginState(true);
			this.fetchScore();
		})
		.catch(() => {this.fetchScore(); this.setState({ loading: false, redirect: true });});
	} else{ 
		this.setState({loading: false});
		this.fetchScore();
	}
  }

  componentDidMount(){
  	console.log('%cOhMyHeavens!', 'background: #222; color: #bada55; font-size: 2rem');
  	console.log(`You did good coming here! Here is an easter code for ya!`)
  }
  componentDidUpdate(prevProps, prevState){
  	// console.log(this.props.userData.id, prevProps.userData.id);
  	// if(this.props.userData !== prevProps.userData)
  	// 	this.fetchScore();
  }

  onTypeChange = (event) => {
    this.setState({field:event.target.value.toLowerCase()})
  }

  _handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this._handleEasterRedeem();
    }
  }

  fetchScore = () => {
  	console.log('Hoo');
  	let error = false;
    fetch('/api/easterScore', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
      	ifid: this.props.userData.id,
      	isLoggedIn: this.props.isLoggedIn
      })
    })
    .then(response => {
      if(response.status!==200)
        error = true;
      return response.json();
    })
    .then((scores) => {
    	if(error)
    		throw(scores);
    	if(this.props.isLoggedIn){
    		if(scores.userScore[0].total === null)
    			this.fetchScore();
    		else {
    			this.setState({
	    			userScore: scores.userScore[0].total,
	    			leaderboard: scores.leaderboard
	    		});
    		}
    	}
    	else {
    		this.setState({leaderboard: scores});
    	}
    })
    .catch(err => {
    	this.setState({error: true, errorMessage: err});
    })
  }

  _handleEasterRedeem = () =>{
  	console.log('Hi', this.state.field);
  }

  render() {
  	const { loading } = this.state;
    return (
	   	<div className='register-container min-vh-100 w-100'>
   			<div>
				<Link to='/'><img src={headers} className="headim" alt="infotsav logo" /></Link>
		  	</div>
			<div className="white flex flex-column items-center">
			  	<div id="headdin" className="mt5">
					<h2>Easter Hunt</h2>
				</div>
			{(!loading)?
				(this.props.isLoggedIn)?
					<div className="white flex flex-column items-center">
						<input className="pa2 pt3 f3 br1 input-reset ba bg-white dib-ns db w-100" 
							type="text" 
							name="easter-code"  
							id="easter-code" 
							placeholder='Enter code to redeem' 
	                        onChange={this.onTypeChange} 
	                        onKeyPress={this._handleKeyPress}
  						/>
				      	<input className="b white ma2 ph3 pv2 input-reset ba b--white bg-transparent dim pointer f5 dib-ns db" 
					      	type="submit" 
					      	value="Redeem" 
					      	onClick={this._handleEasterRedeem}
				      	/>
					</div>
				:
					<div className='f3 white'>
						You must login to redeem
						<br />
						<Link to='/login'>
				      		<input className="b white ma2 ph3 pv2 input-reset ba b--white bg-transparent dim pointer f5 dib br4" type="submit" value="Login" />
						</Link>
					</div>
			:
				<Loader />
			}
			<div className="easter-content">
	  			<div className="eventTableDiv">
	  				<h3 className='mv3 urevt'>Table of Honor</h3>
	  				{//(lenEvt)?
	  					//<EventList event={this.props.eventData} />
	  				  //:
	  				  	"They who is't deserve honor art not yet hither!"
	  				}
	  			</div>
	  		</div>

			</div>
			<Footer />
		</div>
    );
  }

}

export default Easter;
