import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Footer} from '../Footer/Footer';
import '../../assets/css/solid.min.css'
import '../../assets/css/fontawesome.min.css'
import '../../assets/css/signup.css'
import headers from "../../assets/logo/headers.png"
import {Loader} from '../_Loader/Loader'
import './Profile.css'
import Event_Card from './Event_Card';

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
  	const lenEvt = this.props.eventData.length;
  	const EventList = ({ event }) => {
		const evtComponent = event.map((evt, i) => {
			return <Event_Card 
			key={i} 
			ename={event[i].ename} 
			category={event[i].category}
			fee={event[i].fee} 
			status={event[i].status} /> 
		});
		return (
			<div>
				{evtComponent}
			</div>
		);
	}
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
					    <div className="profile-headin">
					    	<h2 className='mv'>PROFILE</h2>
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
			  				<h3 className='mv3 urevt'>Your Events</h3>
			  				{(lenEvt)?
			  					<EventList event={this.props.eventData} />
			  				  :
			  				  	"You haven't registered in any events yet."
			  				}
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
