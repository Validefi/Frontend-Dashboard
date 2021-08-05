import React, { useState } from 'react';
import {
  Circle,
  FileText,
  Grid,
  Maximize2,
  User,
  Search,
  LogOut,
} from 'react-feather';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [text, setText] = useState('');

  return (
    <div className="page-sidebar">
      <ul className="list-unstyled accordion-menu">
        <li
          className="nav-item dropdown m-r-xs sidebar-search"
          style={{ flex: 1 }}
        >
          <div className="d-flex justify-content-center">
            <div className="input-group flex-nowrap">
              <input
                type="text"
                className="form-control accordion-flush"
                placeholder="Search..."
                aria-label="Search"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                className="input-group-text nav-link search-icon"
                aria-expanded="false"
                style={{ backgroundColor: '#fff' }}
              >
                <Search />
              </button>
            </div>
          </div>
        </li>

        <li className="sidebar-title">
          <NavLink to="/">Wallets</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" activeClassName="active-sidebar-item">
            <Grid />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/explorer" activeClassName="active-sidebar-item">
            <Maximize2 />
            Explorer
          </NavLink>
        </li>
        <li>
          <NavLink to="/coins" activeClassName="active-sidebar-item">
            <Circle />
            Coins
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" activeClassName="active-sidebar-item">
            <FileText />
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="active-sidebar-item">
            <User />
            Profile
          </NavLink>
        </li>
        <li
          onClick={() => {
            sessionStorage.clear();
            window.location.reload();
          }}
        >
          <NavLink to="/">
            <LogOut />
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
