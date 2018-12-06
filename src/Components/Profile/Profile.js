import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Footer} from '../Footer/Footer';
import '../../assets/css/solid.min.css'
import '../../assets/css/fontawesome.min.css'
import '../../assets/css/signup.css'
import headers from "../../assets/logo/headers.png"

class Profile extends Component {

  constructor(){
    super();
    this.state={
    		name: '',
    		gender: '',
    		college: '',
    		city: '',
    		email: '',
    		phone: '',
    		password: ''
    	}
  }

  componentDidMount(){
  	this.requestData();
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
		this.setState({
			email: res
		})
	})
	.catch(console.log);
  }



  render() {

    return (
	   	<div className='register-container'>
	   	  <div>
			<Link to='/'><img src={headers} className="headim" alt="infotsav logo" /></Link>
		  </div>
		  <div className="center">
		    <div id="headdin">
		  		<h1>Welcome {this.state.email}</h1>
		  	</div>
		    <div id="holdit"></div>
	  	  </div>
  		  <Footer />
		</div>
    );
  }
}

export default Profile;
