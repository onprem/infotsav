import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Footer} from '../Footer/Footer';
import '../../assets/css/solid.min.css'
import '../../assets/css/fontawesome.min.css'
import '../../assets/css/signup.css'
import headers from "../../assets/logo/headers.png"
import {Loader} from '../_Loader/Loader'
import './Profile.css'

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
    	<div className='Profile'>
	   	<div className='register-container'>
	   	  <div>
			<Link to='/'><img src={headers} className="headim" alt="infotsav logo" /></Link>
		  </div>
		  <div className="center">
		  {(!loading)?
		  		(redirect)?
		  			<Redirect to='/login' />
	  			:
	  				<div className="profile-content">
					    <div class="profile-headin">
			  				<h3 className='mv3 wellc'>Welcome {this.props.userData.name},</h3>
			  				<div className='profileDetails'>
			  					<div className="detailsCard">
			  						<div className="detailsD"><b>IFID:</b> {this.props.userData.id}</div>
			  						<div className="detailsD"><b>Email:</b> {this.props.userData.email}</div>
			  					</div>
			  					<div className="detailsCard">
			  						<div className="detailsD"><b>Mobile:</b> {this.props.userData.mobile}</div>
			  						<div className="detailsD"><b>College:</b> {this.props.userData.college}</div>
			  					</div>
			  				</div>
			  			</div>
			  			<div className="eventTableDiv">
			  				<h3 className='mv3 wellc'>Your Events</h3>
			  				Event registration opening soon!
			  			</div>
			  		</div>
  			:
  				<Loader />
  			}

		    
	  	  </div>
  		  <Footer />
		</div>
		</div>
    );
  }
}

export default Profile;
