import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  Activity,
  AlertTriangle,
  ArrowDownLeft,
  ArrowUpRight,
  CheckCircle,
  ChevronsRight,
  Code,
  Copy,
  MinusCircle,
  PlusCircle,
} from 'react-feather';

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
  const icon = (type) => {
    switch (type) {
      case 'send':
        return <ArrowUpRight />;
      case 'receive':
        return <ArrowDownLeft />;
      case 'swap':
        return <ChevronsRight />;
      case 'claim_reward':
        return <CheckCircle />;
      case 'approve':
        return <CheckCircle />;
      case 'staked':
        return <PlusCircle />;
      case 'unstaked':
        return <MinusCircle />;
      case 'mint':
        return <Activity />;
      case 'burn':
        return <AlertTriangle />;
      case 'contract_execution':
        return <Copy />;

      default:
        return <Code />;
    }
  };
  return (
    <TransitionGroup className="todo-list">
      {data?.length > 0 ? (
        data?.map((item, index) => (
          <CSSTransition key={index} timeout={500} classNames="item">
            <div className="transactions-list">
              <div className="tr-item">
                <div className="tr-company-name">
                  <div className="tr-icon tr-card-icon text-primary tr-card-bg-primary">
                    {icon(item?.type)}
                  </div>
                  <div className="tr-text">
                    <a
                      href={`https://etherscan.io/tx/${item?.id}`}
                      target="_blank"
                      rel="noreferrer nofollow"
                    >
                      <h4>{item?.type?.toUpperCase().replace('_', ' ')}</h4>
                      <p style={{ width: '100%' }}>
                        {new Date(item?.date * 1000).toDateString()}
                      </p>
                    </a>

                    <a
                      href={`https://etherscan.io/tx/${item?.id}`}
                      target="_blank"
                      rel="noreferrer nofollow"
                    >
                      <p>{item?.description}</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CSSTransition>
        ))
      ) : (
        <p>You don't have any transactions</p>
      )}
      {/* <button className="btn btn-primary w-100" onClick={addItemHandler}>
        Add Item
      </button> */}
    </TransitionGroup>
  );
};

export default Transition;
