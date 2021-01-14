import React from 'react';
import AboutCard from '../components/AboutCard';
import Button from '../components/Button';

const About = () => {

  const about_one = "Proin facilisis varius nunc. Curabitur eros risus, ultrices et dui ut, luctus acfffcumsan nibh. Fusce convallis sapien placerat tellus suscipit vehicula.";
  const about_two = about_one;
  const about_three = about_one;



  return (
    <div id="about-container">
      <div className="about-us">
        <h4>About us.</h4>
        <p>Pura comes with 11 unique and stunning demos. We have crafted each and every demo with extensive care and precision and the theme is power packed yet easy to use.</p>
        <Button text="Portfolio"/>
      </div>

      <div className="about-cards-container">
        <AboutCard number="01" title="Design" text = {about_one}/>
        <AboutCard number="02" title="New Ideas" text = {about_two}/>
        <AboutCard number="03" title="Trending" text = {about_three}/>
      </div>
    </div>
  );
}

export default About;
