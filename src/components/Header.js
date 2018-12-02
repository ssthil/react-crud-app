import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-custom ">
    <div className="container-fluid">
      <span className="navbar-brand mb-0 h1 margin-right-sm">
        User Management App
      </span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <div
        className="collapse navbar-collapse justify-content-start"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              exact
              to="/users"
              className="nav-link"
              activeClassName="selected"
            >
              USERS <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/groups"
              className="nav-link"
              activeClassName="selected"
            >
              GROUPS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/assigned_users"
              className="nav-link"
              activeClassName="selected"
            >
              ASSIGNED USERS
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
