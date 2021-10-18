import React from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';
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

const CoinDetail = () => {
  const { coin } = useParams();
  const { currentTheme } = useThemeSwitcher();

  return (
    <div class="page-content">
      <div class="main-wrapper">
        <div class="row">
          <div class="col d-flex align-items-start">
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
          <div class="col">
            <h6>{coin} Price</h6>
            <h1 style={{ color: currentTheme === 'dark' ? '' : '#1a1a1a' }}>
              $ 60,000
            </h1>
          </div>
          <div class="col">
            <div class="card stat-widget">
              <div class="card-body">
                <h5 class="card-title">Tokenomics</h5>
                <TokenomicsTile
                  title="Market Cap"
                  value={'$1,177,713,296,482'}
                />
                <TokenomicsTile title="Volume" value={'$31,807,464,964'} />
                <TokenomicsTile
                  title="Circulating Supply"
                  value={'18,846,956.00 BTC'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetail;
