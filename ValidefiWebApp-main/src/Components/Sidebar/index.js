import React, { useState } from 'react';
import {
  Circle,
  FileText,
  Grid,
  Maximize2,
  Monitor,
  User,
  Search,
  LogOut,
} from 'react-feather';
import { Link } from 'react-router-dom';

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
          <Link to="calendar.html">Wallets</Link>
        </li>
        <li className="active-page">
          <Link to="/dashboard">
            <Grid />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/explorer">
            <Maximize2 />
            Explorer
          </Link>
        </li>
        <li>
          <Link to="/coins">
            <Circle />
            Coins
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            <FileText />
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <User />
            Profile
          </Link>
        </li>
        <li
          onClick={() => {
            sessionStorage.clear();
            window.location.reload();
          }}
        >
          <Link to="/">
            <LogOut />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
