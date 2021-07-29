/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import {
  ArrowLeft,
  Search,
  BellOff,
  User,
  Inbox,
  Activity,
  LogOut,
} from 'react-feather';
import { connect } from 'react-redux';
import { toggleSidebar } from '../../Store/actionCreatos/settings';
import Image from '../../assets/logo.png';

const TopHeader = ({ isSidebarVisible, toggleSidebar }) => {
  const [text, setText] = useState('');
  const toggle = () => {
    toggleSidebar(!isSidebarVisible);
  };
  return (
    <div className="page-header">
      <nav className="navbar navbar-expand-lg d-flex justify-content-between">
        <div className="" id="navbarNav">
          <ul className="navbar-nav" id="leftNav">
            <li className="nav-item">
              <a className="nav-link" id="sidebar-toggle">
                <ArrowLeft onClick={toggle} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Settings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Help</a>
            </li>
          </ul>
        </div>
        <div className="" id="headerNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown m-r-xs">
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
                    // style={{ color: 'inherit' }}
                  >
                    <Search />
                  </button>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <div class="d-flex justify-content-center">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Network
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link notifications-dropdown bg-primary text-white"
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
                <a>
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
                <a>
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
                id="profileDropDown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={Image} alt="" />
              </a>
              <div
                className="dropdown-menu dropdown-menu-end profile-drop-menu"
                aria-labelledby="profileDropDown"
              >
                <a className="dropdown-item">
                  <User />
                  Profile
                </a>
                <a className="dropdown-item">
                  <Inbox />
                  Messages
                </a>
                <a className="dropdown-item">
                  <Activity />
                  Activities
                  <span className="badge rounded-pill bg-success">12</span>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item">
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

const mapStateToProps = (state) => ({
  isSidebarVisible: state.settings.isSidebarVisible,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSidebar: (isSidebarVisible) => {
    dispatch(toggleSidebar(isSidebarVisible));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TopHeader);
