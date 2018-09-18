import React, { Component } from 'react';

import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav>
        {/* <div className="theme-switcher">
          <button/>
          <div className="color-me">Color Me</div>
        </div> */}
        <div className="menu">
          <div className="menu_about">
            About
          </div>
          <div className="menu_portfolio">
            Portfolio
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;
