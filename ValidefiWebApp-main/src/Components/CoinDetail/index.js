import React, { useState } from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { Code, Link, User } from 'react-feather';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import BigChart from '../../Utils/BigChart';
import CoinImage from '../../Utils/CoinImage';
import LongBox from '../Dashboard/LongBox';
import PairPool from '../Explorer/PairPool';
import AlertBox from './AlertBox';
import SwapLiquidity from './SwapLiquidity';

const TokenomicsTile = ({ title, value }) => {
  const { currentTheme } = useThemeSwitcher();

  return (
    <div className="w-100 d-flex" style={{ justifyContent: 'space-between' }}>
      <p
        style={{
          opacity: currentTheme === 'dark' ? '' : '1',
        }}
      >
        {title}
      </p>
      <p
        style={{
          opacity: currentTheme === 'dark' ? '' : '1',
        }}
      >
        {value}
      </p>
    </div>
  );
};

const LinksTile = ({ title, icon, classname }) => {
  const { currentTheme } = useThemeSwitcher();

  return (
    <div className="col">
      <p
        className={classname}
        style={{
          opacity: currentTheme === 'dark' ? '' : '1',
          whiteSpace: 'nowrap',
          backgroundColor: currentTheme === 'dark' ? '#253347' : '#EFF3F4',
          borderRadius: '5px',
          padding: '5px',
          textAlign: 'center',
        }}
      >
        {icon}
        {title}
      </p>
    </div>
  );
};

