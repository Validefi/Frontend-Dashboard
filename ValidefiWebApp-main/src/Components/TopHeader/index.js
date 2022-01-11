import React, { useEffect, useState } from 'react';
import { ArrowLeft, Search } from 'react-feather';
import { connect } from 'react-redux';
import { useWeb3React } from '@web3-react/core';
import Select from 'react-select';
import { toggleSidebar } from '../../Store/actionCreatos/settings';
import { toggleNetwork } from '../../Store/actionCreatos/auth';
import Logo from '../../assets/logo1.svg';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import Loading from '../Loading';
import TextInput from '../../Utils/TextInput';
import Gas from '../../assets/gas.svg';
import { fetchGas } from '../../Store/actionCreatos/utils';

const TopHeader = ({
  isSidebarVisible,
  toggleSidebar,
  isEthereum,
  toggleNetwork,
  gasPrice,
  fetchGasPrice,
}) => {
  const { currentTheme, status } = useThemeSwitcher();
  const [isDarkMode] = useState(currentTheme === 'dark');
  const { account } = useWeb3React();

  useEffect(() => {
    fetchGasPrice(isEthereum);
  }, [fetchGasPrice, isEthereum]);

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

  const handleSubmit = (text) => console.log(text);

  const changeNetwork = (option) => {
    if (option.value === 'ETH') {
      toggleNetwork(true);
    } else {
      toggleNetwork(false);
    }
  };

  return (
    <div className="page-header">
      <nav className="navbar d-flex justify-content-between">
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
                defaultValue={options[isEthereum ? 0 : 1]}
                isSearchable={false}
                onChange={(option) => changeNetwork(option)}
                options={options}
              />
            </li>
            <li
              className="nav-item dropdown dashboard-dropdown dashboard-search"
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
              className="nav-item dropdown dashboard-dropdown dashboard-search"
              style={{ marginLeft: '8px' }}
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
                  <img src={Gas} alt="Gas Price" width={15} className="mx-1" />
                  {`${
                    Math.round((gasPrice + Number.EPSILON) * 100) / 100
                  } GWei`}
                </span>
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
  isEthereum: state.auth.isEthereum,
  gasPrice: state.utils.gasPrice,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSidebar: (isSidebarVisible) => {
    dispatch(toggleSidebar(isSidebarVisible));
  },
  toggleNetwork: (isEthereum) => {
    dispatch(toggleNetwork(isEthereum));
  },
  fetchGasPrice: (isEthereum) => {
    dispatch(fetchGas(isEthereum));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TopHeader);
