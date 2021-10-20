import React from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { Code, Link, User } from 'react-feather';
import { useParams } from 'react-router';
import CoinImage from '../../Utils/CoinImage';

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

const CoinDetail = () => {
  const { coin } = useParams();
  const { currentTheme } = useThemeSwitcher();

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
              <h5>
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
              </h5>
            </div>
            <div className="row mt-4">
              <h5>
                {' '}
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
              </h5>
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
      </div>
    </div>
  );
};

export default CoinDetail;
