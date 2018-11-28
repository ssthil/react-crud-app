import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-custom ">
    <div className="container-fluid">
      <span className="navbar-brand mb-0 h1">
        React User Management Application
      </span>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact to="/users" className="nav-link" activeClassName="selected">
              Users <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/groups" className="nav-link" activeClassName="selected">
              Groups
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
