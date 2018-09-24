import React from 'react';
import './PortfolioItem.css'

const PortfolioItem = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-row">
        <div className="portfolio-item">
          <div className="project-title">
            Tic-Tac-Toe
          </div>
          <div className="item-desc">
            Tic-Tac-Toe playable in the console
          </div>
          <div className="item-link">
            <a target="_blank" rel="noopener noreferrer" href="">project</a>
            <a target="_blank" rel="noopener noreferrer" href="">github</a>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="project-title">
            Towers of Hanoi
          </div>
          <div className="item-desc">
            Towers of Hanoi playable in the console
          </div>
          <div className="item-link">
            <a target="_blank" rel="noopener noreferrer" href="">project</a>
            <a target="_blank" rel="noopener noreferrer" href="">github</a>
          </div>
        </div>
      </div>

      <div className="portfolio-row">
        <div className="portfolio-item">
          <div className="project-title">
            Checkers
          </div>
          <div className="item-desc">
            Checkers playable in the console
          </div>
          <div className="item-link">
            <a target="_blank" rel="noopener noreferrer" href="">project</a>
            <a target="_blank" rel="noopener noreferrer" href="">github</a>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="project-title">
            Future Project
          </div>
          <div className="item-desc">
            Coming soon...
          </div>
          <div className="item-link">
            <a target="_blank" rel="noopener noreferrer" href="">project</a>
            <a target="_blank" rel="noopener noreferrer" href="">github</a>
          </div>
        </div>
      </div>

      <div className="portfolio-row">
        <div className="portfolio-item">
          <div className="project-title">
            Future Project
          </div>
          <div className="item-desc">
            Coming soon...
          </div>
          <div className="item-link">
            <a target="_blank" rel="noopener noreferrer" href="">project</a>
            <a target="_blank" rel="noopener noreferrer" href="">github</a>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="project-title">
            Future Project
          </div>
          <div className="item-desc">
            Coming soon...
          </div>
          <div className="item-link">
            <a target="_blank" rel="noopener noreferrer" href="">project</a>
            <a target="_blank" rel="noopener noreferrer" href="">github</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem;
