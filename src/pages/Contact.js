import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCrow, faSearch, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div id="contact-container">
      <div className="contact-pura">
        <h5><span>Pura</span> Agency.</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae possimus cupiditate earum officiis tempore doloribus dolorum sunt vitae, quos asperiores maxime eaque facilis consequuntur perferendis.</p>
      </div>

      <div className="contact-us">
        <p className="contact-title">Reach us</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className="contact-details">
          <p className="contact-info">
            <FontAwesomeIcon icon={faEnvelope}/>support@themeptation.com
          </p>
          <p className="contact-info">
            <FontAwesomeIcon icon={faPhone}/>+001-123-456-7890
          </p>
          <div className="contact-link">
            <FontAwesomeIcon icon={faSearch} />
            <FontAwesomeIcon icon={faBook} />
            <FontAwesomeIcon icon={faCrow} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