const CoinDetail = ({ isEthereum }) => {
  const { coin } = useParams();
  const { currentTheme } = useThemeSwitcher();
  const [activeItem, setActiveItem] = useState('hour');
  const [series, setSeries] = useState([
    {
      name: 'price',
      data: [41, 52, 14, 32, 45, 32, 21],
    },
  ]);

  const hour = () => {
    setActiveItem('hour');
    setSeries([
      {
        name: 'price',
        data: [11, 32, 44, 30, 15, 92, 91],
      },
    ]);
  };

  const day = () => {
    setActiveItem('day');
    setSeries([
      {
        name: 'price',
        data: [19, 22, 14, 90, 55, 22, 51],
      },
    ]);
  };
  const month = () => {
    setActiveItem('month');
    setSeries([
      {
        name: 'price',
        data: [21, 52, 34, 10, 65, 22, 21],
      },
    ]);
  };
  const year = () => {
    setActiveItem('year');
    setSeries([
      {
        name: 'price',
        data: [51, 22, 94, 90, 75, 82, 91],
      },
    ]);
  };

  const Button = ({ name, title, onClick }) => (
    <button
      className={`btn p-2 ${activeItem === name ? 'text-dark' : 'text-muted'}`}
      style={{ fontWeight: activeItem === name ? '700' : '300' }}
      onClick={onClick}
    >
      {title}
    </button>
  );
  return (
    <div class="page-content">
      <div class="main-wrapper">
        <div class="row">
          <div class="col col-md-8">
            <div class="card stat-widget">
              <div class="card-body">
                <div className="row w-100">
                  <div className="col d-flex align-items-start mt-4">
                    <CoinImage contract_ticker_symbol={coin} />
                    <h2
                      style={{
                        marginLeft: '0.6rem',
                        color: currentTheme === 'dark' ? '' : '#1a1a1a',
                      }}
                    >
                      {coin?.toUpperCase()}
                    </h2>
                    <p style={{ marginLeft: '0.6rem', marginTop: '5px' }}>
                      BTC
                    </p>
                  </div>
                  <div className="col">
                    <h6>{coin} Price</h6>
                    <h1
                      style={{
                        color: currentTheme === 'dark' ? '' : '#1a1a1a',
                      }}
                    >
                      $ 60,000
                    </h1>
                  </div>
                </div>
                <div className="row mt-4">
                  <LinksTile
                    title="bitcoin.org"
                    icon={<Link size={18} style={{ marginRight: '4px' }} />}
                  />
                  <LinksTile
                    title="reddit.com"
                    icon={<User size={18} style={{ marginRight: '4px' }} />}
                  />
                  <LinksTile
                    title="Source code"
                    icon={<Code size={18} style={{ marginRight: '4px' }} />}
                  />
                  <LinksTile
                    title="Liquidity"
                    classname="btn btn-info"
                    icon={
                      <p
                        style={{
                          display: 'inline-block',
                          margin: 0,
                          marginRight: '4px',
                        }}
                      >
                        30%{' '}
                      </p>
                    }
                  />
                  <LinksTile title="Audit" />
                  <LinksTile
                    title="Score"
                    classname="btn btn-success"
                    icon={
                      <p
                        style={{
                          display: 'inline-block',
                          margin: 0,
                          marginRight: '4px',
                        }}
                      >
                        9.5{' '}
                      </p>
                    }
                  />
                </div>
                <div className="row mt-4">
                  <p>
                    <span
                      style={{
                        opacity: currentTheme === 'dark' ? '' : '1',
                        backgroundColor:
                          currentTheme === 'dark' ? '#253347' : '#7888fc',
                        color: currentTheme === 'dark' ? '' : '#fff',
                        borderRadius: '5px',
                        padding: '5px',
                      }}
                    >
                      Category
                    </span>
                    {'  '}
                    Digital Asset
                  </p>
                </div>
                <div className="row mt-4">
                  <p>
                    <span
                      style={{
                        opacity: currentTheme === 'dark' ? '' : '1',
                        backgroundColor:
                          currentTheme === 'dark' ? '#253347' : '#7888fc',
                        color: currentTheme === 'dark' ? '' : '#fff',
                        borderRadius: '5px',
                        padding: '5px',
                      }}
                    >
                      Exchanges
                    </span>
                    {'  '}
                    Binance, Hotbit, Houbi Global, FTX, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col col-md-4">
            <div class="card stat-widget">
              <div class="card-body" style={{ paddingBottom: '18px' }}>
                <h5 class="card-title">Tokenomics</h5>
                <TokenomicsTile
                  title="Market Cap"
                  value={'$1,177,713,296,482'}
                />
                <TokenomicsTile title="Market Dominance" value={47.25 + '%'} />
                <TokenomicsTile title="Volume" value={'$31,807,464,964'} />
                <TokenomicsTile
                  title="Circulating Supply"
                  value={'18,846,956.00 BTC'}
                />
                <TokenomicsTile title="Max Supply" value={'21,000,000 BTC'} />
                <TokenomicsTile title="Volume / Market Cap" value={0.01893} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <BigChart
            title={'Live' + ' | BTC' + ' | USD'}
            height={450}
            rightHeader={
              <div>
                <Button name="hour" title="1H" onClick={hour} />
                <Button name="day" title="24H" onClick={day} />
                <Button name="month" title="1M" onClick={month} />
                <Button name="year" title="1Y" onClick={year} />
              </div>
            }
            series={series}
            tooltipFormat="dd/MM/yy HH:mm"
            colors={['#90e0db']}
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
          {/* <AlertBox
            toggleModal={() => {}}
            // toggleModal={() => toggle(true)}
            title="Alerts"
            url={`${process.env.REACT_APP_BASE_URL}/${
              isEthereum ? 'ethTransactionsLatest/' : 'bscTransactionsLatest/'
            }`}
            refetchInterval={30000}
            reqBody={{
              address: '0x',
              // address: monitored_wallet,
            }}
          /> */}
          <div class="col-sm-6 col-xl-4 ">
            <iframe
              src={`https://app.uniswap.org/#/swap?theme=${
                currentTheme === 'dark' ? 'dark' : 'light'
              }&exactField=output&exactAmount=1&inputCurrency=ETH&outputCurrency=0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359`}
              height="100%"
              width="100%"
              title="Uniswap"
              style={{
                border: 0,
                margin: '0 auto',
                display: 'block',
                borderRadius: '20px',
                maxWidth: '600px',
                minWidth: '300px',
              }}
              id="myId"
            />
          </div>
        </div>
        <div className="row">
          <PairPool
            title="Whale Transactions"
            isCoinColumn={false}
            url={`${process.env.REACT_APP_BASE_URL}/news/`}
            isGetRequest
            refetchInterval={60000}
          />
          <LongBox
            title="News &#38; Updates"
            url={`${process.env.REACT_APP_BASE_URL}/news/`}
            isGetRequest
            refetchInterval={60000}
          />
        </div>
        <div className="row">
          <SwapLiquidity
            title="Swap & Liquidity"
            url={`${process.env.REACT_APP_BASE_URL}/news/`}
            isGetRequest
            refetchInterval={60000}
            className="col-md-8 col-lg-8"
          />
          <AlertBox
            toggleModal={() => {}}
            // toggleModal={() => toggle(true)}
            title="Alerts"
            url={`${process.env.REACT_APP_BASE_URL}/${
              isEthereum ? 'ethTransactionsLatest/' : 'bscTransactionsLatest/'
            }`}
            refetchInterval={30000}
            reqBody={{
              address: '0x',
              // address: monitored_wallet,
            }}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isEthereum: state.auth.isEthereum,
});

const mapDispatchToProps = (dispatch) => ({
  // setMonitoredWallet: (wallet) => {
  //   dispatch(setMonitorWallet(wallet));
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinDetail);
