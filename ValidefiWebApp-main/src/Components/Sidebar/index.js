import React, { useState } from 'react';
import {
  Circle,
  FileText,
  Grid,
  Maximize2,
  User,
  Search,
  Sun,
  Moon,
} from 'react-feather';
import { NavLink } from 'react-router-dom';
import TextInput from '../../Utils/TextInput';
import { toggleSidebar } from '../../Store/actionCreatos/settings';
import { useDispatch } from 'react-redux';
import { useWeb3React } from '@web3-react/core';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import './sidebar.css';

const Sidebar = () => {
  const { themes, currentTheme, switcher } = useThemeSwitcher();
  const [isDarkMode, setIsDarkMode] = useState(currentTheme === 'dark');

  const toggleTheme = (isDarkMode) => {
    switcher({ theme: isDarkMode ? themes.light : themes.dark });
    setIsDarkMode(!isDarkMode);
  };

  const dispatch = useDispatch();
  const { account } = useWeb3React();

  const handleSubmit = (text) => {
    console.log(text);
  };
  const navItems = {
    Dashboard: { to: '/dashboard', icon: <Grid /> },
    Explorer: { to: '/explorer', icon: <Maximize2 /> },
    Coins: { to: '/coins', icon: <Circle /> },
    Portfolio: { to: '/portfolio', icon: <FileText /> },
    Profile: { to: '/profile', icon: <User /> },
  };

  const toggle = () => {
    dispatch(toggleSidebar(true));
  };
  return (
    <div className="page-sidebar">
      <ul className="list-unstyled accordion-menu position-relative">
        <li
          className="nav-item dropdown m-r-xs sidebar-search"
          style={{ flex: 1 }}
        >
          <div className="d-flex justify-content-center mb-4">
            <TextInput handleSubmit={handleSubmit} icon={<Search />} />
          </div>
        </li>
        {Object.keys(navItems).map((navItem) => (
          <li key={navItem}>
            <NavLink
              to={navItems[navItem]['to']}
              activeClassName="active-sidebar-item"
              onClick={toggle}
            >
              {navItems[navItem]['icon']}
              {navItem}
            </NavLink>
          </li>
        ))}
        <li className="sidebar-title sidebar-search">Wallet Address</li>
        <li className="nav-item sidebar-search" style={{ flex: 1 }}>
          <div className="d-flex">
            <span className="form-control form-text account-sidebar">
              {`${account?.slice(0, 12)}...${account?.slice(-3)}`}
            </span>
          </div>
        </li>
        <li
          className="mt-2 position-absolute theme-sidebar"
          onClick={() => toggleTheme(isDarkMode)}
          style={{
            color: isDarkMode ? '#7888fc' : 'rgb(120, 136, 252)',
            backgroundColor: isDarkMode ? '#2b3b52' : 'rgb(243, 246, 249)',
          }}
        >
          <span>{isDarkMode ? <Moon /> : <Sun />}</span>
          {isDarkMode ? 'Dark' : 'Light'}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
