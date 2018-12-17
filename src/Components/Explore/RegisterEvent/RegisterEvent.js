import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class RegisterEvent extends Component {

  constructor(props){
    super(props);
    this.state={
    }
  }

  componentDidMount(){
  }

  render() {
  	const event=this.props.eventDetails;
    const {isLoggedIn}=this.props;
    if(isLoggedIn){
      return(
      <div className='white flex flex-column items-center ma4'>
        <div className='f3'>Coming soon!</div>
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
