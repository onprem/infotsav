import React from 'react';

const EventCard = ({serial, ifid, name, mobile, email, college, teamid}) => {
	return(
      <tr className='hover-bg-black-10'>
        <td className="pv3 pl2 pr2 pr3 bb b--white-20">{serial}.</td>
        <td className="pv3 pr3 bb b--white-20">{ifid}</td>
        <td className="pv3 pr3 bb b--white-20">{name}</td>
        <td className="pv3 pr3 bb b--white-20">{mobile}</td>
        <td className="pv3 pr3 bb b--white-20">{college}</td>
        <td className="pv3 pr3 bb b--white-20">{email}</td>
        <td className="pv3 pr3 bb b--white-20">{teamid}</td>
      </tr>
	);
}

export default EventCard;