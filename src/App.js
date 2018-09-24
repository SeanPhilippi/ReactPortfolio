import React, { Component } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import AboutPage from './components/AboutPage/AboutPage';
import PortfolioPage from './components/PortfolioPage/PortfolioPage';
import Footer from './components/Footer/Footer';
import SocialMedia from './components/SocialMedia/SocialMedia';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="dev-landing-page">
          <SocialMedia/>
          <LandingPage/>
          <AboutPage/>
          <PortfolioPage/>
          <Footer/>
      </div>
    );
  }
}

export default App;
