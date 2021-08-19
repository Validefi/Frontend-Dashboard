import React, { lazy, useEffect, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { setAddress, setChainId } from '../../Store/actionCreatos/auth';
import { isAddress } from '../../Utils';

const TopHeader = lazy(() => import('../TopHeader'));
// const BottomHeader = lazy(() => import('../BottomHeader'));
const Sidebar = lazy(() => import('../Sidebar'));

const Layout = (params) => {
  const { children, layout, setAddress, setChainId, ...props } = params;

  const wallet_address = localStorage.getItem('wallet_address') || '';

  // useLayoutEffect(() => {
  //   if (
  //     localStorage.getItem('wallet_address') &&
  //     isAddress(localStorage.getItem('wallet_address'))
  //   ) {
  //     setAddress(localStorage.getItem('wallet_address'));
  //   }
  //   if (localStorage.getItem('chain_id')) {
  //     setChainId(localStorage.getItem('chain_id'));
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [wallet_address]);

  useEffect(() => {
    async function listenAccount() {
      window?.ethereum?.on('accountsChanged', function (accounts) {
        if (accounts?.length === 0) {
          setAddress(null);
          localStorage.removeItem('wallet_address');
        } else if (isAddress(accounts[0])) {
          setAddress(accounts[0]);
          localStorage.setItem('wallet_address', accounts[0]);
        }
      });

      window?.ethereum?.on('chainChanged', function (chainId) {
        if (chainId?.length > 0) {
          localStorage.setItem('chain_id', chainId);
        }
      });
    }
    if (window.ethereum !== undefined) {
      listenAccount();
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

const mapDispatchToProps = (dispatch) => ({
  setAddress: (address) => {
    dispatch(setAddress(address));
  },
  setChainId: (chainId) => {
    dispatch(setChainId(chainId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
