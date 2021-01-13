import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServicesCard = ({icon, title, text}) => {
  return (
    <div className="services-card">
      <FontAwesomeIcon icon={icon}/>
      <p className="service-card-title">{title}</p>
      <p>{text}</p>
    </div>
  );
}

export default ServicesCard;
