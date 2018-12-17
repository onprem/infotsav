import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class RegisterEvent extends Component {

  constructor(props){
    super(props);
    this.state={
      isUserRegistered: false
    }
  }

  componentDidMount(){
    this.checkIsUserRegistered();
  }

  componentDidUpdate(prevProps, prevState){
    if(this.props.eventData.length !== prevProps.eventData.length){
      this.checkIsUserRegistered();
    }
  }

  checkIsUserRegistered = () => {
    this.setState({isUserRegistered: false});
    this.props.eventData.forEach((entry, i) => {
      if(entry.eid === this.props.eventDetails.eid){
        this.setState({isUserRegistered: true});
        return;
      }
    });
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
