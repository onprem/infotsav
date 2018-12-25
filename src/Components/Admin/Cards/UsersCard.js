import React from 'react';

const UsersCard = ({serial, ifid, name, gender, college, city, email, mobile, confirm }) => {
	return(
      <tr className='hover-bg-black-10'>
        <td className="pv3 pl2 pr2 pr3 bb b--white-20">{serial}.</td>
        <td className="pv3 pr3 bb b--white-20">{ifid}</td>
        <td className="pv3 pr3 bb b--white-20">{name}</td>
        <td className="pv3 pr3 bb b--white-20">{gender}</td>
        <td className="pv3 pr3 bb b--white-20">{college}</td>
        <td className="pv3 pr3 bb b--white-20">{city}</td>
        <td className="pv3 pr3 bb b--white-20"><a href={"mailto:"+email}>{email}</a></td>
        <td className="pv3 pr3 bb b--white-20"><a href={"tel:"+mobile}>{mobile}</a></td>
        {(confirm)?
        	<td className="pv3 pr3 bb b--white-20"><span className="fas fa-check-circle" style={{color: 'rgb(40, 246, 40)'}}></span></td>
          :
        	<td className="pv3 pr3 bb b--white-20"><span className="fas fa-times-circle" style={{color: '#d22a2a'}}></span></td>
        }
      </tr>
	);
}

export default UsersCard;