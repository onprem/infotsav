import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import inf_starlord from "../../assets/logo/inf-starlord.png";
import starlord from "../../assets/hero/starlord.png";
import headers from "../../assets/logo/headers.png"
import youtube from "../../assets/photos/youtube-s.png"
import '../../assets/css/fontawesome.min.css'
import '../../assets/css/brands.min.css'
import '../../assets/css/csshake.min.css'
import {homeFunctions, stopHomeFunctions} from './HomeFunctions.js';

class Home extends Component {

  constructor(){
    super();
    this.state={
    }
  }
  componentDidMount(){
  	homeFunctions();
  }

  componentWillUnmount(){
  	stopHomeFunctions();
  }

  render() {
    return (
	   	<div className='home-container'>
			<div>
				<img src={headers} className="headimg" alt="infotsav logo" />
			</div>
			<div className="circles">
				<span className="c0 activec" id="c0"></span>
				<span className="c1" id="c1"></span>
				<span className="c2" id="c2"></span>
				<span className="c3" id="c3"></span>
			</div>
			
			<div id="disto" className="">
				<div className="infodiv">
					<img src={inf_starlord} className="infologo" id="inimg" alt="infotsav logo" />
				</div>
				<div className="centimg">
					<img src={starlord} className="image" id="heroimg" alt="image of superhero" />
				</div>
				<div className="date">
					<span>8-9</span>
					<span>Feb '19</span>
				</div>
				<a href="#" className="colsch">
				<div className="box">
					<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
						<line className="top" x1="0" y1="0" x2="720" y2="0"/>
						<line className="left" x1="0" y1="60" x2="0" y2="-120"/>
						<line className="bottom" x1="240" y1="60" x2="-480" y2="60"/>
						<line className="right" x1="240" y1="0" x2="240" y2="180"/>
					</svg>
					<span>REGISTER</span>
				</div>
				</a>
			</div>
			<div className="social colsch">
				<a className="soc" href="https://www.facebook.com/infotsav" target="_blank"><span className="fab fa-facebook-f"></span></a>
				<a className="soc" href="https://www.instagram.com/infotsav19" target="_blank"><span className="fab fa-instagram"></span></a>
				<a className="soc" href="https://twitter.com/infotsav" target="_blank"><span className="fab fa-twitter"></span></a>
				<a className="soc" href="https://www.linkedin.com/in/infotsav-iiitm-9b9941174/" target="_blank"><span className="fab fa-linkedin-in"></span></a>
			</div>
			<div>
				<a href="https://www.facebook.com/Infotsav/videos/565533523902143/" target="_blank"><img src={youtube} alt="teaser" className="yt shake-slow" /></a>
			</div>
		</div>
    );
  }
}

export default Home;
