import React from 'react';
import Image from '../../../Utils/CoinImage';

const Item = ({ item, index }) => {
  const calculateBalance = (quote) => {
    return parseFloat(quote.toFixed(2));
  };

  const calculateQuantity = (balance, decimal) => {
    const quantity = balance * Math.pow(10, -decimal);
    return parseFloat(quantity.toFixed(4));
  };
  return (
    <div className="transactions-list">
      <div className="tr-item align-items-center">
        <div className="tr-company-name">
          <div
            className="tr-icon tr-card-icon text-primary tr-card-bg-primary"
            style={{
              display: 'grid',
              placeItems: 'center',
              padding: 0,
            }}
          >
            <Image contract_ticker_symbol={item?.contract_ticker_symbol} />
          </div>
          <div className="tr-text">
            <h4>{item?.contract_name}</h4>

            <p>
              {calculateQuantity(item?.balance, item?.contract_decimals, index)}
            </p>
          </div>
        </div>
        <div>
          <h5>${calculateBalance(item?.quote)}</h5>
        </div>
      </div>
    </div>
  );
};

export default Item;
