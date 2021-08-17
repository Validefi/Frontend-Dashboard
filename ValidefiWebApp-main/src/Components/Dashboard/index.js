import React, { useState } from 'react';
import Box from './Box';
import BoxPortfolio from './BoxPortfolio';
import LongBox from './LongBox';
import Chart from './Chart';
import { connect } from 'react-redux';
// import Transactions from './Transactions';
import Modal from '../../Utils/Modal';
import { showAlert } from '../../Utils/Alert';
import TextInput from '../../Utils/TextInput';
import { setMonitorWallet } from '../../Store/actionCreatos/wallets';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { ArrowRight } from 'react-feather';
import Web3 from 'web3';

const Dashboard = ({
  wallet_address,
  wallet_balance,
  chainId,
  setMonitoredWallet,
}) => {
  const [isOpen, toggle] = useState(false);
  const ModalContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 1.6rem 0 1.6rem;
  `;
  const handleMonitorWallet = (wallet) => {
    if (Web3.utils.isAddress(wallet)) {
      setMonitoredWallet(wallet);
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
            <Box title="Portfolio Value" data="100k" color="success" />
            <Box title="Monthly Profit" data={10} color="danger" />
            <BoxPortfolio
              title="Wallet Balance"
              data={`$${wallet_balance.toFixed(2)}`}
              color="#FF1654"
            />
          </div>
          <div className="row">
            <Chart />
            <LongBox
              title="Current Holdings"
              url={`${process.env.REACT_APP_BASE_URL}/${
                chainId === '0x1' ? 'ethTokenBalance/' : 'bscTokenBalance/'
              }`}
              refetchInterval={3000}
              reqBody={{
                address: '0x5AB868EF45e3E366F03fadBd3729902422799152',
                // address: wallet_address,
              }}
            />
          </div>
          {/* <div className="row">
          <Transactions />
        </div> */}
          <div className="row">
            <LongBox
              isAddIcon
              isOpen={isOpen}
              toggleModal={() => toggle(true)}
              title="Monitored Wallets"
              url={`${process.env.REACT_APP_BASE_URL}/${
                chainId === '0x1' ? 'ethTokenBalance/' : 'bscTokenBalance/'
              }`}
              refetchInterval={3000}
              reqBody={{
                address: '0x5AB868EF45e3E366F03fadBd3729902422799152',
                // address: wallet_address,
              }}
            />
            <LongBox
              title="News &#38; Updates"
              url={`${process.env.REACT_APP_BASE_URL}/news`}
              isGetRequest
              refetchInterval={30000}
            />
            <LongBox
              title="Your Transactions"
              url={`${process.env.REACT_APP_BASE_URL}/${
                chainId === '0x1'
                  ? 'ethTransactionsLatest/'
                  : 'bscTransactionsLatest/'
              }`}
              refetchInterval={3000}
              reqBody={{
                address: '0x5AB868EF45e3E366F03fadBd3729902422799152',
                // address: wallet_address,
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
          <TextInput handleSubmit={handleMonitorWallet} icon={<ArrowRight />} />
        </ModalContent>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  wallet_address: state.auth.wallet_address,
  chainId: state.auth.chainId,
  wallet_balance: state.wallet.balance,
});

const mapDispatchToProps = (dispatch) => ({
  setMonitoredWallet: (wallet) => {
    dispatch(setMonitorWallet(wallet));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
