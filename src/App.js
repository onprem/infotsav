import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Lost from './Components/Lost/Lost';
import Nav from './Components/Nav/Nav';
import Events from './Components/Events/Events';
import Online_Events from './Components/Explore/Online/online_explore'
import Informal_Events from './Components/Explore/Informal/info_explore'
import Gamiacs_Events from './Components/Explore/Gamiacs/gamiacs_explore'
import Managerial_Events from './Components/Explore/Managerial/man_explore'
import Robotics_Events from './Components/Explore/Robotics/robo_explore'
import SUSP_Events from './Components/Explore/SUSP/susp_explore'
import Technical_Events from './Components/Explore/Technical/tech_explore'
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Team from './Components/Team/Team'
import Verify from './Components/Verify/Verify';
import Profile from './Components/Profile/Profile';
import About from './Components/About/About';
import logo from './assets/icon.png';
import './App.css';

const initialState = {
  userEventReg: [],
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
      userEventReg: [],
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
      this.setState({isLoggedIn: true});
    })
    .catch(console.log);
  }

  updateLoginState = (value) =>{
    this.setState({isLoggedIn: value});
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
         <Nav />
    		<Switch>
    			<Route path="/" exact component={Home} />
          <Route path="/events" exact component={Events} />
          <Route path="/team" exact component={Team} />
          <Route path="/about" exact component={About} />

          <Route path="/events/online_events" exact component={Online_Events} />
          <Route path="/events/info_events" exact component={Informal_Events} />
          <Route path="/events/gamiacs_events" exact component={Gamiacs_Events} />
          <Route path="/events/man_events" exact component={Managerial_Events} />
          <Route path="/events/robo_events" exact component={Robotics_Events} />
          <Route path="/events/susp_events" exact component={SUSP_Events} />
          <Route path="/events/tech_events" exact component={Technical_Events} />

          <Route path="/register" exact render={(props) =>
            <Register {...props} 
              isLoggedIn={this.state.isLoggedIn} />}
              updateLoginState={this.updateLoginState} 
          />
     			<Route path="/login" exact render={(props) =>
            <Login {...props} 
              updateUser={this.updateUser}
              isLoggedIn={this.state.isLoggedIn}
              logOut={this.logOut}
              updateLoginState={this.updateLoginState} 
              updateEvent={this.updateEvent} />}
          />
          <Route path="/profile" render={(props)=> 
            <Profile {...props} 
              userData={this.state.user} 
              isLoggedIn={this.state.isLoggedIn} 
              updateLoginState={this.updateLoginState} />} 
          />
          <Route path="/verify/id=:IFID/hash=:hash" exact component={Verify} />
          <Route component={Lost} />
    		</Switch>
      </div>
    );
  }
}

export default App;
