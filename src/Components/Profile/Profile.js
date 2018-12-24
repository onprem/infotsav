import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Footer} from '../Footer/Footer';
import '../../assets/css/solid.min.css'
import '../../assets/css/fontawesome.min.css'
import '../../assets/css/signup.css'
import headers from "../../assets/logo/headers.png"
import {Loader} from '../_Loader/Loader'
import './Profile.css'
import EventCard from './Event_Card';

class Profile extends Component {

  constructor(props){
    super(props);
    this.state={
    	loading: true,
	    redirect: false,
	    error: false,
	    errorMessage: '',
	    paymentActive: false,
        payload: {
            MID: '',
            ORDER_ID: '',
            CUST_ID: '',
            CALLBACK_URL: '',
            CHANNEL_ID: '',
            TXN_AMOUNT: '',
            WEBSITE: '',
            INDUSTRY_TYPE_ID: '',
            CHECKSUMHASH: ''
        }
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
		})
		.catch(() => {this.setState({ loading: false, redirect: true });});
	} else this.setState({loading: false});
  }

  deregEvent = (eid) => {
  	let error=false;
    fetch('/api/eventRegCancel', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
      	ifid: this.props.userData.id,
      	eid: eid
      })
    })
    .then(response => {
      if(response.status!==200)
        error = true;
      return response.json();
    })
    .then(data => {
      if(error)
        throw(data);
      console.log(data);
      this.props.updateEvent(data.userEventReg);
      this.props.updateEventTeams(data.userTeams);
    })
    .catch(err => {
      console.log(err);
      this.setState({error: true, errorMessage: err});
    })
  }

  payEvent = (eid, fee, teamid) => {
  	this.setState({loading: true, paymentActive: true});
  	let error=false;
  	console.log('fetching payload.....');
  	console.log(this.props.userData.id+' '+eid+' '+fee+' '+teamid);
    fetch('/api/eventPayment', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
      	ifid: this.props.userData.id,
      	eid: eid.toString(),
      	fee: fee,
      	teamid: teamid
      })
    })
    .then(response => {
      if(response.status!==200)
        error = true;
      return response.json();
    })
    .then(data => {
      if(error)
        throw(data);
      console.log(data);
      this.setState(Object.assign(this.state.payload, {
	      	MID: data.MID,
	        ORDER_ID: data.ORDER_ID,
	        CUST_ID: data.CUST_ID,
	        CALLBACK_URL: data.CALLBACK_URL,
	        CHANNEL_ID: data.CHANNEL_ID,
	        TXN_AMOUNT: data.TXN_AMOUNT,
	        WEBSITE: data.WEBSITE,
	        INDUSTRY_TYPE_ID: data.INDUSTRY_TYPE_ID,
	        CHECKSUMHASH: data.CHECKSUMHASH
	    }))
      this.setState({loading: false});
      //todo: request paytm with this data
    })
    .catch(err => {
      console.log(err);
      this.setState({error: true, errorMessage: err});
    })
  }
  
  render() {
  	const { loading, redirect, paymentActive } = this.state;
  	const lenEvt = this.props.eventData.length;
  	const EventList = ({ event }) => {
		const evtComponent = event.map((evt, i) => {
			return <EventCard 
			key={i} 
			ename={event[i].ename}
			eid = {event[i].eid}
			category={event[i].category}
			fee={event[i].fee} 
			status={event[i].status} 
			teamid={event[i].teamid} 
		 	deregEvent={this.deregEvent} 
		 	payEvent={this.payEvent}
	 		/> 
		});
		return (
			<div>
				{evtComponent}
			</div>
		);
	}
	if (paymentActive) {
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
		  				<div className="pay-content">
						    <div className="profile-headin">
						    	<h2 className='mv'>PLEASE DO NOT REFRESH THIS PAGE</h2>
				  			</div>
				  			<form action="https://securegw.paytm.in/theia/processTransaction" method="post" name="payForm">
				  				<input type='hidden' name='MID' value={this.state.payload.MID} />
				  				<input type='hidden' name='CUST_ID' value={this.state.payload.CUST_ID} />
				  				<input type='hidden' name='CALLBACK_URL' value={this.state.payload.CALLBACK_URL} />
				  				<input type='hidden' name='TXN_AMOUNT' value={this.state.payload.TXN_AMOUNT} />
				  				<input type='hidden' name='ORDER_ID' value={this.state.payload.ORDER_ID} />
				  				<input type='hidden' name='CHANNEL_ID' value={this.state.payload.CHANNEL_ID} />
				  				<input type='hidden' name='CHECKSUMHASH' value={this.state.payload.CHECKSUMHASH} />
				  				<input type='hidden' name='INDUSTRY_TYPE_ID' value={this.state.payload.INDUSTRY_TYPE_ID} />
				  				<input type='hidden' name='WEBSITE' value={this.state.payload.WEBSITE} />
				  				<input type='submit' value='Click to Proceed' />
				  			</form>
				  		</div>
	  			:
	  				<div className='pay-content'>
		  				<div className='profile-headin'>
		  					<h2 className='mv'>PLEASE DO NOT REFRESH THIS PAGE</h2>
		  				</div>
		  				<Loader />
	  				</div>
	  			}

			    
		  	  </div>
	  		  <Footer />
			</div>
			</div>
		);
	} else {
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
}

export default Profile;
