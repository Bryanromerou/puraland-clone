import React from 'react';
import ServicesCard from '../components/ServicesCard';
import { faLightbulb, faBolt, faDesktop, faInfinity } from '@fortawesome/free-solid-svg-icons'


const Services = () => {

  const layouts = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type .";
  const features = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type .";
  const design = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type .";
  const more = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type .";

  return (
    <div className="services-container">
      <div className="services-info">
        <h5>Suite of features that make Pura one of the best agency on <span> 2021.</span></h5>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, aliquam tempora perferendis delectus cum maiores esse blanditiis libero. Repellat nam magnam architecto velit quibusdam unde cum non id consectetur?</p>
      </div>
      <div className="services-cards">
        <ServicesCard icon = {faLightbulb} title="Unique layouts" text={layouts}/>
        <ServicesCard icon = {faBolt} title="New features" text={features}/>
        <ServicesCard icon = {faDesktop} title="Responsive design" text={design}/>
        <ServicesCard icon = {faInfinity} title={`And more & more ...`} text={more}/>
      </div>
    </div>
  );
}

export default Services;
