import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import TeamCard from './TeamCard';

class RegisterEvent extends Component {

  constructor(props){
    super(props);
    this.state={
      isUserRegistered: false,
      userTeamId: '',
      userTeamMembers: [],
      isTeamEvent: false,
      error: false,
      errorMessage: '',
      field: ''
    }
  }
  componentWillMount(){
    if(!this.props.isLoggedIn){
      let err=false;
      fetch('/api/checkToken')
      .then(response => {
        if(response.status!==200)
          throw(response);
        this.props.updateLoginState(true);
      })
      .catch(console.log);
    }
  }

  componentDidMount(){
    this.checkIsUserRegistered();
    if(this.props.eventDetails.maxMembers>1){
      this.setState({isTeamEvent: true})
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(this.props.eventData !== prevProps.eventData){
      this.checkIsUserRegistered();
    }
    else if(this.props.eventTeams !== prevProps.eventTeams || this.state.userTeamId !== prevState.userTeamId){
      if(this.state.isTeamEvent)
        this.checkIfTeamExists();
    }
  }
  onTypeChange = (event) => {
    console.log(event);
    this.setState({field:event.target.value.toUpperCase()})
    // console.log(searchedRobots);
  }

  _handleKeyPress = (event) => {
    console.log(event);
    if(event.key === 'Enter'){
      this._handleEventEntry();
    }
  }
  _handleEventEntry = () => {
    if(this.state.field.length !== 9){
      this.setState({error: true, errorMessage: 'Enter a valid IFID'});
    }
    else {
      this.registerUserForEvent(this.state.field);
    }
  }
  
  checkIsUserRegistered = () => {
    this.setState({isUserRegistered: false, userTeamId: ''});
    this.props.eventData.forEach((entry, i) => {
      if(entry.eid === this.props.eventDetails.eid){
        this.setState({isUserRegistered: true, userTeamId: entry.teamid});
        if(this.state.isTeamEvent)
          this.checkIfTeamExists();
        return;
      }
    });
  }

  checkIfTeamExists = () => {
    this.setState({userTeamMembers: []});
    this.props.eventTeams.forEach((team, i) => {
      if(team.teamid === this.state.userTeamId && team.ifid !== this.props.userData.id){
        this.setState(prevState => ({userTeamMembers: [...prevState.userTeamMembers, team]}));
      }
    })
  }

  registerUserForEvent = (field) => {
    let body;
    if(this.props.isUserRegistered){
      body = {
        init: 0,
        ifid: field,
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
      this.setState({error: false, errorMessage: ''});
    })
    .catch(err => {
      console.log(err);
      this.setState({error: true, errorMessage: err});
    })
  }

  deregEvent = (Tifid) => {
    let error=false;
    fetch('/api/eventRegCancel', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        ifid: Tifid,
        eid: this.props.eventDetails.eid
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
      this.props.updateEvent(data.userEventReg);
      this.props.updateEventTeams(data.userTeams);
      this.setState({error: false, errorMessage: ''});
    })
    .catch(err => {
      console.log(err);
      this.setState({error: true, errorMessage: err});
    })
  }

  render() {
    console.log(this.state.field);
    const {eventDetails, isLoggedIn, userData} = this.props;

    const TeamList = ({team}) => {
      const teamComponent = team.map((member, i) =>
          <TeamCard 
            key={i}
            serial={parseInt(i)+2}
            mid={member.ifid}
            mname={member.name}
            deregEvent={this.deregEvent}
          />
      );
      return (
        <div className='white flex flex-column items-center w-100 mh4-ns mh1'>
          <table className="f4 w-100" cellSpacing="0">
            <thead>
              <tr>
                <th className="fw6-ns fw8 bb b--white-20 tl pb3 pr3">Index</th>
                <th className="fw6-ns fw8 bb b--white-20 tl pb3 pr3">Name</th>
                <th className="fw6-ns fw8 bb b--white-20 tl pb3 pr3">IF-ID</th>
                <th className="fw6-ns fw8 bb b--white-20 tl pb3 pr3">Remove</th>
              </tr>
            </thead>
            <tbody className="lh-copy">
              <tr className='hover-bg-black-10'>
                <td className="pv3 pl2 pr2 bb b--white-20">1.</td>
                <td className="pv3 pr3 bb b--white-20">{userData.name}</td>
                <td className="pv3 pr3 bb b--white-20">{userData.id}</td>
                <td className="pv3 pr3 bb b--white-20">
                  <a className='pointer dim' onClick={() => this.deregEvent(this.props.userData.id)}><span>Remove</span></a>
                </td>
              </tr>
              {teamComponent}
            </tbody>
          </table>
        </div>
      );
    }
    if(isLoggedIn){
      return(
        <div>
          <div className='white '>
            {(this.state.isUserRegistered)?
              <div className=''>
                <div className='f3 b underline ma4-ns ma1'>Registrations</div>
                <TeamList team={this.state.userTeamMembers} />
                {((this.state.userTeamMembers.length+1)<eventDetails.maxMembers)?
                    <div className='flex flex-row items-center flex-wrap ma4-ns ma1'>
                      <input className="idTextField pa2 f4 input-reset ba bg-white b br4 w5" 
                        onChange={this.onTypeChange} 
                        onKeyPress={this._handleKeyPress}
                        placeholder='Enter IFID to register' type="text" name="userId" />
                      <a className="f5 link dim br4 ph3 pv2 ma2 black b buttonBackLogin" onClick={this._handleEventEntry} >Register</a>
                    </div>
                    :
                    <div />
                }
              </div>
              :
              <div className='flex flex-column items-center'>
                <div className='f3 mid'>Register now!</div>
                <a className="f5 link dim br3 ph3 pv2 ma2 black b buttonBackLogin" onClick={this.registerUserForEvent} >Register</a>
              </div>
            }
          </div>
          <div className='white flex flex-column mt4 mh2-ns mh0'>
            <div className='f5'>* Max members in a team - {eventDetails.maxMembers}</div>
          </div>
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
