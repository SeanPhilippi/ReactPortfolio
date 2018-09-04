import React, { Component } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import AboutPage from './components/AboutPage/AboutPage';
import PortfolioPage from './components/PortfolioPage/PortfolioPage';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import Footer from './components/Footer/Footer';
import SocialMedia from './components/SocialMedia/SocialMedia';

export default class App extends Component {

  render() {
    return (
      <div className="dev-landing-page">
        <ThemeSwitcher>
          <SocialMedia/>
          <LandingPage/>
          <AboutPage/>
          <PortfolioPage/>
          <Footer/>
        </ThemeSwitcher>
      </div>
    );
  }
}
