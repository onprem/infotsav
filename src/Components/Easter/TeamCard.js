import React from 'react';

const TeamCard = ({serial, mid, mname, score}) => {
	return(
      <tr className='hover-bg-black-10'>
        <td className="pv2 pl2 pr2 pr3 bb b--white-20">{serial}.</td>
        <td className="pv2 pr3 bb b--white-20">{mname}</td>
        <td className="pv2 pr3 bb b--white-20">{mid}</td>
        <td className="pv2 pr3 bb b--white-20">{score}</td>
      </tr>
	);
}

export default TeamCard;