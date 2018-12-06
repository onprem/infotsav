import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Lost from './Components/Lost/Lost';
import Nav from './Components/Nav/Nav';
import Events from './Components/Events/Events';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Verify from './Components/Verify/Verify';
import Profile from './Components/Profile/Profile';
import logo from './assets/icon.png';
import withAuth from './Components/WithAuth/withAuth';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Nav />
    		<Switch>
    			<Route path="/" exact component={Home} />
          <Route path="/events" exact component={Events} />
          <Route path="/register" exact component={Register} />
     			<Route path="/login" exact component={Login} />
          <Route path="/profile" component={withAuth(Profile)} />
          <Route path="/verify/id=:IFID/hash=:hash" exact component={Verify} />
          <Route component={Lost} />
    		</Switch>
      </div>
    );
  }
}

export default App;
