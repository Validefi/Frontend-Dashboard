import React, { useState } from 'react';
import {
  Circle,
  FileText,
  Grid,
  Maximize2,
  Monitor,
  User,
  Search,
} from 'react-feather';

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
          <a href="calendar.html">Wallets</a>
        </li>
        <li>
          <a href="calendar.html">
            <Grid />
            Dashboard
          </a>
        </li>
        <li>
          <a href="calendar.html">
            <Maximize2 />
            Explorer
          </a>
        </li>
        <li className="active-page">
          <a href="calendar.html">
            <Monitor />
            Monitor
          </a>
        </li>
        <li>
          <a href="calendar.html">
            <Circle />
            Coins
          </a>
        </li>
        <li>
          <a href="calendar.html">
            <FileText />
            Portfolio
          </a>
        </li>
        <li>
          <a href="calendar.html">
            <User />
            Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
