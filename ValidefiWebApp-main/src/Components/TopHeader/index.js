import React, { useLayoutEffect, useState } from 'react';
import { ArrowLeft, Moon, Search, Sun } from 'react-feather';
import { connect } from 'react-redux';
import { toggleSidebar } from '../../Store/actionCreatos/settings';
import { setNetwork } from '../../Store/actionCreatos/auth';
import Select from 'react-select';
import Logo from '../../assets/logo1.svg';
import { toggleThemeMode } from '../../Store/actionCreatos/settings';
import { useThemeSwitcher } from 'react-css-theme-switcher';

const TopHeader = ({
  network,
  setNetwork,
  isSidebarVisible,
  toggleSidebar,
  wallet_address,
  toggleMode,
  mode,
}) => {
  const [text, setText] = useState('');
  const { switcher, themes, currentTheme, status } = useThemeSwitcher();
  const [isDarkMode, setIsDarkMode] = useState(currentTheme === 'dark');

  if (status === 'loading') {
    return <></>;
  }
  // const [mode, setMode] = useState('light');

  // useLayoutEffect(() => {
  //   if (
  //     localStorage.getItem('theme') === 'light' ||
  //     localStorage.getItem('theme') === 'dark'
  //   ) {
  //     setMode(localStorage.getItem('theme'));
  //   }
  // }, []);
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'white' : '#5b5b5b',
      backgroundColor: state.isSelected ? '#7888fc' : '#fff',
    }),
  };
  const options = [
    { value: 'Ethereum Mainnet', label: 'Ethereum Mainnet' },
    { value: 'Binance Smart Chain', label: 'Binance Smart Chain' },
  ];
  const toggle = () => {
    toggleSidebar(!isSidebarVisible);
  };

  // const toggleTheme = () => {
  //   const newMode = mode === 'light' ? 'dark' : 'light';
  //   localStorage.setItem('theme', newMode);
  //   // setMode(newMode);
  //   toggleMode(newMode);
  // };
  const toggleTheme = (isDarkMode) => {
    switcher({ theme: isDarkMode ? themes.light : themes.dark });
    setIsDarkMode(!isDarkMode);
  };
  console.log(currentTheme, isDarkMode);
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
            <div className="logo align-items-center">
              <img src={Logo} alt="MetaMask" height="55px" width="auto" />
            </div>
          </ul>
        </div>

        <div id="headerNav">
          <ul className="navbar-nav w-100 align-items-center">
            <li
              className="nav-item dropdown m-r-xs dashboard-search"
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
            <li
              className="nav-item dropdown dashboard-dropdown"
              style={{ width: '30%' }}
            >
              <Select
                styles={customStyles}
                defaultValue={network}
                isSearchable={false}
                onChange={setNetwork}
                options={options}
              />
            </li>
            <li
              className="nav-item dropdown dashboard-dropdown"
              style={{ width: '20%', marginLeft: '8px' }}
            >
              <div className="d-flex justify-content-center">
                <span
                  className="form-control accordion-flush"
                  style={{
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textAlign: 'center',
                  }}
                >
                  {`${wallet_address?.slice(0, 8)}...${wallet_address?.slice(
                    -3
                  )}`}
                </span>
              </div>
            </li>
            <li
              style={{ marginLeft: '12px', cursor: 'pointer' }}
              onClick={() => toggleTheme(isDarkMode)}
            >
              {isDarkMode ? <Moon /> : <Sun />}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isSidebarVisible: state.settings.isSidebarVisible,
  mode: state.settings.mode,
  network: state.auth.network,
  wallet_address: state.auth.wallet_address,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSidebar: (isSidebarVisible) => {
    dispatch(toggleSidebar(isSidebarVisible));
  },
  setNetwork: (network) => {
    dispatch(setNetwork(network));
  },
  toggleMode: (mode) => {
    dispatch(toggleThemeMode(mode));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TopHeader);
