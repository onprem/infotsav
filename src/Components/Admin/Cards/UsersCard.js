import React from 'react';
import { AccordionItem, AccordionItemTitle, AccordionItemBody } from 'react-accessible-accordion';

const UsersCard = ({serial, ifid, name, gender, college, city, email, mobile, confirm }) => {
	return(
      <AccordionItem>
        <AccordionItemTitle>
          <span>{serial}.</span>
          <span>{ifid}</span>
          <span>{name}</span>
          {(confirm)?
            <span className="fas fa-check-circle" style={{color: 'rgb(40, 246, 40)'}}></span>
          :
            <span className="fas fa-times-circle" style={{color: '#d22a2a'}}></span>
          }
        </AccordionItemTitle>
        <AccordionItemBody>
          <div className="acc-body-div">
            <span>{college}</span>
            <span>{city}</span>
          </div>
          <div className="acc-body-div">
            <span><a href={"mailto:"+email}>{email}</a></span>
            <span><a href={"tel:"+mobile}>{mobile}</a></span>
          </div>
        </AccordionItemBody>
      </AccordionItem>
	);
}

export default UsersCard;