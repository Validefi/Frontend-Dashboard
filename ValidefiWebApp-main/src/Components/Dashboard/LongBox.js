import React from 'react';
import { Info } from 'react-feather';

const LongBox = ({ title }) => {
  return (
    <>
      <div className="col-sm-6 col-xl-4">
        <div className="card stat-widget">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <Tile name="Bitcoin" value="$100" />
            <Tile name="Ethereum" value="$80" />
            <Tile name="Cardano" value="$22.10" />
            <Tile name="Pancakeswap" value="$1100" />
            <Tile name="Uniswap" value="$1100" />
          </div>
        </div>
      </div>
    </>
  );
};

const Tile = ({ name, value }) => (
  <div className="transactions-list">
    <div className="tr-item">
      <div className="tr-company-name">
        <div className="tr-icon tr-card-icon tr-card-bg-primary text-primary">
          <Info />
        </div>
        <div className="tr-text">
          <h4>{name}</h4>
          <p>{value}</p>
        </div>
      </div>
    </div>
  </div>
);

export default LongBox;
