import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Lost from './Components/Lost/Lost';
import Nav from './Components/Nav/Nav';
import logo from './assets/icon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
    		<Switch>
    			<Route path="/" exact render={()=>
    		       <header className="App-header">
              			<img src={logo} className="App-logo" alt="logo" />
            		</header>
    			} />
       			<Route component={Lost} />
    		</Switch>
      </div>
    );
  }
}

export default App;
