import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Footer} from '../Footer/Footer';
import '../../assets/css/solid.min.css'
import '../../assets/css/fontawesome.min.css'
import '../../assets/css/signup.css'
import headers from "../../assets/logo/headers.png"
import {Loader} from '../_Loader/Loader'
import './Easter.css'
import TeamCard from './TeamCard';
import Modal from 'react-awesome-modal';
import spideyEgg from '../../assets/photos/spidey_easter.png'

class Easter extends Component {

  constructor(props){
    super(props);
    this.state={
    	loading: true,
	    redirect: false,
	    error: false,
	    errorMessage: '',
    	field: '',
    	userScore: 0,
    	leaderboard: [],
      visibleModal: false,
      visibleModal2: false,
      visibleModal3: false
    };
    this.i=0;
  }

  componentWillMount(){
    if(!this.props.isLoggedIn){
  		fetch('/api/checkToken')
  		.then(response => {
  			if(response.status!==200)
  				throw(response);
  		    this.setState({ loading: false });
  		    this.props.updateLoginState(true);
  			this.fetchScore();
  		})
  		.catch(() => {this.fetchScore(); this.setState({ loading: false, redirect: true });});
    } else{ 
		this.setState({loading: false});
		this.fetchScore();
	 }
  }

  componentDidMount(){
  	console.log('%cOhMyHeavens!', 'background: #222; color: #bada55; font-size: 2rem');
  	console.log(`You did good coming here! Here is an easter code for ya!`);
    this.spideyTO = window.setTimeout(() => {
      document.getElementById('spideyEgg').style.display='unset';
    }, 180000);
  }

  componentWillUnmount(){
    window.clearTimeout(this.spideyTO);
    document.getElementById('spideyEgg').style.display='none';
  }

  componentDidUpdate(prevProps, prevState){
  }

  onTypeChange = (event) => {
    this.setState({field:event.target.value.toLowerCase()})
  }

