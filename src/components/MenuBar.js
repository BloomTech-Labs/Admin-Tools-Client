import React from 'react';
import './MenuBar.css';
import { Link } from 'react-router-dom';

export default () => (
  <div className="menu-header">
    <ul className="menu-row">
      <li className="menu-item">
        <Link to="/">
          <img className="lambda-icon"
             src="https://lambdaschool.com/assets/img/lambdawhite.png"
             alt="lambda icon"
          />
        </Link>
      </li>
      <li className="menu-item">
        <Link to="/pull-requests">
          <p className="menu-text">Pull Requests</p>
        </Link>
      </li>
    </ul>
  </div>
)