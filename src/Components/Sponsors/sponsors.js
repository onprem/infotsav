import React, { Component } from 'react';
import './sponsors.css';
import SponList from '../Team/SponsorsList';
import {sponsorsteam} from '../Team/Data';
import inf_starlord from "../../assets/logo/inf-starlord.png";
import abc1 from '../../assets/sponsors/abc1.jpg'
import abc2 from '../../assets/sponsors/abc2.png'
import abc3 from '../../assets/sponsors/abc3.png'
import abc4 from '../../assets/sponsors/abc4.png'
import abc5 from '../../assets/sponsors/abc5.png'
import abc6 from '../../assets/sponsors/abc6.png'
import abc7 from '../../assets/sponsors/abc7.png'
import abc8 from '../../assets/sponsors/abc8.png'
import abc10 from '../../assets/sponsors/abc10.png'
import abc11 from '../../assets/sponsors/abc11.png'
import abc12 from '../../assets/sponsors/abc12.png'
import abc13 from '../../assets/sponsors/abc13.png'
import abc14 from '../../assets/sponsors/abc14.jpg'
import abc15 from '../../assets/sponsors/abc15.png'
import abc16 from '../../assets/sponsors/abc16.png'

class sponsors extends Component {

	render() {
		return (
			<div className="sp-main">
				<h1 className="sp-head">Sponsors</h1>
				<div className="sp-slider">
					<h1 className="sp_head2"> TITLE SPONSOR </h1>
					<h2 className="sp_head3">PRESENTS</h2>
					<img className="sp2 pa5" src={abc16} alt="sponsor"/>
					<img className="sp3 pa5" src={inf_starlord} alt="infotsav_logo"/>
					<h2 className="dotted">
					--------------------------------------------------</h2>
					<div className="sp_img">
						<img className="sp pa5" src={abc1} alt="sponsor"/>
						<img className="sp pa5" src={abc2} alt="sponsor"/>
						<img className="sp pa5" src={abc3} alt="sponsor"/>
						<img className="sp pa5" src={abc4} alt="sponsor"/>
						<img className="sp pa5" src={abc5} alt="sponsor"/>
						<img className="sp pa5" src={abc6} alt="sponsor"/>
						<img className="sp pa5" src={abc7} alt="sponsor"/>
						<img className="sp pa5" src={abc8} alt="sponsor"/>
						<img className="sp pa5" src={abc10} alt="sponsor"/>
						<img className="sp pa5" src={abc11} alt="sponsor"/>
						<img className="sp pa5" src={abc12} alt="sponsor"/>
						<img className="sp pa5" src={abc13} alt="sponsor"/>
						<img className="sp pa5" src={abc14} alt="sponsor"/>
						<img className="sp pa5" src={abc15} alt="sponsor"/>
					</div>
					<h2 className="dotted">
					--------------------------------------------------</h2>
				</div>
					<div className='tc spon_team '>
				   		<h1 className="sp_head4">Sponsors Team</h1>
						<SponList sponsorsteam={sponsorsteam} />
					</div>
				<div className="mob_container">
					<div className="mob_content-wrapper">
			   			<h1>Sponsors Team</h1>
						<SponList sponsorsteam={sponsorsteam} />
					</div>
				</div>
			</div>
			);

	}

}

export default sponsors;