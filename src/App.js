import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Lost from './Components/Lost/Lost';
import Nav from './Components/Nav/Nav';
import Events from './Components/Events/Events';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Contact from './Components/Contact/Contact'
import Verify from './Components/Verify/Verify';
import Profile from './Components/Profile/Profile';
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
          <Route path="/contact" exact component={Contact} />
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
