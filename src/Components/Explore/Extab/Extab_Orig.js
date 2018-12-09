import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Extab.css';

class Extab extends Component {

  constructor(props){
    super(props);
    this.state={
    }
  }

  componentDidMount(){
  }

  componentWillUnmount(){
  }

  render() {
  	const event=this.props.eventDetails;
    return (
    	<div>
	        <ul className="tabs" role="tablist">
	          <li>
	        	  <input type="radio" name="tabs" id="tab1" checked />
	              <label htmlFor="tab1">About</label>
	              
	              <div id="tab-content1" className="tab-content">
	              <p className='eventDescription' dangerouslySetInnerHTML={{__html: event.description}}>
	              </p>
	              <p className='eventPrizes' dangerouslySetInnerHTML={{__html: event.prizes}}>
	              </p>
	              <p className='eventHead' dangerouslySetInnerHTML={{__html: event.eventHead}}>
	              </p>
	              </div>
	          </li>
	          <li>
	              <input type="radio" name="tabs" id="tab2" />
	              <label htmlFor="tab2">Rules</label>
	              <div id="tab-content2" className="tab-content">
	              	<p className='eventRules' dangerouslySetInnerHTML={{__html: event.rules}}>
	              	</p>
	              </div>
	          </li>
	      	</ul>
      	</div>
    );
  }
}

export default Extab;
