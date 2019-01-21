import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css'
import './Extab.css';
import RegisterEvent from '../RegisterEvent/RegisterEvent'

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
    if (event.eid === 13) { // Hackathon
      return (
        <div className='white tl tabs'>
          <Tabs defaultTab="one" className='tab-content mv2'>
            <TabList className='mv2'>
              <Tab autoFocus tabFor="one">About</Tab>
              <Tab tabFor="two">Rules</Tab>
              <Tab tabFor="three">Register</Tab>
            </TabList>
            <TabPanel tabId="one">
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
            </TabPanel>
            <TabPanel tabId="two">                
              <div className='f3 b underline'>Rules</div>
              <div className='eventRules'>
                <ul dangerouslySetInnerHTML={{__html: event.rules}}>
                </ul>
              </div>
            </TabPanel>
            <TabPanel tabId="three"> 
              <div className='white flex flex-column items-center ma4'>
                <div>
                  Fill the google form at <a className='link white underline' href="https://goo.gl/forms/oIhdzCedbBjxtz7l2" target='_blank' rel="noopener noreferrer">https://goo.gl/forms/oIhdzCedbBjxtz7l2</a> to register for zonal rounds.<br />
                </div>
                <div>
                  Teams qualifying the zonals need to register here.
                </div>
                <div>
                  Registrations without qualifying the zonal round will be considered invalid.
                </div>
              </div>
              <RegisterEvent {...this.props} />
            </TabPanel>
          </Tabs>
        </div>
      );
    }
    else if (event.eid === 14) { // Techathlon
      return (
        <div className='white tl tabs'>
          <Tabs defaultTab="one" className='tab-content mv2'>
            <TabList className='mv2'>
              <Tab autoFocus tabFor="one">About</Tab>
              <Tab tabFor="two">Rules</Tab>
              <Tab tabFor="three">Register</Tab>
            </TabList>
            <TabPanel tabId="one">
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
            </TabPanel>
            <TabPanel tabId="two">                
              <div className='f3 b underline'>Rules</div>
              <div className='eventRules'>
                <ul dangerouslySetInnerHTML={{__html: event.rules}}>
                </ul>
              </div>
            </TabPanel>
            <TabPanel tabId="three">
              <div className='white tc flex flex-column items-center ma4'>
                Teams qualifying the prelims need to register here.
                <br />
                Registrations without qualifying the first round will be considered invalid.
              </div>
              <RegisterEvent {...this.props} />
            </TabPanel>
          </Tabs>
        </div>
      );
    }
    else {
      return (
        <div className='white tl tabs'>
          <Tabs defaultTab="one" className='tab-content mv2'>
            <TabList className='mv2'>
              <Tab autoFocus tabFor="one">About</Tab>
              <Tab tabFor="two">Rules</Tab>
              <Tab tabFor="three">Register</Tab>
            </TabList>
            <TabPanel tabId="one">
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
            </TabPanel>
            <TabPanel tabId="two">                
              <div className='f3 b underline'>Rules</div>
              <div className='eventRules'>
                <ul dangerouslySetInnerHTML={{__html: event.rules}}>
                </ul>
                {
                  (event.eid === 22) ? 
                  <div>
                      <a className="download_btn dim pointer br4 ph2 pv1" href="www.infotsav.in/assets/ProblemStatement.docx" download>
                      DOWNLOAD PROBLEM STATEMENT
                      </a>
                  </div>
                  :
                  <div />
                }
              </div>
            </TabPanel>
            <TabPanel tabId="three">
              <RegisterEvent {...this.props} />
            </TabPanel>
          </Tabs>
        </div>
      );
    }
  }
}

export default Extab;
