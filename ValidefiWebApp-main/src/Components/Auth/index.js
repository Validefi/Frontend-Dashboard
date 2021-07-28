import React, { useEffect, useState } from 'react';
import MetamaskLogo from '../../assets/metamask.svg';
import Web3 from 'web3';
import { connect } from 'react-redux';
import { setAddress } from '../../Store/actionCreatos/auth';
import { showAlert } from '../../Utils/Alert';

const Auth = ({ setAddr }) => {
  const [isMetamask, setIsMetamask] = useState(false);

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      setIsMetamask(true);
    }
  }, []);

  const connectMetamask = async () => {
    if (typeof window.ethereum === 'undefined') {
      setIsMetamask(false);
      return;
    }

    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        if (accounts.length > 0) {
          setAddr(accounts[0]);
        }
      } catch (error) {
        if (error.code === 4001) {
          showAlert('Please connect MetaMask', 'error');
        }
      }
    }

    window.ethereum.on('accountsChanged', function (accounts) {
      if (accounts.length === 0) {
        setAddr(null);
      } else if (Web3.utils.isAddress(accounts[0])) {
        setAddr(accounts[0]);
      } else {
      }
    });
  };

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
                      onClick={connectMetamask}
                    >
                      Connect your wallet
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapstateToProps = (state) => {
  return {
    address: state.auth.wallet_address,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setAddr: (address) => {
    dispatch(setAddress(address));
  },
});

export default connect(mapstateToProps, mapDispatchToProps)(Auth);
