import React from 'react';
import Nav from '../Nav/Nav';
// import SocialMedia from '@SocialMedia/SocialMedia';

const LandingPage = () => {

  return (
    <div className="landing-page">
      <Nav/>
      <main>
        <div className="intro-wrapper">
          <div className="intro-name">Hello, I'm Sean! =)</div>
          <div className="tagline">
            Web Dev | UX Design | Open-Source Enthusiast
          </div>
            {/* <SocialMedia/> */}
        </div>
      </main>
    </div>
  )
}

export default LandingPage;
