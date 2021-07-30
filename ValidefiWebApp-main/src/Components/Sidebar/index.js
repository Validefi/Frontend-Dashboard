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
    <div class="page-sidebar">
      <ul class="list-unstyled accordion-menu">
        <li
          className="nav-item dropdown m-r-xs sidebar-search"
          style={{ flex: 1 }}
        >
          <div class="d-flex justify-content-center">
            <div class="input-group flex-nowrap">
              <input
                type="text"
                class="form-control accordion-flush"
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

        <li class="sidebar-title">
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
        <li class="active-page">
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
