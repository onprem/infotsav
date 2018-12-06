import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Footer} from '../Footer/Footer';
import '../../assets/css/solid.min.css'
import '../../assets/css/fontawesome.min.css'
import '../../assets/css/signup.css'
import headers from "../../assets/logo/headers.png"
import {Loader} from '../_Loader/Loader'

class Profile extends Component {

  constructor(props){
    super(props);
    this.state={
    	loading: true,
	    redirect: false,
	};
  }

  componentWillMount(){
  	if(!this.props.isLoggedIn){
		let err=false;
		fetch('/api/checkToken')
		.then(response => {
			if(response.status!==200)
				throw(response);
		    this.setState({ loading: false });
		    this.props.updateLoginState(true);
		})
		.catch(() => {this.setState({ loading: false, redirect: true });});
	} else this.setState({loading: false});
  }

  render() {
  	const { loading, redirect } = this.state;
    return (
	   	<div className='register-container'>
	   	  <div>
			<Link to='/'><img src={headers} className="headim" alt="infotsav logo" /></Link>
		  </div>
		  <div className="center">
		  {(!loading)?
		  		(redirect)?
		  			<Redirect to='/login' />
	  			:
				    <div id="headdin">
		  				<h1>Welcome {this.props.userData.email}</h1>
		  			</div>
  			:
  				<Loader />
  			}

		    <div id="holdit"></div>
	  	  </div>
  		  <Footer />
		</div>
    );
  }
}

export default Profile;
