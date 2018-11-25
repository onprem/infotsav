import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Lost from './Components/Lost/Lost';
import Nav from './Components/Nav/Nav';
import Events from './Components/Events/Events';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import logo from './assets/icon.png';
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
          <Route component={Lost} />
    		</Switch>
      </div>
    );
  }
}

export default App;
