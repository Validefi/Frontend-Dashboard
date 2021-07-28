import React from 'react';
import {
  Circle,
  FileText,
  Grid,
  Maximize2,
  Monitor,
  User,
} from 'react-feather';

const Sidebar = () => {
  return (
    <div class="page-sidebar">
      <ul class="list-unstyled accordion-menu">
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
