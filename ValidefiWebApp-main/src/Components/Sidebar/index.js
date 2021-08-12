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
import TextInput from '../../Utils/TextInput';

const Sidebar = () => {
  const handleSubmit = (text) => {
    console.log(text);
  };

  return (
    <div className="page-sidebar">
      <ul className="list-unstyled accordion-menu">
        <li
          className="nav-item dropdown m-r-xs sidebar-search"
          style={{ flex: 1 }}
        >
          <div className="d-flex justify-content-center mb-4">
            <TextInput handleSubmit={handleSubmit} icon={<Search />} />
          </div>
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
