import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Footer} from '../Footer/Footer';
import '../../assets/css/solid.min.css'
import '../../assets/css/fontawesome.min.css'
import '../../assets/css/signup.css'
import headers from "../../assets/logo/headers.png"
import {Loader} from '../_Loader/Loader'
import './Admin.css'

class Admin extends Component {

  constructor(props){
    super(props);
    this.state={
    	loading: true,
	    redirect: false,
	    error: false,
	    errorMessage: ''
	};
  }

  componentWillMount(){
  	if(!this.props.isAdmin){
		fetch('/api/checkAdmin')
		.then(response => {
			if(response.status!==200)
				throw(response);
			this.setState({ loading: false });
		    this.props.updateLoginState(true);
		    this.props.updateAdminState(true);
		})
		.catch((response) => {
			this.setState({ loading: false, redirect: true });
		});
	} else {
		this.setState({loading: false});
	}
  }

  render() {
  	const { loading, redirect } = this.state;
    return (
    	<div className='Profile'>
	   	<div className='register-container'>
	   	  <div>
			<Link to='/'><img src={headers} className="headim" alt="infotsav logo" /></Link>
		  </div>
		  <div className="center">
		  {(!loading)?
		  		(redirect)?
		  			<Redirect to='/404' />
	  			:
	  				<div className="admin-content">
					    <div className="admin-headin">
					    	<h2 className='mv'>ADMIN</h2>
			  				<h3 className='mv3 wellc'>Welcome {this.props.userData.name},</h3>
			  			</div>
			  		</div>
  			:
  				<Loader />
  			}

		    
	  	  </div>
  		  <Footer />
		</div>
		</div>
    );
  }
}

export default Admin;
