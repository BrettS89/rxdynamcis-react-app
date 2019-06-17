import React from 'react';
import { Link } from 'react-router-dom'

export default function HeaderView({ logout, navigateToLogin }) {
  return (
    <div className="nav-container">
      <div className="nav-content">
        <div className="nav-logo">
          Rx Dynamics
        </div>
        <div className="right-nav">
          <div className="right-nav-item">
          <Link to="/dashboard">Open Requests</Link>
          </div>
          <div className="right-nav-item">
            Transfer history
          </div>
          <div className="right-nav-item">
            <Link to="/login">Log out</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
