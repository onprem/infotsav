import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import headers from "../../assets/logo/headers.png"
import './Cultural.css'
import mojo from '../../assets/photos/mojo.png'
import sunburn from '../../assets/photos/sunburn.png'
import fanfest from '../../assets/photos/fanfest.png'


class Cultural extends Component {

	// componentDidMount() {
	// 	// parallax();
	// 	    // ------------- VARIABLES ------------- //
	//     let ticking = false;
	//     let isFirefox = (/Firefox/i.test(navigator.userAgent));
	//     let isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv:11\./i.test(navigator.userAgent));
	//     let scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive) 
	//     let slideDurationSetting = 600; //Amount of time for which slide is "locked"
	//     let currentSlideNumber = 0;
	//     let totalSlideNumber = document.getElementsByClassName("background").length;

	//   // ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
	//   this.parallaxScroll= (evt) => {
	//     var delta;
	//     if (isFirefox) {
	//       //Set delta for Firefox
	//       delta = evt.detail * (-120);
	//     } else if (isIe) {
	//       //Set delta for IE
	//       delta = -evt.deltaY;
	//     } else {
	//       //Set delta for all other browsers
	//       delta = evt.wheelDelta;
	//     }

	//     if (ticking !== true) {
	//       if (delta <= -scrollSensitivitySetting) {
	//         //Down scroll
	//         ticking = true;
	//         if (currentSlideNumber !== totalSlideNumber - 1) {
	//           this.nextItem();
	//         }
	//         slideDurationTimeout(slideDurationSetting);
	//       }
	//       if (delta >= scrollSensitivitySetting) {
	//         //Up scroll
	//         ticking = true;
	//         previousItem();
	//         slideDurationTimeout(slideDurationSetting);
	//       }
	//     }
	//   }

	//   // ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
	//   function slideDurationTimeout(slideDuration) {
	//     setTimeout(function() {
	//       ticking = false;
	//     }, slideDuration);
	//   }

	//   // ------------- ADD EVENT LISTENER ------------- //
	//   this.mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
	//   window.addEventListener(this.mousewheelEvent, this.parallaxScroll, false);

	//   // ------------- SLIDE MOTION ------------- //
	//   this.nextItem = () => {
 //        currentSlideNumber++;
	//     var $previousSlide = document.getElementsByClassName("background")[currentSlideNumber-1];
	//     $previousSlide.classList.remove("up-scroll");
	//     $previousSlide.classList.add("down-scroll");
	//   }

	//   function previousItem() {
	//   	if (currentSlideNumber !== 0) {
 //            currentSlideNumber--;
 //        }
	//     var $currentSlide = document.getElementsByClassName("background")[currentSlideNumber];
	//     $currentSlide.classList.add("up-scroll");
	//     $currentSlide.classList.remove("down-scroll");
	//   }
	// }
	componentWillUnmount(){
	  window.removeEventListener(this.mousewheelEvent, this.parallaxScroll, false);
	}

	render () {
	return (


		<div className="min-vh-100">

			<div>
				<Link to='/'><img src={headers} className="headimg cul_headlogo" alt="infotsav logo" /></Link>
			</div>

			 <div className="cul_container">
				 <section className="cul_background">
				   		<h1 className="cul_head">EDM NIGHT</h1>
						<img class="mojo" src={mojo} alt="mojo"/>
					<div class="slant"></div>
						<p className="cul_date">9th Feb</p>
						<p className="cul_time">9 PM Onwards</p>
						<p className="cul_data1">Performed At</p>
						<img className="cul_data2" src={sunburn} alt="logo"></img>
						<img className="cul_data3" src={fanfest} alt="logo"></img>
				   { /* <div className="scroll-down" onClick={() => this.nextItem()}></div> */ }
				 </section>

				 { /*<section className="background">
				   <div className="content-wrapper">
				   		<div className='tc'>
				   			<h1>Event Management Team</h1>
						</div>
				   </div>
				   <div className="scroll-down" onClick={() => this.nextItem()}></div>
				 </section> */ }
			</div>
		</div>
		);
	}
}

export default Cultural;
