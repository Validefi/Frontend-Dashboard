import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { getIcon } from '../../Utils';
import { connect } from 'react-redux';

const Transition = ({ data }) => {
  // const [items, setItems] = useState([
  //   { id: Math.random(), name: 'Bitcoin', value: 0.222, symbol: 'BTC' },
  //   { id: Math.random(), name: 'Dogecoin', value: 100.1212, symbol: 'Doge' },
  //   {
  //     id: Math.random(),
  //     name: 'Cardano',
  //     value: 10.1298312,
  //     symbol: 'ADA',
  //   },
  //   {
  //     id: Math.random(),
  //     name: 'XRP',
  //     value: 0.12312312,
  //     symbol: 'XRP',
  //   },
  //   {
  //     id: Math.random(),
  //     name: 'Uniswap',
  //     value: 12,
  //     symbol: 'UNI',
  //   },
  // ]);
  // const addItemHandler = () => {
  //   const name = prompt('Enter some text');
  //   const temp = items;
  //   if (name) {
  //     temp.pop();
  //     setItems(() => [{ id: Math.random(), name, value: 10 }].concat(temp));
  //   }
  // };
  return (
    <TransitionGroup className="todo-list">
      {data.length > 0 ? (
        data.map((item, index) => (
          <CSSTransition key={index} timeout={500} classNames="item">
            <div className="transactions-list">
              <div className="tr-item">
                <div className="tr-company-name">
                  <div className="tr-icon tr-card-icon text-primary tr-card-bg-primary">
                    {getIcon(item?.type)}
                  </div>
                  <div className="tr-text">
                    <a>
                      <h4>{item?.type?.toUpperCase().replace('_', ' ')}</h4>
                      <p style={{ width: '100%' }}>
                        {new Date(item?.date * 1000).toDateString()}
                      </p>
                    </a>

                    <p>{item?.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </CSSTransition>
        ))
      ) : (
        <p>You don't have any alerts</p>
      )}
    </TransitionGroup>
  );
};

const mapStateToProps = (state) => ({
  //   isEthereum: state.auth.isEthereum,
});

export default connect(mapStateToProps)(Transition);
