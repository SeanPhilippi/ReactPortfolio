import React from 'react';
import Nav from './Nav/Nav';

import './Nav.css';

export default const LandingPage = () => {

  return (
    <div className="landing-page">
      <Nav/>
      <main>
        <div className="intro-wrapper">
          <div className="intro-name">Hello, I'm Sean! =)</div>
          <div className="tagline">
            Web Dev | UX Design | Open-Source Enthusiast
          </div>
            <SocialIcons/>
        </div>
      </main>
    </div>
  )
}
