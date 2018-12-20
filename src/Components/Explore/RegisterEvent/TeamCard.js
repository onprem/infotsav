import React from 'react';
import {Link, Redirect} from 'react-router-dom';

const TeamCard = ({serial, mid, mname, paid, deregEvent}) => {
	return(
      <tr className='hover-bg-black-10'>
        <td className="pv3 pl2 pr2 pr3 bb b--white-20">{serial}.</td>
        <td className="pv3 pr3 bb b--white-20">{mname}</td>
        <td className="pv3 pr3 bb b--white-20">{mid}</td>
        <td className="pv3 pr3 bb b--white-20">
         	{(!paid)?
                  <a className='pointer dim' onClick={() => deregEvent(mid)}><span>Remove</span></a>
                  : <div />
        	}
        </td>
      </tr>
	);
}

export default TeamCard;