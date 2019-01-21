import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './About.css';
import inf_starlord from "../../assets/logo/inf-starlord.png";
// import starlord from "../../assets/hero/starlord.png";
import headers from "../../assets/logo/headers.png"
import youtube from "../../assets/photos/youtube-s.png"
import '../../assets/css/fontawesome.min.css'
import '../../assets/css/brands.min.css'
import '../../assets/css/csshake.min.css'
// import {homeFunctions, stopHomeFunctions} from './HomeFunctions.js';
import Particles from 'react-particles-js';
import particleConfig from '../../assets/particlesjs-config.json';


class About extends Component {

  constructor(){
    super();
    this.state={
    }
  }

  render() {
    return (
	   	<div className='bout-container min-vh-100'>
	   		<Particles className='particlesBackA' params={particleConfig} />
			<div>
				<Link to='/'><img src={headers} className="headimg" alt="infotsav logo" /></Link>
			</div>
			
			<div id="disto" className="">
				<div className="infodiv">
					<img src={inf_starlord} className="infologo" id="inimg" alt="infotsav logo" />
				</div>
				<div className="dateA">
					<span>ABOUT</span>
				</div>
				<div className="aboutus">
					<p>
					Infotsav is the techno-managerial fest of Atal Bihari Vajpayee Indian Institute of Information Technology and Management, aimed at nurturing creativity and innovation among the youth in a competitive as well as a recreational manner. Participants hail from premier technical and managerial institutions of the region, and from a wide range of backgrounds. Sponsored by businesses behind cutting-edge technologies, it has got everything to boast its status as a national-level technical festival. Events range from online Contests like Trove Trace to nerve-wrecking hackathons, mind boggling quizzes, intensive coding contests and perhaps everything in between. Besides Prize Money, exposure at the national level serves as a great incentive for the participants. From 8th - 9th February, every brain out there that has got the guts to battle it out in the wars of grey matter, will be fighting in every domain possible.
					</p>
					<h3>Why attend Infotsav'19?</h3>
					<p>
						Infotsav provides a platform for one and all to witness one of the biggest techno-mangerial fests of Central India with pure delight and enthusiasm. With high intense competition encompassing over the adventorous couple of days, a huge price money, and a platform to show your worth, Infotsav has always served to be the ideal destination for the every coder, manager, developer or simply a thinker to experience the bliss of technology and creativity.
					</p>
				</div>
				
			</div>
			<div className="social colsch">
				<a className="soc" href="https://www.facebook.com/infotsav" target="_blank" rel="noopener noreferrer"><span className="fab fa-facebook-f"></span></a>
				<a className="soc" href="https://www.instagram.com/infotsav19" target="_blank" rel="noopener noreferrer"><span className="fab fa-instagram"></span></a>
				<a className="soc" href="https://play.google.com/store/apps/details?id=com.infotsav.test" target="_blank" rel="noopener noreferrer"><span className="fab fa-google-play"></span></a>
				<a className="soc" href="https://www.linkedin.com/in/infotsav-iiitm-9b9941174/" target="_blank" rel="noopener noreferrer"><span className="fab fa-linkedin-in"></span></a>
				<a className="soc" href="https://twitter.com/infotsav" target="_blank" rel="noopener noreferrer"><span className="fab fa-twitter"></span></a>
			</div>
			<div>
				<a href="https://www.facebook.com/Infotsav/videos/565533523902143/" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="teaser" className="yt shake-slow" /></a>
			</div>
		</div>
    );
  }
}

export default About;
