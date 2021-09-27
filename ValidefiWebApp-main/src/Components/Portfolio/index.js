import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { useWeb3React } from '@web3-react/core';
import { useThemeSwitcher } from 'react-css-theme-switcher';

import PairPool from '../Explorer/PairPool';
import { setMonitorWallet } from '../../Store/actionCreatos/wallets';
import BigChart from '../../Utils/BigChart';
import DonutChart from '../../Utils/DonutChart';
import Performance from './Performance';
import ProfitBar from './ProfitBar';
import TransactionModal from './Modal/TransactionModal';

const Portfolio = ({ setMonitoredWallet, isEthereum, monitored_wallet }) => {
  const [isTransactionModal, setIsTransactionModal] = useState(false);
  const { account } = useWeb3React();
  const { currentTheme } = useThemeSwitcher();

  const ModalContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 1.6rem 0 1.6rem;
  `;
  // const handleMonitorWallet = (wallet) => {
  //   if (isAddress(wallet)) {
  //     setMonitoredWallet({ wallet: wallet });
  //     toggle(false);
  //   } else {
  //     showAlert('Please enter a valid wallet address', 'error');
  //   }
  // };
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
          <div className="row flex-row">
            <BigChart
              size="col-sm-6 col-xl-7"
              title="Portfolio Value"
              series={chart.series}
              height={350}
              tooltipFormat="dd/MM/yy HH:mm"
              colors={chart.isPositive ? ['#90e0db'] : ['#F47174']}
              watermarkX={440}
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
            <DonutChart
              title="Your Assets"
              type="donut"
              series={donutChart.series}
              labels={donutChart.label}
              width={350}
              toggleTransactionModal={() => setIsTransactionModal(true)}
              isDark={currentTheme === 'dark'}
            />
          </div>
          <div className="row  mb-3">
            <ProfitBar
              title="Portfolio Analysis"
              url={`${process.env.REACT_APP_BASE_URL}/${
                isEthereum ? 'ethTransactionsLatest/' : 'bscTransactionsLatest/'
              }`}
              refetchInterval={30000}
            />
          </div>
          <div className="row">
            <Performance
              title="Coin Performance"
              url={`${process.env.REACT_APP_BASE_URL}/${
                isEthereum ? 'ethTransactionsLatest/' : 'bscTransactionsLatest/'
              }`}
              refetchInterval={30000}
            />
          </div>
          <div className="row">
            <PairPool
              title="Transaction History"
              isSearch
              url={`${process.env.REACT_APP_BASE_URL}/${
                isEthereum ? 'ethTransactionsLatest/' : 'bscTransactionsLatest/'
              }`}
              refetchInterval={30000}
              reqBody={{
                address: account,
              }}
            />
          </div>
        </div>
      </div>
      <TransactionModal
        isOpen={isTransactionModal}
        handleClose={() => setIsTransactionModal(false)}
        width={isMobile ? 85 : 30}
        height={isMobile ? 20 : 15}
        title="Add Transaction"
      />
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
