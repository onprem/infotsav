import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Lost from './Components/Lost/Lost';
import Nav from './Components/Nav/Nav';
import Offline from './Components/_Offline/Offline';
import Events from './Components/Events/Events';
import OnlineEvents from './Components/Explore/Online/online_explore'
import InformalEvents from './Components/Explore/Informal/info_explore'
import GamiacsEvents from './Components/Explore/Gamiacs/gamiacs_explore'
import ManagerialEvents from './Components/Explore/Managerial/man_explore'
import RoboticsEvents from './Components/Explore/Robotics/robo_explore'
import SuspEvents from './Components/Explore/SUSP/susp_explore'
import TechnicalEvents from './Components/Explore/Technical/tech_explore'
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Contact from './Components/Contact/Contact';
import Team from './Components/Team/Team'
import Verify from './Components/Verify/Verify';
import Profile from './Components/Profile/Profile';
import Admin from './Components/Admin/Admin';
import About from './Components/About/About';
import ForgotPass from './Components/ForgotPass/ForgotPass';
import HandleForgotPass from './Components/HandleForgotPass/HandleForgotPass';
import './App.css';

const initialState = {
  userEventReg: [],
  userTeams: [],
  user: {
    id: '',
    name: '',
    email: '',
    college: '',
    mobile: '',
  }
}

class App extends Component {
  constructor(){
    super();
    this.state={
      isLoggedIn: false,
      isAdmin: false,
      userEventReg: [],
      userTeams: [],
      user: {
        id: '',
        name: '',
        email: '',
        college: '',
        mobile: '',
      }
    }
  }

  componentDidMount(){
    this.requestData();
    // setTimeout(this.logOut, 3000);
  }

  requestData = () =>{
    let err=false;
    fetch('/api/profilex')
    .then(response => {
      if(response.status!==200)
        err=true;
      return response.json();
    })
    .then(res => {
      if(err)
        throw res;
      this.updateUser(res.user);
      this.updateEvent(res.userEventReg);
      this.updateEventTeams(res.userTeams);
      this.setState({isLoggedIn: true});
      if (res.user.ifid === 'ADMIN') {
        this.setState({isAdmin: true})
      }
    })
    .catch(console.log);
  }

  updateLoginState = (value) =>{
    this.setState({isLoggedIn: value});
  }
  updateAdminState = (value) =>{
    this.setState({isAdmin: value});
  }
  logOut = () =>{
    if(this.state.isLoggedIn){
      fetch('/api/logout')
      .then(res=>{
        if(res.redirected){
          this.setState(initialState);
          window.location.reload();
        }
        throw(res.error)
      })
      .catch(console.log)
    }
  }
  updateEvent = (data) =>{
    this.setState({userEventReg: data});
  }
  updateEventTeams = (data) =>{
    this.setState({userTeams: data});
  }

  updateUser = (user) =>{
    this.setState(Object.assign(this.state.user, {
      id: user.ifid,
      name: user.name,
      email: user.email,
      college: user.college,
      mobile: user.mobile
    }))
  }

