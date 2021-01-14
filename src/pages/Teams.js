import React from 'react';
import Button from '../components/Button';
import MemberCard from '../components/MemberCard';

const Teams = () => {
  const facebook = "https://www.facebook.com/";
  const google = "https://www.google.com/";
  const twitter = "https://www.twitter.com/";

  return (
    <div id="team-container">
      <h4>Our Team</h4>
      <div className="member-cards-container">
        <MemberCard image = "https://unsplash.it/200/400" member="Mark John" role="Devoloper" facebook={facebook} google={google} twitter={twitter}/>
        <MemberCard image = "https://unsplash.it/200/400" member="Sarah Levo" role="Designer" facebook={facebook} google={google} twitter={twitter}/>
        <MemberCard image = "https://unsplash.it/200/400" member="Xavi Miko" role="CEO" facebook={facebook} google={google} twitter={twitter}/>
      </div>

      <div className="solutions">
        
        <div className="solution-image">
          <img src="https://unsplash.it/400" alt="solutions"/>
        </div>

        <div className="solutions-info">
            <p className="solution-title">
              Innovative solutions to boost your creative{" "}<span>projects.</span>
            </p>
            <p>
              Proin ex orci, feugiat sit amet diam ac, tincidunt imperdiet urna.Donec sed quam at tortor aliquam  rutrum sit amet tempus enim. Fusce consectetur  lorem eu tellus semper ornare. Nullam purus leo, imperdiet eget tempus a, mattis vitae eros.
            </p>
            <Button text="Button Text"/>
        </div>

      </div>
    </div>
  );
}

export default Teams;
