import React, { lazy, useEffect } from 'react';
import { connect } from 'react-redux';
import { setAddress, setChainId } from '../../Store/actionCreatos/auth';
import Web3 from 'web3';

const TopHeader = lazy(() => import('../TopHeader'));
// const BottomHeader = lazy(() => import('../BottomHeader'));
const Sidebar = lazy(() => import('../Sidebar'));

const Layout = (params) => {
  const { children, layout, setAddress, setChainId, ...props } = params;

  useEffect(() => {
    if (
      sessionStorage.getItem('wallet_address') &&
      Web3.utils.isAddress(sessionStorage.getItem('wallet_address'))
    ) {
      setAddress(sessionStorage.getItem('wallet_address'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function listenAccount() {
      window.ethereum?.on('accountsChanged', function (accounts) {
        if (accounts.length === 0) {
          setAddress(null);
          sessionStorage.removeItem('wallet_address');
        } else if (Web3.utils.isAddress(accounts[0])) {
          setAddress(accounts[0]);
          sessionStorage.setItem('wallet_address', accounts[0]);
        }
      });

      window.ethereum?.on('chainChanged', function (chainId) {
        if (chainId.length > 0) {
          setChainId(chainId);
          sessionStorage.setItem('chain_id', chainId);
          window.location.reload();
        }
      });
    }
    if (window.ethereum !== undefined) {
      listenAccount();
    }
  }, [setAddress, setChainId]);

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
