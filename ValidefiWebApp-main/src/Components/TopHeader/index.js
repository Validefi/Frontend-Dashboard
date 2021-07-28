/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  ArrowLeft,
  Search,
  BellOff,
  User,
  Inbox,
  Activity,
  LogOut,
} from 'react-feather';

const TopHeader = () => {
  return (
    <div className="page-header">
      <nav className="navbar navbar-expand-lg d-flex justify-content-between">
        <div className="" id="navbarNav">
          <ul className="navbar-nav" id="leftNav">
            <li className="nav-item">
              <a className="nav-link" id="sidebar-toggle" href="#">
                <ArrowLeft />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Help
              </a>
            </li>
          </ul>
        </div>
        <div className="logo">
          <a className="navbar-brand"></a>
        </div>
        <div className="" id="headerNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link search-dropdown"
                href="#"
                id="searchDropDown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Search />
              </a>
              <div
                className="dropdown-menu dropdown-menu-end dropdown-lg search-drop-menu"
                aria-labelledby="searchDropDown"
              >
                <form>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Type something.."
                    aria-label="Search"
                  />
                </form>
                <h6 className="dropdown-header">Recent Searches</h6>
                <a className="dropdown-item" href="#">
                  charts
                </a>
                <a className="dropdown-item" href="#">
                  new orders
                </a>
                <a className="dropdown-item" href="#">
                  file manager
                </a>
                <a className="dropdown-item" href="#">
                  new users
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link notifications-dropdown"
                href="#"
                id="notificationsDropDown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                3
              </a>
              <div
                className="dropdown-menu dropdown-menu-end notif-drop-menu"
                aria-labelledby="notificationsDropDown"
              >
                <h6 className="dropdown-header">Notifications</h6>
                <a href="#">
                  <div className="header-notif">
                    <div className="notif-image">
                      <span className="notification-badge bg-info text-white">
                        <BellOff />
                      </span>
                    </div>
                    <div className="notif-text">
                      <p className="bold-notif-text">
                        faucibus dolor in commodo lectus mattis
                      </p>
                      <small>19:00</small>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="header-notif">
                    <div className="notif-image">
                      <span className="notification-badge bg-primary text-white">
                        <BellOff />
                      </span>
                    </div>
                    <div className="notif-text">
                      <p className="bold-notif-text">
                        faucibus dolor in commodo lectus mattis
                      </p>
                      <small>18:00</small>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="header-notif">
                    <div className="notif-image">
                      <span className="notification-badge bg-success text-white">
                        <BellOff />
                      </span>
                    </div>
                    <div className="notif-text">
                      <p>faucibus dolor in commodo lectus mattis</p>
                      <small>yesterday</small>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="header-notif">
                    <div className="notif-image">
                      <span className="notification-badge">
                        <img src="../../assets/error.svg" alt="" />
                      </span>
                    </div>
                    <div className="notif-text">
                      <p>faucibus dolor in commodo lectus mattis</p>
                      <small>yesterday</small>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="header-notif">
                    <div className="notif-image">
                      <span className="notification-badge">
                        <img
                          src="../../assets/images/avatars/profile-image.png"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="notif-text">
                      <p>faucibus dolor in commodo lectus mattis</p>
                      <small>yesterday</small>
                    </div>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link profile-dropdown"
                href="#"
                id="profileDropDown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="../../assets/images/avatars/profile-image.png"
                  alt=""
                />
              </a>
              <div
                className="dropdown-menu dropdown-menu-end profile-drop-menu"
                aria-labelledby="profileDropDown"
              >
                <a className="dropdown-item" href="#">
                  <User />
                  Profile
                </a>
                <a className="dropdown-item" href="#">
                  <Inbox />
                  Messages
                </a>
                <a className="dropdown-item" href="#">
                  <Activity />
                  Activities
                  <span className="badge rounded-pill bg-success">12</span>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  <LogOut /> Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default TopHeader;
