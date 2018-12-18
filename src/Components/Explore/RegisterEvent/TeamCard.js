import React from 'react';
import {Link, Redirect} from 'react-router-dom';

const TeamCard = ({serial, mid, mname, deregEvent}) => {
	return(
      <tr>
        <td className="pv3 pr3 bb b--black-20">{serial}.</td>
        <td className="pv3 pr3 bb b--black-20">{mname}</td>
        <td className="pv3 pr3 bb b--black-20">{mid}</td>
        <td className="pv3 pr3 bb b--black-20">
        	<a className='pointer unregLink' onClick={() => deregEvent(mid)}><span>Remove</span></a>
        </td>
      </tr>
	);
}

export default TeamCard;