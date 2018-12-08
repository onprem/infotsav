import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {online_explore_function} from './online_explore_function';
import './online_explore.css';
import './online_explore_main.css'

class online_explore extends Component {

	componentDidMount(){
		online_explore_function();
	}

	render() {
		return (
			<div class="online_cont s--inactive">

				  <div class="online_cont__inner">

				    <div class="online_el">
				      <div class="online_el__overflow">
				        <div class="online_el__inner">
				          <div class="online_el__bg"></div>
				          <div class="online_el__preview-cont">
				            <h2 class="online_el__heading">Trove Trace</h2>
				          </div>
				          <div class="online_el__content">
				            <div class="online_el__text">Trove Trace</div>
				            <div class="online_el__close-btn"></div>
				            <p class="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing online_elit, sed do eiusmod
				            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				            consequat. Duis aute irure dolor in reprehenderit in voluptate vonline_elit esse
				            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				          </div>
				        </div>
				      </div>
				      <div class="online_el__index">
				        <div class="online_el__index-back">1</div>
				        <div class="online_el__index-front">
				          <div class="online_el__index-overlay" data-index="1">1</div>
				        </div>
				      </div>
				    </div>

				    <div class="online_el">
				      <div class="online_el__overflow">
				        <div class="online_el__inner">
				          <div class="online_el__bg"></div>
				          <div class="online_el__preview-cont">
				            <h2 class="online_el__heading">Job Bureau</h2>
				          </div>
				          <div class="online_el__content">
				            <div class="online_el__text">Job Bureau</div>
				            <div class="online_el__close-btn"></div>
				            <p class="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing online_elit, sed do eiusmod
				            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				            consequat. Duis aute irure dolor in reprehenderit in voluptate vonline_elit esse
				            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				          </div>
				        </div>
				      </div>
				      <div class="online_el__index">
				        <div class="online_el__index-back">2</div>
				        <div class="online_el__index-front">
				          <div class="online_el__index-overlay" data-index="2">2</div>
				        </div>
				      </div>
				    </div>

				    <div class="online_el">
				      <div class="online_el__overflow">
				        <div class="online_el__inner">
				          <div class="online_el__bg"></div>
				          <div class="online_el__preview-cont">
				            <h2 class="online_el__heading">Musically</h2>
				          </div>
				          <div class="online_el__content">
				            <div class="online_el__text">Musically</div>
				            <div class="online_el__close-btn"></div>
				            <p class="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing online_elit, sed do eiusmod
				            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				            consequat. Duis aute irure dolor in reprehenderit in voluptate vonline_elit esse
				            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				          </div>
				        </div>
				      </div>
				      <div class="online_el__index">
				        <div class="online_el__index-back">3</div>
				        <div class="online_el__index-front">
				          <div class="online_el__index-overlay" data-index="3">3</div>
				        </div>
				      </div>
				    </div>

				    <div class="online_el">
				      <div class="online_el__overflow">
				        <div class="online_el__inner">
				          <div class="online_el__bg"></div>
				          <div class="online_el__preview-cont">
				            <h2 class="online_el__heading">Boomerang</h2>
				          </div>
				          <div class="online_el__content">
				            <div class="online_el__text">Boomerang</div>
				            <div class="online_el__close-btn"></div>
				            <p class="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing online_elit, sed do eiusmod
				            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				            consequat. Duis aute irure dolor in reprehenderit in voluptate vonline_elit esse
				            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				          </div>
				        </div>
				      </div>
				      <div class="online_el__index">
				        <div class="online_el__index-back">4</div>
				        <div class="online_el__index-front">
				          <div class="online_el__index-overlay" data-index="4">4</div>
				        </div>
				      </div>
				    </div>

				    <div class="online_el">
				      <div class="online_el__overflow">
				        <div class="online_el__inner">
				          <div class="online_el__bg"></div>
				          <div class="online_el__preview-cont">
				            <h2 class="online_el__heading">Pranksters</h2>
				          </div>
				          <div class="online_el__content">
				            <div class="online_el__text">Pranksters</div>
				            <div class="online_el__close-btn"></div>
				            <p class="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing online_elit, sed do eiusmod
				            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				            consequat. Duis aute irure dolor in reprehenderit in voluptate vonline_elit esse
				            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				          </div>
				        </div>
				      </div>
				      <div class="online_el__index">
				        <div class="online_el__index-back">5</div>
				        <div class="online_el__index-front">
				          <div class="online_el__index-overlay" data-index="5">5</div>
				        </div>
				      </div>
				    </div>

				    <div class="online_el">
				      <div class="online_el__overflow">
				        <div class="online_el__inner">
				          <div class="online_el__bg"></div>
				          <div class="online_el__preview-cont">
				            <h2 class="online_el__heading">Fill In The Memes</h2>
				          </div>
				          <div class="online_el__content">
				            <div class="online_el__text">Fill In The Memes</div>
				            <div class="online_el__close-btn"></div>
				            <p class="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing online_elit, sed do eiusmod
				            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				            consequat. Duis aute irure dolor in reprehenderit in voluptate vonline_elit esse
				            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				          </div>
				        </div>
				      </div>
				      <div class="online_el__index">
				        <div class="online_el__index-back">6</div>
				        <div class="online_el__index-front">
				          <div class="online_el__index-overlay" data-index="6">6</div>
				        </div>
				      </div>
				    </div>

				    <div class="online_el">
				      <div class="online_el__overflow">
				        <div class="online_el__inner">
				          <div class="online_el__bg"></div>
				          <div class="online_el__preview-cont">
				            <h2 class="online_el__heading">Poster Making</h2>
				          </div>
				          <div class="online_el__content">
				            <div class="online_el__text">Poster Making</div>
				            <div class="online_el__close-btn"></div>
				            <p class="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing online_elit, sed do eiusmod
				            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				            consequat. Duis aute irure dolor in reprehenderit in voluptate vonline_elit esse
				            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				          </div>
				        </div>
				      </div>
				      <div class="online_el__index">
				        <div class="online_el__index-back">7</div>
				        <div class="online_el__index-front">
				          <div class="online_el__index-overlay" data-index="7">7</div>
				        </div>
				      </div>
				    </div>

				    <div class="online_el">
				      <div class="online_el__overflow">
				        <div class="online_el__inner">
				          <div class="online_el__bg"></div>
				          <div class="online_el__preview-cont">
				            <h2 class="online_el__heading">Photography Contest</h2>
				          </div>
				          <div class="online_el__content">
				            <div class="online_el__text">Photography Contest</div>
				            <div class="online_el__close-btn"></div>
				            <p class="event_data">Lorem ipsum dolor sit amet, consectetur adipisicing online_elit, sed do eiusmod
				            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				            consequat. Duis aute irure dolor in reprehenderit in voluptate vonline_elit esse
				            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				          </div>
				        </div>
				      </div>
				      <div class="online_el__index">
				        <div class="online_el__index-back">8</div>
				        <div class="online_el__index-front">
				          <div class="online_el__index-overlay" data-index="8">8</div>
				        </div>
				      </div>
				    </div>
				  </div>
			</div>
		)
	}
}

export default online_explore;