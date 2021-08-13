import React, { useEffect } from 'react';
import Web3 from 'web3';
import { connect } from 'react-redux';
import Web3Modal from 'web3modal';
import { setAddress, setChainId } from '../../Store/actionCreatos/auth';

const initWeb3 = (provider) => {
  const web3 = new Web3(provider);
  web3.eth.extend({
    methods: [
      {
        name: 'chainId',
        call: 'eth_chainId',
        outputFormatter: web3.utils.hexToNumber,
      },
    ],
  });

  return web3;
};

const WalletModal = ({ setAddr, setChainId }) => {
  const web3Modal = new Web3Modal({
    network: getNetwork(),
    cacheProvider: true,
    providerOptions: getProviderOptions(),
  });
  useEffect(() => {
    if (web3Modal.cachedProvider) {
      onConnect();
    }
  }, []);
  // const resetApp = async () => {
  //   const { web3 } = this.state;
  //   if (web3 && web3.currentProvider && web3.currentProvider.close) {
  //     await web3.currentProvider.close();
  //   }
  //   await web3Modal.clearCachedProvider();
  //   setChainId(null);
  //   sessionStorage.removeItem('chain_id');
  // };

  return <div></div>;
};

const mapstateToProps = (state) => ({
  address: state.auth.wallet_address,
});

const mapDispatchToProps = (dispatch) => ({
  setAddr: (address) => {
    dispatch(setAddress(address));
  },
  setChainId: (chainId) => {
    dispatch(setChainId(chainId));
  },
});

export default connect(mapstateToProps, mapDispatchToProps)(WalletModal);
