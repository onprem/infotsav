import React from 'react';

const TeamCard = ({serial, ifid, teamid, amount, date}) => {
	return(
      <tr className='hover-bg-black-10'>
        <td className="pv3 pl2 pr2 pr3 bb b--white-20">{serial}.</td>
        <td className="pv3 pr3 bb b--white-20">{ifid}</td>
        <td className="pv3 pr3 bb b--white-20">{teamid}</td>
        <td className="pv3 pr3 bb b--white-20">{amount}</td>
        <td className="pv3 pr3 bb b--white-20">{date}</td>
      </tr>
	);
}

export default TeamCard;