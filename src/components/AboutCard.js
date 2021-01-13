import React from 'react';

const AboutCard = ({number, title, text}) => {
  return (
    <div className="about-card">
      <p className="about-number">{number}</p>
      <p className="card-title">{title}</p>
      <p className="card-text">{text}</p>
    </div>
  );
}

export default AboutCard;
