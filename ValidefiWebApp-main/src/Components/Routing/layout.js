import React, { lazy, useEffect, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { injected } from '../Connectors';
import { useWeb3React } from '@web3-react/core';
import { showAlert } from '../../Utils/Alert';

const TopHeader = lazy(() => import('../TopHeader'));
// const BottomHeader = lazy(() => import('../BottomHeader'));
const Sidebar = lazy(() => import('../Sidebar'));

const Layout = (params) => {
  const { children, layout, setAddress, setChainId, ...props } = params;
  const { active, error, activate } = useWeb3React();

  useLayoutEffect(() => {
    injected
      ?.isAuthorized()
      .then((isAuthorized) => {
        if (isAuthorized && !active && !error) {
          activate(injected);
        }
      })
      .catch(() => {
        showAlert(
          'Please try switching the browser of try after sometime',
          'error'
        );
      });
  }, [activate, active, error]);

  useEffect(() => {
    const { ethereum } = window;

    if (ethereum && ethereum.on && !error) {
      const handleConnect = () => {
        activate(injected);
      };

      const handleAccountsChanged = (accounts) => {
        if (accounts.length > 0) {
          activate(injected);
        }
      };

      const handleChainChanged = (chainId) => {
        activate(injected);
      };

      const handleNetworkChanged = (networkId) => {
        activate(injected);
      };

      ethereum?.on('connect', handleConnect);
      ethereum?.on('accountsChanged', handleAccountsChanged);
      ethereum?.on('chainChanged', handleChainChanged);
      ethereum.on('networkChanged', handleNetworkChanged);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('connect', handleConnect);
          ethereum.removeListener('accountsChanged', handleAccountsChanged);
          ethereum.removeListener('chainChanged', handleChainChanged);
          ethereum.removeListener('networkChanged', handleNetworkChanged);
        }
      };
    }
  }, []);

  return (
    <>
      {layout ? (
        <div className="page-container">
          <TopHeader />
          <Sidebar />
          {React.cloneElement(children, { ...props })}
          {/* <BottomHeader /> */}
        </div>
      ) : (
        <>{React.cloneElement(children, { ...props })}</>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  isSidebarVisible: state.settings.isSidebarVisible,
});

export default connect(mapStateToProps)(Layout);
