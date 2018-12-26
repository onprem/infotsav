import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {Footer} from '../Footer/Footer';
import '../../assets/css/solid.min.css'
import '../../assets/css/fontawesome.min.css'
import '../../assets/css/signup.css'
import headers from "../../assets/logo/headers.png"
import {Loader} from '../_Loader/Loader'
import './Admin.css'
import SuccessCard from './Cards/SuccessCard';
import PendingCard from './Cards/PendingCard';
import UsersCard from './Cards/UsersCard';

class Admin extends Component {

  constructor(props){
    super(props);
    this.state={
    	loading: true,
	    redirect: false,
	    error: false,
	    successPayments: [],
	    pendingPayments: [],
	    users: [],
	    stats: [],
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
  	this.requestUserData();
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
    })
    .catch(console.log);
  }
  requestUserData = () =>{
    let err=false;
    fetch('/api/getusers')
    .then(response => {
      if(response.status!==200)
        err=true;
      return response.json();
    })
    .then(res => {
      if(err)
        throw res;
      this.setState({ users: res.users });
      this.updateUserStats(res.users);
    })
    .catch(console.log);
  }

  updateUserStats = (users) => {
  	var stats = [];
  	var datex='2018-12-05';
  	var j = 0;
  	var k = 0
  	for (var i in users) {
  		var z = users[i].timest.substring(0, 10);
  		if (datex !== z) {
  			var ob = {date: datex, users: j, confirmed: k};
  			stats.push(ob);
  			datex = z;
  			j = 1;
  			if (users[i].confirm) {
  				k = 1;
  			} else {
  				k = 0;
  			}
  		}
  		else {
  			j = j+1;
  			if (users[i].confirm) {
  				k = k+1;
  			}
  		}
  	}
  	var obc = {date: datex, users: j, confirmed: k};
  	stats.push(obc);
  	this.setState({ stats: stats });
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
  	const UsersList = ({userArray}) => {
      const usersComponent = userArray.map((member, i) =>
          <UsersCard 
            key={i}
            serial={parseInt(i)+1} 
            ifid={member.ifid} 
            name={member.name} 
            gender={member.gender} 
            college={member.college} 
            city={member.city} 
            email={member.email} 
            mobile={member.mobile} 
            confirm={member.confirm} 
          />
      );
      return (
      	<div className='white flex flex-column items-center w-100'>
      	  <h4 className='mv4 payh'>Registered Users: {userArray.length}</h4>
          <table className="f4 w-100" cellSpacing="0">
            <thead>
              <tr>
                <th className="fw6-ns fw8 bb b--white-20 pb3 pr3">Index</th>
                <th className="fw6-ns fw8 bb b--white-20 pb3 pr3">IF-ID</th>
                <th className="fw6-ns fw8 bb b--white-20 pb3 pr3">Name</th>
                <th className="fw6-ns fw8 bb b--white-20 pb3 pr3">Gender</th>
                <th className="fw6-ns fw8 bb b--white-20 pb3 pr3">College</th>
                <th className="fw6-ns fw8 bb b--white-20 pb3 pr3">City</th>
                <th className="fw6-ns fw8 bb b--white-20 pb3 pr3">Email</th>
                <th className="fw6-ns fw8 bb b--white-20 pb3 pr3">Mobile</th>
                <th className="fw6-ns fw8 bb b--white-20 pb3 pr3">Confirmed</th>
              </tr>
            </thead>
            <tbody className="lh-copy">
            	{usersComponent}
            </tbody>
          </table>
        </div>
      );
    }
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
    const SimpleAreaChart = () => {
	  	return (
	  		<ResponsiveContainer height={400} width="100%">
		    	<AreaChart data={this.state.stats}
		            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
		        <CartesianGrid strokeDasharray="3 3" stroke='#fff' />
		        <XAxis dataKey="date" stroke='#fff' />
		        <YAxis stroke='#fff' />
		        <Tooltip isAnimationActive={false} />
		        <Legend verticalAlign="top" height={36}/>
		        <Area name="Users" type='linear' dataKey='users' stroke='#ff5050' fill='#ff4d4d' />
		        <Area name="Confirmed" type='linear' dataKey='confirmed' stroke='#ff8c1a' fill='#ffa64d' />
		      </AreaChart>
		    </ResponsiveContainer>
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
			  			<div className="users">
			  				<h2>Users</h2>
			  				<SimpleAreaChart />			  				
			  				<UsersList userArray={this.state.users} />
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
