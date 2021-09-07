import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { ArrowRight } from 'react-feather';
import { useWeb3React } from '@web3-react/core';

import { setMonitorWallet } from '../../Store/actionCreatos/wallets';
import Box from './Box';
import BoxPortfolio from './BoxPortfolio';
import LongBox from './LongBox';
import BigChart from '../../Utils/BigChart';
// import Transactions from './Transactions';
import Modal from '../../Utils/Modal';
import { showAlert } from '../../Utils/Alert';
import TextInput from '../../Utils/TextInput';
import { isAddress } from '../../Utils';

const Dashboard = ({ wallet_balance, setMonitoredWallet, isEthereum }) => {
  const { account } = useWeb3React();
  const [isOpen, toggle] = useState(false);
  const [series] = useState([
    {
      name: 'profit',
      data: [70, 79, 42, 51, 28, 40, 37],
    },
    {
      name: 'market growth',
      data: [41, 52, 14, 32, 45, 32, 21],
    },
  ]);
  const ModalContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 1.6rem 0 1.6rem;
  `;
  const handleMonitorWallet = (wallet) => {
    if (isAddress(wallet)) {
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
            <BigChart
              title="Portfolio value"
              series={series}
              height={350}
              tooltipFormat="dd/MM/yy HH:mm"
              color={['#b3baff', '#90e0db']}
              Xcategories={[
                '2018-09-19T00:00:00',
                '2018-09-19T01:30:00',
                '2018-09-19T02:30:00',
                '2018-09-19T03:30:00',
                '2018-09-19T04:30:00',
                '2018-09-19T05:30:00',
                '2018-09-19T06:30:00',
              ]}
            />
            <LongBox
              title="Current Holdings"
              url={`${process.env.REACT_APP_BASE_URL}/${
                isEthereum ? 'ethTokenBalance/' : 'bscTokenBalance/'
              }`}
              refetchInterval={30000}
              reqBody={{
                // address: '0x9621de29f9083D9e638D4Fc1BF8A618650A5A69c',
                address: account,
              }}
            />
          </div>
          {/* <div className="row">
          <Transactions />
        </div> */}
          <div className="row">
            <LongBox
              isAddIcon
              toggleModal={() => toggle(true)}
              title="Monitored Wallets"
              url={`${process.env.REACT_APP_BASE_URL}/${
                isEthereum ? 'ethTokenBalance/' : 'bscTokenBalance/'
              }`}
              refetchInterval={30000}
              reqBody={{
                address: account,
                // address: '0x9621de29f9083D9e638D4Fc1BF8A618650A5A69c',
              }}
            />
            <LongBox
              title="News &#38; Updates"
              url={`${process.env.REACT_APP_BASE_URL}/news/`}
              isGetRequest
              refetchInterval={60000}
            />
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
  wallet_balance: state.wallet.balance,
  isEthereum: state.auth.isEthereum,
});

const mapDispatchToProps = (dispatch) => ({
  setMonitoredWallet: (wallet) => {
    dispatch(setMonitorWallet(wallet));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
