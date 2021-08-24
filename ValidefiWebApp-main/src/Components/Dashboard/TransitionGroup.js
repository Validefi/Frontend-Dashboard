import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Info } from 'react-feather';
import { useDispatch } from 'react-redux';
import { setWalletBalance } from '../../Store/actionCreatos/wallets';
import DefaultCoin from '../../assets/default_coin.png';

const Transition = ({ title, data }) => {
  const dispatch = useDispatch();
  const [items, setItems] = useState([
    { id: Math.random(), name: 'Bitcoin', value: 0.222, symbol: 'BTC' },
    { id: Math.random(), name: 'Dogecoin', value: 100.1212, symbol: 'Doge' },
    {
      id: Math.random(),
      name: 'Cardano',
      value: 10.1298312,
      symbol: 'ADA',
    },
    {
      id: Math.random(),
      name: 'XRP',
      value: 0.12312312,
      symbol: 'XRP',
    },
    {
      id: Math.random(),
      name: 'Uniswap',
      value: 12,
      symbol: 'UNI',
    },
  ]);
  const addItemHandler = () => {
    const name = prompt('Enter some text');
    const temp = items;
    if (name) {
      temp.pop();
      setItems(() => [{ id: Math.random(), name, value: 10 }].concat(temp));
    }
  };

  let wallet_balance = 0;
  const calculateBalance = (quote, index) => {
    wallet_balance += quote;
    if (index === data.length - 1) {
      dispatch(setWalletBalance(wallet_balance));
    }
    return parseFloat(quote.toFixed(2));
  };
  const calculateQuantity = (balance, decimal) => {
    const quantity = balance * Math.pow(10, -decimal);
    return parseFloat(quantity.toFixed(4));
  };

  return (
    <TransitionGroup className="todo-list">
      {data?.length > 0 ? (
        data?.map((item, index) => (
          <CSSTransition key={index} timeout={500} classNames="item">
            <div className="transactions-list">
              <div className="tr-item align-items-center">
                <div className="tr-company-name">
                  <div
                    className="tr-icon tr-card-icon text-primary tr-card-bg-primary"
                    style={
                      title === 'Current Holdings'
                        ? {
                            display: 'grid',
                            placeItems: 'center',
                            padding: 0,
                          }
                        : {}
                    }
                  >
                    {title === 'Current Holdings' ? (
                      <Image
                        contract_ticker_symbol={item?.contract_ticker_symbol}
                      />
                    ) : (
                      <Info />
                    )}
                  </div>
                  <div className="tr-text">
                    {title === 'Current Holdings' && (
                      <h4>{item?.contract_name}</h4>
                    )}

                    {title === 'Current Holdings' && (
                      <p>
                        {calculateQuantity(
                          item?.balance,
                          item?.contract_decimals,
                          index
                        )}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <h5>${calculateBalance(item?.quote, index)}</h5>
                </div>
              </div>
            </div>
          </CSSTransition>
        ))
      ) : (
        <p>No data to display</p>
      )}
      {/* <button className="btn btn-primary w-100" onClick={addItemHandler}>
        Add Item
      </button> */}
    </TransitionGroup>
  );
};

const Image = ({ contract_ticker_symbol }) => {
  const [src, setSrc] = useState(
    `https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/${contract_ticker_symbol.toLowerCase()}.webp`
  );
  const onError = () => {
    setSrc(DefaultCoin);
  };
  return <img src={src} alt="Coin" onError={onError} width={30} />;
};

export default Transition;
