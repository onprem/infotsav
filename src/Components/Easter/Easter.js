import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Footer} from '../Footer/Footer';
import '../../assets/css/solid.min.css'
import '../../assets/css/fontawesome.min.css'
import '../../assets/css/signup.css'
import headers from "../../assets/logo/headers.png"
import {Loader} from '../_Loader/Loader'

class Easter extends Component {

  constructor(props){
    super(props);
    this.state={
    	loading: true,
	    redirect: false,
	    error: false,
	    errorMessage: '',
	};
  }

  componentWillMount(){
  	if(!this.props.isLoggedIn){
		fetch('/api/checkToken')
		.then(response => {
			if(response.status!==200)
				throw(response);
		    this.setState({ loading: false });
		    this.props.updateLoginState(true);
		})
		.catch(() => {this.setState({ loading: false, redirect: true });});
	} else this.setState({loading: false});
  }

  render() {
  	const { loading, redirect } = this.state;
    return (
	   	<div className='register-container min-vh-100'>
   			<div>
				<Link to='/'><img src={headers} className="headim" alt="infotsav logo" /></Link>
		  	</div>
			<div className="white flex flex-column items-center">
			  	<div id="headdin" className="mt5">
					<h2>Redeem the Egg</h2>
				</div>
			{(!loading)?
				<div className="">
					<input class="pa2 pt3 f3 br1 input-reset ba bg-white w-100" type="text" name="easter-code"  id="easter-code" placeholder='Enter code to redeem' />
				</div>
			:
				<Loader />
			}
			</div>
			<Footer />
		</div>
    );
  }

}

export default Easter;
