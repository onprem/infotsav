import React, { Component, Suspense, lazy }from 'react';
import {Route,Switch} from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Offline from './Components/_Offline/Offline';
import NoPayment from './Components/_NoPayment/NoPayment';
import Home from './Components/Home/Home';
import Events from './Components/Events/Events';
import Sponsors from './Components/Sponsors/sponsors'
import {Loader} from './Components/_Loader/Loader'
import Login from './Components/Login/Login'
import Profile from './Components/Profile/Profile'
import './App.css';

// const Cultural = lazy(() => import('./Components/Cultural/Cultural'));
const Lost = lazy(() => import('./Components/Lost/Lost'));
const Easter = lazy(() => import('./Components/Easter/Easter'));
const OnlineEvents = lazy(() => import('./Components/Explore/Online/online_explore'));
const InformalEvents = lazy(() => import('./Components/Explore/Informal/info_explore'));
const GamiacsEvents = lazy(() => import('./Components/Explore/Gamiacs/gamiacs_explore'));
const ManagerialEvents = lazy(() => import('./Components/Explore/Managerial/man_explore'));
const RoboticsEvents = lazy(() => import('./Components/Explore/Robotics/robo_explore'));
const CampusAmbassador = lazy(() => import('./Components/CampusAmbassador/CA'));
const SuspEvents = lazy(() => import('./Components/Explore/SUSP/susp_explore'));
const TechnicalEvents = lazy(() => import('./Components/Explore/Technical/tech_explore'));
const Register = lazy(() =>  import('./Components/Register/Register'));
const QuickRegister = lazy(() =>  import('./Components/QuickRegister/QuickRegister'));
const Contact = lazy(() =>  import('./Components/Contact/Contact'));
const Team = lazy(() =>  import('./Components/Team/Team'));
const Verify = lazy(() =>  import('./Components/Verify/Verify'));
const Admin = lazy(() =>  import('./Components/Admin/Admin'));
const About = lazy(() =>  import('./Components/About/About'));
const ForgotPass = lazy(() =>  import('./Components/ForgotPass/ForgotPass'));
const HandleForgotPass = lazy(() =>  import('./Components/HandleForgotPass/HandleForgotPass'));

const initialState = {
  userEventReg: [],
  userTeams: [],
  user: {
    id: '',
    name: '',
    email: '',
    college: '',
    mobile: '',
  },
  userScore: 0
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
      },
      userScore: 0
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
      this.updateUserScore(res.userScore)
      this.setState({isLoggedIn: true});
      if (res.user.ifid === 'ADMIN') {
        this.setState({isAdmin: true})
      }
    })
    .catch(console.log);
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
  updateUserScore = (value) =>{
    if(value !== null)
      this.setState({userScore: value});
  }
  updateLoginState = (value) =>{
    this.setState({isLoggedIn: value});
  }
  updateAdminState = (value) =>{
    this.setState({isAdmin: value});
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
        <NoPayment />
        <Nav 
          logOut={this.logOut} 
          isLoggedIn={this.state.isLoggedIn} 
          userData={this.state.user} 
        />
        <Suspense fallback={<div className="fallback"><span><Loader /></span></div>}>
      		<Switch>
      			<Route path="/" exact component={Home} />
            <Route path="/events" exact component={Events} />
            <Route path="/team" exact component={Team} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/sponsors" exact component={Sponsors} />
            <Route path="/ambassador" exact component={CampusAmbassador} />
            { /* <Route path="/cultural" exact component={Cultural} /> */ }
            <Route path="/marvel" exact render={(props) =>
              <QuickRegister {...props} 
                updateUser={this.updateUser}
                isLoggedIn={this.state.isLoggedIn}
                logOut={this.logOut}
                updateLoginState={this.updateLoginState} 
                updateEvent={this.updateEvent} 
                updateEventTeams={this.updateEventTeams} 
                updateUserScore={this.updateUserScore}
              />}
            />           
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
                updateUserScore={this.updateUserScore}
              />}
            />
            <Route path="/profile" exact render={(props)=> 
              <Profile {...props} 
                userData={this.state.user} 
                isLoggedIn={this.state.isLoggedIn} 
                updateLoginState={this.updateLoginState}
                eventData={this.state.userEventReg}
                eventTeams={this.state.userTeams}
                updateEvent={this.updateEvent} 
                updateEventTeams={this.updateEventTeams}
                userScore={this.state.userScore}
              />} 
            />
            <Route path="/admin" exact render={(props)=> 
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
            <Route path="/easter" exact render={(props)=> 
              <Easter {...props} 
                userData={this.state.user} 
                isLoggedIn={this.state.isLoggedIn} 
                updateLoginState={this.updateLoginState}
                updateUserScore={this.updateUserScore}
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
        </Suspense>
      </div>
    );
  }
}

export default App;
