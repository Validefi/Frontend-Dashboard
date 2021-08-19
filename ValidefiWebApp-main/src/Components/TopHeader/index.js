import React, { useState } from 'react';
import { ArrowLeft, Moon, Search, Sun } from 'react-feather';
import { connect } from 'react-redux';
import { toggleSidebar } from '../../Store/actionCreatos/settings';
import Select from 'react-select';
import Logo from '../../assets/logo1.svg';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import Loading from '../Loading';
import TextInput from '../../Utils/TextInput';
import { showAlert } from '../../Utils/Alert';
import { useWeb3React } from '@web3-react/core';

const TopHeader = ({ isSidebarVisible, toggleSidebar }) => {
  const { switcher, themes, currentTheme, status } = useThemeSwitcher();
  const [isDarkMode, setIsDarkMode] = useState(currentTheme === 'dark');
  const { account, chainId } = useWeb3React();

  if (status === 'loading') {
    return <Loading />;
  }
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: isDarkMode ? '#253345' : '#fff',
    }),
    option: (provided, state) => ({
      ...provided,
      color: isDarkMode
        ? state.isSelected
          ? 'rgba(225, 235, 245, 0.87)'
          : 'rgba(225, 235, 245, 0.4)'
        : state.isSelected
        ? 'white'
        : '#5b5b5b',
      backgroundColor: isDarkMode
        ? state.isSelected
          ? '#212d3d'
          : '#253345'
        : state.isSelected
        ? '#7888fc'
        : '#fff',
    }),
  };
  const options = [
    { value: 'ETH', label: 'Ethereum Mainnet' },
    { value: 'BSC', label: 'Binance Smart Chain' },
  ];
  const toggle = () => {
    toggleSidebar(!isSidebarVisible);
  };

  const toggleTheme = (isDarkMode) => {
    switcher({ theme: isDarkMode ? themes.light : themes.dark });
    setIsDarkMode(!isDarkMode);
  };

  const handleSubmit = (text) => console.log(text);

  const changeNetwork = async (option) => {
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        window.ethereum._handleChainChanged({
          chainId: option.value === 'ETH' ? 0x1 : 0x38,
          networkVersion: option.value === 'ETH' ? 1 : 56,
        });
      } catch (error) {
        showAlert('Please try again', 'error');
      }
    }
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
                <TextInput handleSubmit={handleSubmit} icon={<Search />} />
              </div>
            </li>
            <li
              className="nav-item dropdown dashboard-dropdown"
              style={{ width: '30%' }}
            >
              <Select
                styles={customStyles}
                defaultValue={options[chainId === 1 || chainId === 0x1 ? 0 : 1]}
                isSearchable={false}
                onChange={changeNetwork}
                options={options}
              />
            </li>
            <li
              className="nav-item dropdown dashboard-dropdown"
              style={{ width: '20%', marginLeft: '8px' }}
            >
              <div className="d-flex justify-content-center">
                <span
                  className="form-control form-text"
                  style={{
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textAlign: 'center',
                  }}
                >
                  {`${account?.slice(0, 8)}...${account?.slice(-3)}`}
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
});

const mapDispatchToProps = (dispatch) => ({
  toggleSidebar: (isSidebarVisible) => {
    dispatch(toggleSidebar(isSidebarVisible));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TopHeader);
