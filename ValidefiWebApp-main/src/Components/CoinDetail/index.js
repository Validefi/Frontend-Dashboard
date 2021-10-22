import React, { useState } from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { Code, Link, User } from 'react-feather';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import BigChart from '../../Utils/BigChart';
import CoinImage from '../../Utils/CoinImage';
import AlertBox from './AlertBox';

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

const LinksTile = ({ title, icon }) => {
  const { currentTheme } = useThemeSwitcher();

  return (
    <div className="col">
      <p
        style={{
          opacity: currentTheme === 'dark' ? '' : '1',
          whiteSpace: 'nowrap',
          backgroundColor:
            currentTheme === 'dark' ? '#253347' : 'rgb(239,239,239)',
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

  return (
    <div class="page-content">
      <div class="main-wrapper">
        <div class="row">
          <div class="col col-md-8">
            <div className="row w-100">
              <div className="col d-flex align-items-start mt-4">
                <CoinImage contract_ticker_symbol={coin} />
                <h2
                  style={{
                    marginLeft: '0.6rem',
                    color: currentTheme === 'dark' ? '' : '#1a1a1a',
                  }}
                >
                  {coin}
                </h2>
                <p style={{ marginLeft: '0.6rem', marginTop: '5px' }}>BTC</p>
              </div>
              <div className="col">
                <h6>{coin} Price</h6>
                <h1 style={{ color: currentTheme === 'dark' ? '' : '#1a1a1a' }}>
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
                      currentTheme === 'dark' ? '#253347' : 'rgb(239,239,239)',
                    borderRadius: '5px',
                    padding: '5px',
                  }}
                >
                  Category:
                </span>{' '}
                Digital Asset
              </p>
            </div>
            <div className="row mt-4">
              <p>
                <span
                  style={{
                    opacity: currentTheme === 'dark' ? '' : '1',
                    backgroundColor:
                      currentTheme === 'dark' ? '#253347' : 'rgb(239,239,239)',
                    borderRadius: '5px',
                    padding: '5px',
                  }}
                >
                  Exchanges:
                </span>{' '}
                Binance, Hotbit, Houbi Global, FTX, etc.
              </p>
            </div>
          </div>
          <div class="col col-md-4">
            <div class="card stat-widget">
              <div class="card-body">
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
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <BigChart
            title={'Live' + ' | BTC' + ' | USD'}
            rightHeader={
              <div>
                <button
                  className={`btn p-2 ${
                    activeItem === 'hour' ? 'text-dark' : 'text-muted'
                  }`}
                  onClick={hour}
                >
                  1H
                </button>
                <button
                  className={`btn p-2 ${
                    activeItem === 'day' ? 'text-dark' : 'text-muted'
                  }`}
                  onClick={day}
                >
                  24H
                </button>
                <button
                  className={`btn p-2 ${
                    activeItem === 'month' ? 'text-dark' : 'text-muted'
                  }`}
                  onClick={month}
                >
                  1M
                </button>
                <button
                  className={`btn p-2 ${
                    activeItem === 'year' ? 'text-dark' : 'text-muted'
                  }`}
                  onClick={year}
                >
                  1Y
                </button>
              </div>
            }
            series={series}
            height={350}
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
          {/* <Holdings
            title="Current Holdings"
            refetchInterval={300000}
            reqBody={{
              address: account,
              // address: '0x9621de29f9083D9e638D4Fc1BF8A618650A5A69c',
            }}
          /> */}
          <AlertBox
            toggleModal={() => {}}
            // toggleModal={() => toggle(true)}
            title="Alerts"
            url={`${process.env.REACT_APP_BASE_URL}/${
              isEthereum ? 'ethTransactionsLatest/' : 'bscTransactionsLatest/'
            }`}
            refetchInterval={30000}
            reqBody={
              {
                // address: monitored_wallet,
              }
            }
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // wallet_balance: state.wallet.balance,
  isEthereum: state.auth.isEthereum,
  // monitored_wallet: state.wallet.monitored_wallet,
});

const mapDispatchToProps = (dispatch) => ({
  // setMonitoredWallet: (wallet) => {
  //   dispatch(setMonitorWallet(wallet));
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinDetail);
