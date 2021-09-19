import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { ArrowRight } from 'react-feather';
import { useWeb3React } from '@web3-react/core';
import Marquee from 'react-fast-marquee';

import MonitorWallet from '../Dashboard/MonitorWallet';
import LongBox from '../Dashboard/LongBox';
import PairPool from './PairPool';
import { setMonitorWallet } from '../../Store/actionCreatos/wallets';
import Modal from '../../Utils/Modal';
import { showAlert } from '../../Utils/Alert';
import TextInput from '../../Utils/TextInput';
import { isAddress } from '../../Utils';
import CustomTicker from './Ticker';

const Explorer = ({ setMonitoredWallet, isEthereum, monitored_wallet }) => {
  const [isOpen, toggle] = useState(false);
  const { account } = useWeb3React();

  const ModalContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 1.6rem 0 1.6rem;
  `;
  const handleMonitorWallet = (wallet) => {
    if (isAddress(wallet)) {
      setMonitoredWallet({ wallet: wallet });
      toggle(false);
    } else {
      showAlert('Please enter a valid wallet address', 'error');
    }
  };

  return (
    <>
      <div className="page-content">
        <div className="main-wrapper">
          <div
            className="alert alert-danger"
            role="alert"
            style={{
              display: 'grid',
              placeItems: 'center',
              height: '6rem',
              fontSize: '22px',
            }}
          >
            Advertisement
          </div>
          <div className="row">
            <Marquee pauseOnHover pauseOnClick gradient={false}>
              <CustomTicker />
            </Marquee>
          </div>
          <div className="row mt-4">
            <MonitorWallet
              toggleModal={() => toggle(true)}
              title="Monitored Wallets"
              url={`${process.env.REACT_APP_BASE_URL}/${
                isEthereum ? 'ethTransactionsLatest/' : 'bscTransactionsLatest/'
              }`}
              refetchInterval={30000}
              reqBody={{
                address: monitored_wallet,
              }}
            />
            <PairPool />
          </div>
          <div className="row">
            {' '}
            <LongBox
              title="Your Transactions"
              url={`${process.env.REACT_APP_BASE_URL}/${
                isEthereum ? 'ethTransactionsLatest/' : 'bscTransactionsLatest/'
              }`}
              refetchInterval={30000}
              reqBody={{
                address: account,
                // address: '0x9621de29f9083D9e638D4Fc1BF8A618650A5A69c',
              }}
            />
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        handleClose={() => toggle(false)}
        width={isMobile ? 85 : 30}
        height={isMobile ? 20 : 15}
        title="Monitor Wallet"
      >
        <ModalContent>
          <TextInput
            autoFocus={true}
            handleSubmit={handleMonitorWallet}
            icon={<ArrowRight />}
          />
        </ModalContent>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  isEthereum: state.auth.isEthereum,
  monitored_wallet: state.wallet.monitored_wallet,
});

const mapDispatchToProps = (dispatch) => ({
  setMonitoredWallet: (wallet) => {
    dispatch(setMonitorWallet(wallet));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Explorer);
