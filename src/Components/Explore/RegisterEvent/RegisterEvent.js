import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class RegisterEvent extends Component {

  constructor(props){
    super(props);
    this.state={
      isUserRegistered: false,
      userTeamId: '',
      error: false,
      errorMessage: ''
    }
  }

  componentDidMount(){
    this.checkIsUserRegistered();
  }

  componentDidUpdate(prevProps, prevState){
    if(this.props.eventData !== prevProps.eventData){
      this.checkIsUserRegistered();
    }
  }

  checkIsUserRegistered = () => {
    this.setState({isUserRegistered: false, userTeamId: ''});
    this.props.eventData.forEach((entry, i) => {
      if(entry.eid === this.props.eventDetails.eid){
        this.setState({isUserRegistered: true, userTeamId: entry.teamid});
        return;
      }
    });
  }

  registerUserForEvent = (event) => {
    let body;
    if(this.props.isUserRegistered){
      body = {
        init: 0,
        ifid: event.target.value,
        eid: this.props.eventDetails.eid,
        teamid: this.state.userTeamId
      }
    }
    else {
      body = {
        init: 1,
        ifid: this.props.userData.id,
        eid: this.props.eventDetails.eid
      };
    }

    let error=false;
    fetch('/api/eventReg', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(body)
    })
    .then(response => {
      if(response.status!==200)
        error = true;
      return response.json();
    })
    .then(data => {
      if(error)
        throw(data);
      this.props.updateEvent(data.userEventReg);
      this.props.updateEventTeams(data.userTeams);
    })
    .catch(err => {
      this.setState({error: true, errorMessage: err});
    })
  }

  render() {
    console.log(this.props, this.state.isUserRegistered);

  	const {eventDetails, isLoggedIn} = this.props;
    if(isLoggedIn){
      return(
      <div className='white flex flex-column items-center ma4'>
        {(this.state.isUserRegistered)?
          <div className='f3'>Registration done</div>
          :
          <div className='f3'>Registration not done</div>
        }
      </div>
      );
    }

    else return(
      <div className='white flex flex-column items-center ma4'>
        <div className='f3'>Login to continue</div>
        <Link className="f5 link dim br3 ph3 pv2 ma2 dib black b buttonBackLogin" to="/login">Login</Link>
      </div>
    );
  }
}

export default RegisterEvent;
