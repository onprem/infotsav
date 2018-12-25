import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Footer} from '../Footer/Footer';
import '../../assets/css/solid.min.css'
import '../../assets/css/fontawesome.min.css'
import '../../assets/css/signup.css'
import headers from "../../assets/logo/headers.png"
import {Loader} from '../_Loader/Loader'
import './Admin.css'
import SuccessCard from './PaymentCards/SuccessCard';
import PendingCard from './PaymentCards/PendingCard';

class Admin extends Component {

  constructor(props){
    super(props);
    this.state={
    	loading: true,
	    redirect: false,
	    error: false,
	    successPayments: [],
	    pendingPayments: [],
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

  componentDidMount(){
  	this.requestPaymentData();
  }

  requestPaymentData = () =>{
    let err=false;
    fetch('/api/payments')
    .then(response => {
      if(response.status!==200)
        err=true;
      return response.json();
    })
    .then(res => {
      if(err)
        throw res;
      this.updatePayments(res);
      console.log(res);
    })
    .catch(console.log);
  }
  updatePayments = (data) =>{
    this.setState({
    	successPayments: data.successPayments,
    	pendingPayments: data.pendingPayments
    });
  }

  recheckStatus = (orderid, checksum) => {
    fetch('/api/dverify', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        MID: "cIhBQW96004950026128",
        ORDERID: orderid,
        CHECKSUM: checksum
      })
    })
    .then(response => {
      setTimeout(()=>{
	  	window.location.reload();
	  }, 1000);
    })
    .catch(err => {
      console.log(err);
      this.setState({error: true, errorMessage: err});
    })
  }

  render() {
  	const { loading, redirect } = this.state;
  	const SuccessList = ({pays}) => {
      const successComponent = pays.map((member, i) =>
          <SuccessCard 
            key={i}
            serial={parseInt(i)+1} 
            ifid={member.custid} 
            teamid={member.teamid} 
            amount={member.fee} 
            date={member.txndate}
          />
      );
      return (
      	<div className='white flex flex-column items-center w-100'>
      	  <h4 className='mv4 payh'>Successfull Payments: {pays.length}</h4>
          <table className="f4 w-100" cellSpacing="0">
            <thead>
              <tr>
                <th className="fw6-ns fw8 bb b--white-20 pb3 pr3">Index</th>
                <th className="fw6-ns fw8 bb b--white-20 pb3 pr3">IF-ID</th>
                <th className="fw6-ns fw8 bb b--white-20 pb3 pr3">TeamID</th>
                <th className="fw6-ns fw8 bb b--white-20 pb3 pr3">Amount</th>
                <th className="fw6-ns fw8 bb b--white-20 pb3 pr3">Date</th>
              </tr>
            </thead>
            <tbody className="lh-copy">
            	{successComponent}
            </tbody>
          </table>
        </div>
      );
    }
    const PendingList = ({pays}) => {
      const pendingComponent = pays.map((member, i) =>
          <PendingCard 
            key={i}
            serial={parseInt(i)+1} 
            ifid={member.custid} 
            teamid={member.teamid} 
            amount={member.fee} 
            date={member.txndate}
            orderid={member.orderid} 
            checksum={member.checksum}
            recheckStatus={this.recheckStatus}
          />
      );
      return (
      	<div className='white flex flex-column items-center w-100'>
      	  <h4 className='mv4 payh'>Pending Payments: {pays.length}</h4>
          <table className="f4 w-100" cellSpacing="0">
            <thead>
              <tr>
                <th className="fw6-ns fw8 bb b--white-20 pb3 pr3">Index</th>
                <th className="fw6-ns fw8 bb b--white-20 pb3 pr3">IF-ID</th>
                <th className="fw6-ns fw8 bb b--white-20 pb3 pr3">TeamID</th>
                <th className="fw6-ns fw8 bb b--white-20 pb3 pr3">Amount</th>
                <th className="fw6-ns fw8 bb b--white-20 pb3 pr3">Date</th>
                <th className="fw6-ns fw8 bb b--white-20 pb3 pr3">Recheck Status</th>
              </tr>
            </thead>
            <tbody className="lh-copy">
            	{pendingComponent}
            </tbody>
          </table>
        </div>
      );
    }
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
					    	<h2 className='mv'>ADMIN DASHBOARD</h2>
			  			</div>
			  			<div className="payments">
			  				<h3>Payments</h3>			  				
			  				<SuccessList pays={this.state.successPayments} />
			  				<PendingList pays={this.state.pendingPayments} />
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
