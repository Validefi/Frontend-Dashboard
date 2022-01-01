import React, { useCallback, useEffect, useState } from 'react';
import Logo from '../../assets/sidewaysLogo.png';
import Modal from '../../Utils/Modal';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';
import WalletModal from './WalletModal';
import Web3 from 'web3';
import { showAlert } from '../../Utils/Alert';
import { useWeb3React } from '@web3-react/core';
import { connect } from 'react-redux';
import { registerUser, authenticateUser } from '../../Store/actionCreatos/auth';

const Auth = (props) => {
  const [isOpen, toggle] = useState(false);
  const { active, account, error } = useWeb3React();

  const registerAndAuthenticate = useCallback(async () => {
    if (!props.auth.isRegistered && !props.auth.nonce) {
      const data = { account };
      await props.registerUser(data);
    } else if (
      !props.auth.isAuthenticated &&
      props.auth.isRegistered &&
      props.auth.nonce
    ) {
      const web3 = new Web3(Web3.givenProvider);
      const accounts = await web3.eth.getAccounts();

      await web3.eth.personal.sign(
        `Welcome to ValiDefi
        Signing nonce: ${props.auth.nonce}`,
        accounts[0],
        (err, res) => {
          if (err) {
            showAlert('Please try again', 'error');
          } else {
            const apiData = {
              signature: res,
              publicAddress: accounts[0],
            };
            props.authenticateUser(apiData);
          }
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.auth.isRegistered, props.auth.nonce]);

  useEffect(() => {
    async function register() {
      if (account && active && !error) {
        registerAndAuthenticate();
      }
    }
    register();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, active, error, props.auth.isRegistered, props.auth.nonce]);

  const handleClick = () => {
    if (account && active && !error) {
      registerAndAuthenticate();
    } else {
      toggle(true);
    }
  };

  const ModalContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 1.6rem 0 1.6rem;
  `;

  const config = {
    supportedChainIds: [1, 56], // 1 - ethereum mainnet, 56 - binance smart chain
    connectors: {
      walletconnect: {
        qrcode: true,
      },
      walletlink: {
        qrcode: true,
      },
    },
  };
  return (
    <div className="login-page">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-12 col-lg-4">
            <div className="card login-box-container">
              <div className="card-body">
                <div className="authent-logo">
                  <img src={Logo} alt="ValiDefi" width="60%" />
                </div>
                <div className="authent-text">
                  <p>Please connect your wallet</p>
                </div>
                <div className="d-grid">
                  <button
                    className="btn btn-danger m-b-xs"
                    onClick={handleClick}
                  >
                    Connect to a wallet
                  </button>
                </div>
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
        <ModalContent className="flex-column">
          <p className="form-control text-secondary">
            By connecting a wallet, you agree to{' '}
            <span className="text-primary">ValiDefi's Terms of Service</span>
            and acknowledge that you have read and understood the{' '}
            <span className="text-primary">ValiDefi protocol disclaimer.</span>
          </p>
          <WalletModal
            isOpen={isOpen}
            onClose={() => toggle(false)}
            config={config}
          />
        </ModalContent>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  registerUser: (data) => {
    dispatch(registerUser(data));
  },
  authenticateUser: (data) => {
    dispatch(authenticateUser(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
