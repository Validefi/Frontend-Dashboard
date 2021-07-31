import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Info } from 'react-feather';

const Transition = ({ title, data }) => {
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
  const calculateBalance = (balance, decimal) =>
    balance / Math.pow(10, decimal);
  return (
    <div>
      <TransitionGroup className="todo-list">
        {data?.length > 0 ? (
          data?.map((item, index) => (
            <CSSTransition key={index} timeout={500} classNames="item">
              <div className="transactions-list">
                <div className="tr-item">
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
                        <img
                          src={`https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/${item?.contract_ticker_symbol.toLowerCase()}.webp`}
                          alt="Coin"
                        />
                      ) : (
                        <Info />
                      )}
                    </div>
                    <div className="tr-text">
                      {title === 'Current Holdings' && (
                        <h4>{item?.contract_name}</h4>
                      )}

                      {title === 'Your Transactions' && (
                        <a
                          href={`https://etherscan.io/tx/${item?.id}`}
                          target="_blank"
                          rel="noreferrer nofollow"
                        >
                          <h4>{item?.type?.toUpperCase()}</h4>
                          <p>{new Date(item?.date * 1000).toDateString()}</p>
                        </a>
                      )}

                      {title === 'Current Holdings' && (
                        <p>
                          {calculateBalance(
                            item?.balance,
                            item?.contract_decimals
                          )}
                        </p>
                      )}

                      {title === 'Your Transactions' && (
                        <a
                          href={`https://etherscan.io/tx/${item?.id}`}
                          target="_blank"
                          rel="noreferrer nofollow"
                        >
                          <p>{item?.description}</p>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CSSTransition>
          ))
        ) : (
          <p>No data to display</p>
        )}
      </TransitionGroup>
      {/* <button className="btn btn-primary w-100" onClick={addItemHandler}>
        Add Item
      </button> */}
    </div>
  );
};

export default Transition;
