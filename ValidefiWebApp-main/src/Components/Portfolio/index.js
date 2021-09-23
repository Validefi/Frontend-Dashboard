import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { ArrowRight } from 'react-feather';
import { useWeb3React } from '@web3-react/core';
import { useThemeSwitcher } from 'react-css-theme-switcher';

import LongBox from '../Dashboard/LongBox';
import PairPool from '../Explorer/PairPool';
import { setMonitorWallet } from '../../Store/actionCreatos/wallets';
import Modal from '../../Utils/Modal';
import { showAlert } from '../../Utils/Alert';
import TextInput from '../../Utils/TextInput';
import { isAddress } from '../../Utils';
import BigChart from '../../Utils/BigChart';
import DonutChart from '../../Utils/DonutChart';

const Portfolio = ({ setMonitoredWallet, isEthereum, monitored_wallet }) => {
  const [isOpen, toggle] = useState(false);
  const { account } = useWeb3React();
  const { currentTheme } = useThemeSwitcher();

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
  const [chart] = useState({
    series: [
      {
        name: 'Portfolio Value',
        data: [70, 79, 42, 51, 28, 40, 37],
      },
    ],
    isPositive: true,
  });
  const [donutChart] = useState({
    series: [44, 55, 13, 33],
    label: ['BTC', 'ETH', 'SOL', 'ADA'],
  });
  return (
    <>
      <div className="page-content">
        <div className="main-wrapper">
          <div className="row flex-column">
            <BigChart
              title="Portfolio"
              series={chart.series}
              height={350}
              tooltipFormat="dd/MM/yy HH:mm"
              colors={chart.isPositive ? ['#90e0db'] : ['#F47174']}
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
            <div className="col-sm-6 col-xl-5">
              <DonutChart
                type="donut"
                series={donutChart.series}
                labels={donutChart.label}
                width={350}
              />
            </div>
            {/* <LongBox
              title="Live Token Holders"
              url={`${process.env.REACT_APP_BASE_URL}/${
                isEthereum ? 'ethTransactionsLatest/' : 'bscTransactionsLatest/'
              }`}
              refetchInterval={30000}
              reqBody={{
                address: account,
              }}
            /> */}
          </div>
          <div className="row">
            <LongBox
              title="Your Transactions"
              url={`${process.env.REACT_APP_BASE_URL}/${
                isEthereum ? 'ethTransactionsLatest/' : 'bscTransactionsLatest/'
              }`}
              refetchInterval={30000}
              reqBody={{
                address: account,
              }}
            />
            <PairPool title="Whale Transactions" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
