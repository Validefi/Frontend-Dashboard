import React, { useState } from 'react';
import { ArrowLeft, Search } from 'react-feather';
import { connect } from 'react-redux';
import { toggleSidebar } from '../../Store/actionCreatos/settings';
import { setNetwork } from '../../Store/actionCreatos/auth';
import Select from 'react-select';
import { Link } from 'react-router-dom';

const TopHeader = ({
  network,
  setNetwork,
  isSidebarVisible,
  toggleSidebar,
}) => {
  const [text, setText] = useState('');
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'white' : '#7888fceb',
      backgroundColor: state.isSelected ? '#7888fca3' : '#fff',
    }),
  };
  const options = [
    { value: 'Ethereum Mainnet', label: 'Ethereum Mainnet' },
    { value: 'Ropsten Test Network', label: 'Ropsten Test Network' },
    { value: 'Kovan Test Network', label: 'Kovan Test Network' },
  ];
  const toggle = () => {
    toggleSidebar(!isSidebarVisible);
  };

  return (
    <div className="page-header">
      <nav className="navbar navbar-expand-lg d-flex justify-content-between">
        <div id="navbarNav">
          <ul className="navbar-nav" id="leftNav">
            <li
              className="nav-item nav-link"
              onClick={toggle}
              id="sidebar-toggle"
            >
              <ArrowLeft />
            </li>
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Help
              </Link>
            </li>
          </ul>
        </div>
        <div id="headerNav">
          <ul className="navbar-nav w-100">
            <li
              className="nav-item dropdown m-r-xs dashboard-search"
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
            <li
              className="nav-item dropdown dashboard-dropdown"
              style={{ flex: 1 }}
            >
              <Select
                styles={customStyles}
                defaultValue={network}
                onChange={setNetwork}
                options={options}
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isSidebarVisible: state.settings.isSidebarVisible,
  network: state.auth.network,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSidebar: (isSidebarVisible) => {
    dispatch(toggleSidebar(isSidebarVisible));
  },
  setNetwork: (network) => {
    dispatch(setNetwork(network));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TopHeader);
