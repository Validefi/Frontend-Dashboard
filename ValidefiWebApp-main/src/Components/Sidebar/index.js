import React from 'react';
import { Circle, FileText, Grid, Maximize2, User, Search } from 'react-feather';
import { NavLink } from 'react-router-dom';
import TextInput from '../../Utils/TextInput';

const Sidebar = () => {
  // const { deactivate } = useWeb3React();

  const handleSubmit = (text) => {
    console.log(text);
  };
  const navItems = {
    Dashboard: { to: '/dashboard', icon: <Grid /> },
    Explorer: { to: '/explorer', icon: <Maximize2 /> },
    Coins: { to: '/coins', icon: <Circle /> },
    Portfolio: { to: '/portfolio', icon: <FileText /> },
    Profile: { to: '/profile', icon: <User /> },
    // LogOut: { to: '/', icon: <Logout /> },
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
        {Object.keys(navItems).map((navItem) => (
          <li key={navItem}>
            <NavLink
              to={navItems[navItem]['to']}
              activeClassName="active-sidebar-item"
            >
              {navItems[navItem]['icon']}
              {navItem}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
