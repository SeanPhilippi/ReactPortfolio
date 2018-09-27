import React from 'react';
import './PortfolioItem.css'

const PortfolioItem = () => {
  return (
    <div className="portfolio-wrapper"> 
      <div className="portfolio-item">
        <div className="project-title">
          Tic-Tac-Toe
        </div>
        <div className="item-disc">
          Tic-Tac-Toe playable in the console. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, alias!
        </div>
        <div className="item-link">
          <a target="_blank" rel="noopener noreferrer" href="">project</a>
          <a target="_blank" rel="noopener noreferrer"
            href="https://github.com/SeanPhilippi/javascript-workbook/blob/gh-pages/07week/ticTacToe/script.js">github</a>
        </div>
      </div>
      <div className="portfolio-item">
        <div className="project-title">
          Towers of Hanoi
        </div>
        <div className="item-disc">
          Towers of Hanoi playable in the console. Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
        <div className="item-link">
          <a target="_blank" rel="noopener noreferrer" href="">project</a>
          <a target="_blank" rel="noopener noreferrer"
            href="https://github.com/SeanPhilippi/javascript-workbook/blob/gh-pages/07week/towersOfHanoi/script.js">github</a>
        </div>
      </div>
      <div className="portfolio-item">
        <div className="project-title">
          Checkers
        </div>
        <div className="item-disc">
          Checkers playable in the console. Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
        <div className="item-link">
          <a target="_blank" rel="noopener noreferrer" href="">project</a>
          <a target="_blank" rel="noopener noreferrer"
            href="https://github.com/SeanPhilippi/javascript-workbook/blob/gh-pages/05week/checkers.js">github</a>
        </div>
      </div>
      <div className="portfolio-item">
        <div className="project-title">
          Hacker News
        </div>
        <div className="item-disc">
          Coming soon... Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi!
        </div>
        <div className="item-link">
          <a target="_blank" rel="noopener noreferrer" href="">project</a>
          <a target="_blank" rel="noopener noreferrer"
            href="https://github.com/SeanPhilippi/hackernews">github</a>
        </div>
      </div>
      <div className="portfolio-item">
        <div className="project-title">
          To-do List
        </div>
        <div className="item-disc">
          Coming soon... Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam!
        </div>
        <div className="item-link">
          <a target="_blank" rel="noopener noreferrer" href="">project</a>
          <a target="_blank" rel="noopener noreferrer"
            href="https://github.com/SeanPhilippi/todolist">github</a>
        </div>
      </div>
      <div className="portfolio-item">
        <div className="project-title">
          Future Project
        </div>
        <div className="item-disc">
          Coming soon... Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad.
        </div>
        <div className="item-link">
          <a target="_blank" rel="noopener noreferrer" href="">project</a>
          <a target="_blank" rel="noopener noreferrer" href="">github</a>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem;
