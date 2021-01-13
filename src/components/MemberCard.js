import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const MemberCard = ({image, member, role, facebook, gmail, twitter}) => {
  return (
    <div className="member-card">
      <div className="member-image">
        <img src={image} alt={member}/>
      </div>
      <div className="member-info">
        <p className="member-name">{member}</p>
        <p className="member-role">{role}</p>
        <div className="member-contacts">
          <FontAwesomeIcon icon={faCoffee} />
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
