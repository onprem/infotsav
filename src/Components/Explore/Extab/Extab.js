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
  	if(!event.eventHead)
  		event.eventHead='To be announced'
    if(!event.organizers)
      event.organizers='To be announced'
  	if(!event.description)
  		event.description='To be announced'  	
  	if(!event.prizes)
  		event.prizes='To be announced'  	
  	if(!event.rules)
  		event.rules='To be announced'
    return (
    	<div>
	        <ul className="tabs" role="tablist">

	              <div id="tab-content1" className="tab-content">
	              <div className='f3 underline b'>Description</div>
	              <p className='eventDescription' dangerouslySetInnerHTML={{__html: event.description}}>
	              </p>
	              <div className='f3 underline b'>Prizes</div>

	              <p className='eventPrizes' dangerouslySetInnerHTML={{__html: event.prizes}}>
	              </p>
	              <div className='f3 underline b'>Event Heads</div>

	              <p className='eventHead' dangerouslySetInnerHTML={{__html: event.eventHead}}>
	              </p>
                <div className='f3 underline b'>Event Organizers</div>

                <p className='eventHead' dangerouslySetInnerHTML={{__html: event.organizers}}>
                </p>
	              </div>

	              <div className='f3 b underline'>Rules</div>

	              <div id="tab-content2" className="tab-content">
	              	<ul className='eventRules' dangerouslySetInnerHTML={{__html: event.rules}}>
	              	</ul>
	              </div>
	      	</ul>
      	</div>
    );
  }
}

export default Extab;
