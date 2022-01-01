import React, { lazy, useEffect, useLayoutEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { injected } from '../Connectors';
import { useWeb3React } from '@web3-react/core';
import { showAlert } from '../../Utils/Alert';
import { logoutUser } from '../../Store/actionCreatos/auth';

const TopHeader = lazy(() => import('../TopHeader'));
const Footer = lazy(() => import('../Footer'));
const Sidebar = lazy(() => import('../Sidebar'));

const Layout = (params) => {
  const { children, layout, setAddress, setChainId, ...props } = params;
  const { active, error, activate } = useWeb3React();
  const dispatch = useDispatch();

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
          'Please try switching the browser or try after sometime',
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
        } else {
          dispatch(logoutUser());
        }
      };

      ethereum?.on('connect', handleConnect);
      ethereum?.on('accountsChanged', handleAccountsChanged);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('connect', handleConnect);
          ethereum.removeListener('accountsChanged', handleAccountsChanged);
        }
      };
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {layout ? (
        <div className="page-container">
          <TopHeader />
          <Sidebar />
          {React.cloneElement(children, { ...props })}
          <Footer />
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
