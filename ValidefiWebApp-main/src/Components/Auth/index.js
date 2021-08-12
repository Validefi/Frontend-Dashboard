import React, { useEffect, useState } from 'react';
import MetamaskLogo from '../../assets/metamask.svg';
import { connect } from 'react-redux';
import { setAddress, setChainId } from '../../Store/actionCreatos/auth';
import { showAlert } from '../../Utils/Alert';
import Modal from '../../Utils/Modal';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';
import WalletModal from './walletModal';

const Auth = (props) => {
  const { setAddr, setChainId } = props;
  const [isMetamask, setIsMetamask] = useState(true);
  const [isOpen, toggle] = useState(false);
  useEffect(() => {
    if (window.ethereum === undefined) {
      setIsMetamask(false);
      showAlert('Please install MetaMask', 'error');
    }
  }, []);

  const connectMetamask = async () => {
    if (window.ethereum === undefined) {
      setIsMetamask(false);
      showAlert('Please install MetaMask', 'error');
      return;
    }

    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        if (accounts.length > 0) {
          setAddr(accounts[0]);
          sessionStorage.setItem('wallet_address', accounts[0]);
        }
        const chainId = await window.ethereum.request({
          method: 'eth_chainId',
        });
        if (chainId) {
          setChainId(chainId);
          sessionStorage.setItem('chain_id', chainId);
        }
      } catch (error) {
        if (error.code === 4001) {
          showAlert('Please connect MetaMask', 'error');
        }
      }
    }
  };
  const ModalContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 1.6rem 0 1.6rem;
  `;
  return (
    <div className="login-page">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-12 col-lg-4">
            <div className="card login-box-container">
              <div className="card-body">
                <div className="authent-logo">
                  <img src={MetamaskLogo} alt="MetaMask" />
                </div>
                <div className="authent-text">
                  <p>
                    {isMetamask
                      ? 'Please connect your MetaMask wallet'
                      : 'Please install MetaMask in your browser'}
                  </p>
                </div>
                {isMetamask && (
                  <div className="d-grid">
                    <button
                      className="btn btn-danger m-b-xs"
                      onClick={() => toggle(true)}
                      // onClick={connectMetamask}
                    >
                      Connect to a wallet
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        handleClose={() => toggle(false)}
        width={isMobile ? 85 : 35}
        height={isMobile ? 60 : 80}
        title="Connect to a wallet"
      >
        <ModalContent>
          {/* <TextInput handleSubmit={handleMonitorWallet} icon={<ArrowRight />} /> */}
          <p className="form-control text-secondary">
            By connecting a wallet, you agree to{' '}
            <span className="text-primary">ValiDefi's Terms of Service</span>{' '}
            and acknowledge that you have read and understood the{' '}
            <span className="text-primary">ValiDefi protocol disclaimer.</span>
          </p>
          <WalletModal />
        </ModalContent>
      </Modal>
    </div>
  );
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

export default connect(mapstateToProps, mapDispatchToProps)(Auth);