  _handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this._handleEasterRedeem();
    }
  }

  fetchScore = () => {
  	let error = false;
    fetch('/api/easterScore', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
      	ifid: this.props.userData.id,
      	isLoggedIn: this.props.isLoggedIn
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
    	if(this.props.isLoggedIn){
    		if(scores.userScore[0].total === null && this.i<4){
          this.i++;
    			this.fetchScore();
        }
    		else {
    			this.setState({
	    			userScore: scores.userScore[0].total || '0',
	    			leaderboard: scores.leaderboard
	    		});
    		}
    	}
    	else {
    		this.setState({leaderboard: scores});
    	}
    })
    .catch(err => {
    	console.log(err);
    })
  }

  _handleEasterRedeem = () =>{
  	if(this.state.field){
	  	let error = false;
	    fetch('/api/easterRedeem', {
	      method: 'post',
	      headers: {'Content-type': 'application/json'},
	      body: JSON.stringify({
	      	egg: this.state.field,
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
				error: false,
				errorMessage: '',
				userScore: scores.userScore[0].total,
				leaderboard: scores.leaderboard
			});
			this.props.updateUserScore(scores.userScore[0].total);
	    })
	    .catch(err => {
	    	this.setState({error: true, errorMessage: err});
	    })
    }
  	document.getElementById('easter-code').value='';
    this.setState({field: ''});
  }

  clickHeadingHandle =(event) => {
    if(event.detail === 3){
      this.setState({visibleModal: true});
    }
  }
  doubleClickHandle = (event) => {
    if(event.detail === 2){
      this.setState({visibleModal2: true});
    }
  }
  ponderEggHandle = () => {
    this.setState({visibleModal3: true});
    document.getElementById('spideyEgg').style.display='none';
  }

  render() {
  	const { loading } = this.state;

    const Leaderboard = ({ranks}) => {
      const teamComponent = ranks.map((member, i) =>
          <TeamCard 
            key={i}
            serial={parseInt(i)+1}
            mid={member.ifid}
            mname={member.name}
            score={member.total}
          />
      );
      return (
        <div className='white flex flex-column items-center w-100 mh4-ns mh1'>
          <table className="f4 w-100" cellSpacing="0">
            <thead>
              <tr>
                <th className="fw6-ns fw8 bb b--white-20 tc pb3 pr3">Rank</th>
                <th className="fw6-ns fw8 bb b--white-20 tc pb3 pr3">Name</th>
                <th className="fw6-ns fw8 bb b--white-20 tc pb3 pr3">IF-ID</th>
                <th className="fw6-ns fw8 bb b--white-20 tc pb3 pr3">Score</th>
              </tr>
            </thead>
            <tbody className="lh-copy" id='leader-body'>
              {teamComponent}
            </tbody>
          </table>
        </div>
      );
    }

    return (
	   	<div className='register-container min-vh-100 w-100'>
   			<div>
				  <Link to='/'><img src={headers} className="headim" alt="infotsav logo" /></Link>
		  	</div>
        <div id='spideyEgg' onClick={this.ponderEggHandle} className='spideyEgg'>
          <img src={spideyEgg} alt='' />
        </div>
          <Modal 
              visible={this.state.visibleModal}
              effect="fadeInDown"
              onClickAway={() => this.setState({visibleModal: false})}
          >
            <div className='black f5 flex flex-column items-center pa3 bg-near-gray'>
              <div className='mb2'>Damn! You got it right.</div><div className='t mh2'> Here is your easter code: '<b>TheLokiClick</b>'</div>
            </div>
          </Modal>
          <Modal 
              visible={this.state.visibleModal2}
              effect="fadeInDown"
              onClickAway={() => this.setState({visibleModal2: false})}
          >
            <div className='black f5 flex flex-column items-center pa3 bg-near-gray'>
              <div className='mb2'>Well, that's really smart of you!</div><div className='t mh2'> Here is your easter code: '<b>TheObviousOne</b>'</div>
            </div>
          </Modal>
          <Modal 
              visible={this.state.visibleModal3}
              effect="fadeInUp"
              onClickAway={() => this.setState({visibleModal3: false})}
          >
            <div className='black f5 flex flex-column items-center pa3 bg-near-gray'>
              <div className='mb2'>Guess you have a lot to think about!</div><div className='t mh2'> Here's a gift for you: '<b>ThePonderEgg</b>'</div>
            </div>
          </Modal>
        <div className="white flex flex-column items-center">
		  	<div id="headdin" className="mt5">
					<div className='f1 b ma3 mt4' onClick={this.clickHeadingHandle}>Easter Hunt</div>
			  </div>
			{(!loading)?
				(this.props.isLoggedIn)?
					<div className="white flex flex-column items-center">
						{(this.state.userScore)?<div className='f3'>Your score: {this.state.userScore}</div> : null}
						<input className="pa2 pt3 f3 br1 input-reset ba bg-white dib-ns db w-100" 
							type="text" 
							name="easter-code"  
							id="easter-code" 
							placeholder='Enter code to redeem' 
	                        onChange={this.onTypeChange} 
	                        onKeyPress={this._handleKeyPress}
  						/>
				      	<input className="b white ma2 ph3 pv2 input-reset ba b--white bg-transparent dim pointer f5 dib-ns db" 
					      	type="submit" 
					      	value="Redeem" 
					      	onClick={this._handleEasterRedeem}
				      	/>
  						{(this.state.error)?<div className='f4 ma2'>{this.state.errorMessage}</div> : null}
					</div>
				:
					<div className='f3 white'>
						You must login to redeem
						<br />
						<Link to='/login'>
				      		<input className="b white ma2 ph3 pv2 input-reset ba b--white bg-transparent dim pointer f5 dib br4" type="submit" value="Login" />
						</Link>
					</div>
			:
				<Loader />
			}
			<div className="easter-content">
          <div className="easterRulesDiv mb0">
            <h3 className='urevt'>Guidelines</h3>
            <div className='tl'>
              <ul>
                <li>The contest will commence from 4th January 2019.</li>
                <li>Various easter eggs are hidden in the website. Find them and redeem the code here to get points.</li>
                <li>Easter eggs can be found at various places, for example, at a subdomain, or you can click (or <span onClick={this.doubleClickHandle}>double click</span>) around the website to find some.</li>
                <li>The easter eggs will be related to <i>The Marvel Cinematic Universe</i>. Well, mostly.</li>
                <li>Example? At a subdomain such as <a className='link white underline' href='https://firstavenger.infotsav.in'>firstavenger.infotsav.in</a> (Yes, you'll get points from it).</li>
                <li>Each easter egg has an initial score which will decrease with each redemption. That means the sooner you find an egg, higher the points you get. Be the first one to find an Egg and get max points.</li>
                <li>The highest scorers will be awarded.</li>
                <li>The person with most unique finds ( a unique find is an easter egg which is discovered only by a single person) will also be rewarded.</li>
                <li>You can find live rankings below: </li>
              </ul>
            </div>
          </div>
	  			<div className="easterTableDiv mv0 mt0">
	  				<h3 className='mv1 urevt'>Table of Honor</h3>
	  				{(this.state.leaderboard.length)?
	  					<Leaderboard ranks={this.state.leaderboard} />
	  				  :
	  				  	"They who is't deserve honor art not hither!"
	  				}
	  			</div>
	  		</div>

			</div>
			<Footer />
		</div>
    );
  }

}

export default Easter;
