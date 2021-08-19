import React, { lazy, useEffect, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import {
  setAddress,
  setChainId,
  setNetwork,
} from '../../Store/actionCreatos/auth';
import { injected } from '../Connectors';
import { isAddress } from '../../Utils';
import { useWeb3React } from '@web3-react/core';

const TopHeader = lazy(() => import('../TopHeader'));
// const BottomHeader = lazy(() => import('../BottomHeader'));
const Sidebar = lazy(() => import('../Sidebar'));

const Layout = (params) => {
  const { children, layout, setAddress, setChainId, ...props } = params;
  const { active, error, activate, account, chainId } = useWeb3React();

  useLayoutEffect(() => {
    injected
      ?.isAuthorized()
      .then((isAuthorized) => {
        setAddress(account);
        setChainId(chainId);
        if (isAuthorized && !active && !error) {
          activate(injected);
        }
      })
      .catch(() => {
        setAddress(null);
        setChainId(null);
      });
  }, [activate, active, error]);

  // useEffect(() => {
  //   const { ethereum } = window;

  //   if (ethereum && ethereum.on && !error) {
  //     const handleConnect = () => {
  //       activate(injected);
  //     };

  //     const handleAccountsChanged = (accounts) => {
  //       if (accounts?.length === 0) {
  //         setAddress(null);
  //       } else if (isAddress(accounts[0])) {
  //         setAddress(accounts[0]);
  //         activate(injected);
  //       }
  //     };

  //     const handleChainChanged = (chainId) => {
  //       setChainId(chainId);
  //       activate(injected);
  //     };

  //     const handleNetworkChanged = (networkId) => {
  //       setNetwork(networkId);
  //       activate(injected);
  //     };

  //     ethereum?.on('connect', handleConnect);
  //     ethereum?.on('accountsChanged', handleAccountsChanged);
  //     ethereum?.on('chainChanged', handleChainChanged);
  //     ethereum.on('networkChanged', handleNetworkChanged);

  //     return () => {
  //       if (ethereum.removeListener) {
  //         ethereum.removeListener('connect', handleConnect);
  //         ethereum.removeListener('accountsChanged', handleAccountsChanged);
  //         ethereum.removeListener('chainChanged', handleChainChanged);
  //         ethereum.removeListener('networkChanged', handleNetworkChanged);
  //       }
  //     };
  //   }
  // }, []);

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

const mapDispatchToProps = (dispatch) => ({
  setAddress: (address) => {
    dispatch(setAddress(address));
  },
  setChainId: (chainId) => {
    dispatch(setChainId(chainId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
