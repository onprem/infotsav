import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Footer} from '../Footer/Footer';
import '../../assets/css/solid.min.css'
import '../../assets/css/fontawesome.min.css'
import '../../assets/css/signup.css'
import headers from "../../assets/logo/headers.png"
import {Loader} from '../_Loader/Loader'
import './Admin.css'
import EventCard from './Cards/EventCard';

class EventAdmin extends Component {

  constructor(props){
    super(props);
    this.state={
    	loading: false,
	    redirect: false,
	    error: false,
	    successPayments: [],
	    pendingPayments: [],
	    users: [],
	    stats: [],
      field: '',
	    errorMessage: ''
	};
  }

  componentWillMount(){
  }

  componentDidMount(){
  }

  onTypeChange = (event) => {
    this.setState({field:event.target.value.toLowerCase()})
  }

  _handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this._handleEasterRedeem();
    }
  }
  _handleEasterRedeem = () =>{
    if(this.state.field){
      let error = false;
      fetch('/api/eventRegList', {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
          tokenid: this.state.field,
        })
      })
      .then(response => {
        if(response.status!==200)
          error = true;
        return response.json();
      })
      .then((scores) => {
        if(error)
          throw(scores);
        this.setState({
          successPayments: scores,
          error: false,
          errorMessage: '',
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({error: true, errorMessage: err});
      })
    }
    document.getElementById('easter-code').value='';
    this.setState({field: ''});
  }

  render() {
  	const { loading, redirect } = this.state;
  	const EventRegList = ({regusers}) => {
      const eventRegComponent = regusers.map((member, i) =>
          <EventCard 
            key={i}
            serial={parseInt(i)+1} 
            ifid={member.ifid}
            name={member.name} 
            mobile={member.mobile} 
            college={member.college}
            email={member.email}
            teamid={member.teamid}
          />
      );
      return (
      	<div className='white flex flex-column items-center w-100'>
      	  <h4 className='mv4 payh'>Successfull Payments: {regusers.length}</h4>
          <table className="f4 w-100" cellSpacing="0">
            <thead>
              <tr>
                <th className="fw6-ns fw8 bb b--white-20 pb3 pr3">Index</th>
                <th className="fw6-ns fw8 bb b--white-20 pb3 pr3">IF-ID</th>
                <th className="fw6-ns fw8 bb b--white-20 pb3 pr3">Name</th>
                <th className="fw6-ns fw8 bb b--white-20 pb3 pr3">Mobile</th>
                <th className="fw6-ns fw8 bb b--white-20 pb3 pr3">College</th>
                <th className="fw6-ns fw8 bb b--white-20 pb3 pr3">Email</th>
                <th className="fw6-ns fw8 bb b--white-20 pb3 pr3">Team-ID</th>
              </tr>
            </thead>
            <tbody className="lh-copy">
            	{eventRegComponent}
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
					    	<h2 className='mv'>REGISTRATION DASHBOARD</h2>
			  			</div>

          <div className="white flex flex-column items-center w-100">
              <input className="pa2 pt3 f3 br1 input-reset ba bg-white dib-ns db w-100" 
                type="text" 
                name="easter-code"  
                id="easter-code" 
                placeholder='Enter Your Secret Pass' 
                onChange={this.onTypeChange} 
                onKeyPress={this._handleKeyPress}
              />
                <input className="b white ma2 ph3 pv2 input-reset ba b--white bg-transparent dim pointer f5 dib-ns db" 
                  type="submit" 
                  value="Enter" 
                  onClick={this._handleEasterRedeem}
                />
              {(this.state.error)?<div className='f4 ma2'>{this.state.errorMessage}</div> : null}
          </div>
			  			<div className="payments">
              {(this.state.successPayments.length)?
			  				<h3>{this.state.successPayments[0].ename}</h3>
                : null
                }			  				
			  				<EventRegList className='limitTableSize' regusers={this.state.successPayments} />
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

export default EventAdmin;
