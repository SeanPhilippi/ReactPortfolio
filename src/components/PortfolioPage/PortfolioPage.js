import React from 'react';
import PortfolioItem from './PortfolioItem';

import './PortfolioPage.css';

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      <div className="content-grid">
        <h1>Portfolio</h1>
        <div className="portfolio-wrapper">
          <PortfolioItem/>
        </div>
      </div>
    </div>
  )
}

export default PortfolioPage;