  render() {
    return (
      <div className="App">
        <Offline />
        <Nav 
          logOut={this.logOut} 
          isLoggedIn={this.state.isLoggedIn} 
          userData={this.state.user} 
        />
    		<Switch>
    			<Route path="/" exact component={Home} />
          <Route path="/events" exact component={Events} />
          <Route path="/team" exact component={Team} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />

          <Route path="/events/online_events" exact render={(props) =>
            <OnlineEvents {...props}
              updateLoginState={this.updateLoginState} 
              isLoggedIn={this.state.isLoggedIn}
              updateEvent={this.updateEvent}
              userData={this.state.user}
              updateEventTeams={this.updateEventTeams} 
              eventTeams={this.state.userTeams}
              eventData={this.state.userEventReg}
            />}
          />
          <Route path="/events/onsite_events" exact render={(props) =>
            <InformalEvents {...props}
              updateLoginState={this.updateLoginState} 
              isLoggedIn={this.state.isLoggedIn}
              updateEvent={this.updateEvent}
              userData={this.state.user}
              updateEventTeams={this.updateEventTeams} 
              eventTeams={this.state.userTeams}
              eventData={this.state.userEventReg}
            />}
          />
          <Route path="/events/gamiacs_events" exact render={(props) =>
            <GamiacsEvents {...props}
              updateLoginState={this.updateLoginState} 
              isLoggedIn={this.state.isLoggedIn}
              updateEvent={this.updateEvent}
              userData={this.state.user}
              updateEventTeams={this.updateEventTeams} 
              eventTeams={this.state.userTeams}
              eventData={this.state.userEventReg}
            />}
          />
          <Route path="/events/man_events" exact render={(props) =>
            <ManagerialEvents {...props}
              updateLoginState={this.updateLoginState} 
              isLoggedIn={this.state.isLoggedIn}
              updateEvent={this.updateEvent}
              userData={this.state.user}
              updateEventTeams={this.updateEventTeams} 
              eventTeams={this.state.userTeams}
              eventData={this.state.userEventReg}
            />}
          />
          <Route path="/events/robo_events" exact render={(props) =>
            <RoboticsEvents {...props}
              updateLoginState={this.updateLoginState} 
              isLoggedIn={this.state.isLoggedIn}
              updateEvent={this.updateEvent}
              userData={this.state.user}
              updateEventTeams={this.updateEventTeams} 
              eventTeams={this.state.userTeams}
              eventData={this.state.userEventReg}
            />}
          />
          <Route path="/events/susp_events" exact render={(props) =>
            <SuspEvents {...props}
              updateLoginState={this.updateLoginState} 
              isLoggedIn={this.state.isLoggedIn}
              updateEvent={this.updateEvent}
              userData={this.state.user}
              updateEventTeams={this.updateEventTeams} 
              eventTeams={this.state.userTeams}
              eventData={this.state.userEventReg}
            />}
          />
          <Route path="/events/tech_events" exact render={(props) =>
            <TechnicalEvents {...props}
              updateLoginState={this.updateLoginState} 
              isLoggedIn={this.state.isLoggedIn}
              updateEvent={this.updateEvent}
              userData={this.state.user}
              updateEventTeams={this.updateEventTeams} 
              eventTeams={this.state.userTeams}
              eventData={this.state.userEventReg}
            />}
          />
          <Route path="/register" exact render={(props) =>
            <Register {...props} 
              isLoggedIn={this.state.isLoggedIn}
              updateLoginState={this.updateLoginState} 
            />} 
          />
     			<Route path="/login" exact render={(props) =>
            <Login {...props} 
              updateUser={this.updateUser}
              isLoggedIn={this.state.isLoggedIn}
              logOut={this.logOut}
              updateLoginState={this.updateLoginState} 
              updateEvent={this.updateEvent} 
              updateEventTeams={this.updateEventTeams} 
            />}
          />
          <Route path="/profile" render={(props)=> 
            <Profile {...props} 
              userData={this.state.user} 
              isLoggedIn={this.state.isLoggedIn} 
              updateLoginState={this.updateLoginState}
              eventData={this.state.userEventReg}
              eventTeams={this.state.userTeams}
              updateEvent={this.updateEvent} 
              updateEventTeams={this.updateEventTeams} 
            />} 
          />
          <Route path="/admin" render={(props)=> 
            <Admin {...props} 
              userData={this.state.user} 
              isLoggedIn={this.state.isLoggedIn} 
              isAdmin={this.state.isAdmin} 
              updateLoginState={this.updateLoginState}
              updateAdminState={this.updateAdminState}
              eventData={this.state.userEventReg}
              eventTeams={this.state.userTeams}
              updateEvent={this.updateEvent} 
              updateEventTeams={this.updateEventTeams} 
            />} 
          />
          <Route path="/verify/id=:IFID/hash=:hash" exact component={Verify} />
          <Route path='/resetPass' exact render={(props) =>
            <ForgotPass {...props}
              updateLoginState={this.updateLoginState} 
              isLoggedIn={this.state.isLoggedIn}
            />}
          />
          <Route path="/resetPass/id=:IFID/hash=:hash" exact render={(props) =>
            <HandleForgotPass {...props}
              logOut={this.logOut}
            />}
          />
          <Route component={Lost} />
    		</Switch>
      </div>
    );
  }
}

export default App;
