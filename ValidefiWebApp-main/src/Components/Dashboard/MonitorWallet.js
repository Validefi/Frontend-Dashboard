import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Info } from 'react-feather';

const Transition = ({ data }) => {
  // const Transition = ({ data }) => {
  //   const [data, setData] = useState([
  //     { id: Math.random(), name: 'Bitcoin', value: 0.222, symbol: 'BTC' },
  //     { id: Math.random(), name: 'Dogecoin', value: 100.1212, symbol: 'Doge' },
  //     {
  //       id: Math.random(),
  //       name: 'Cardano',
  //       value: 10.1298312,
  //       symbol: 'ADA',
  //     },
  //     {
  //       id: Math.random(),
  //       name: 'XRP',
  //       value: 0.12312312,
  //       symbol: 'XRP',
  //     },
  //     {
  //       id: Math.random(),
  //       name: 'Uniswap',
  //       value: 12,
  //       symbol: 'UNI',
  //     },
  //   ]);
  //   const addItemHandler = () => {
  //     const name = prompt('Enter some text');
  //     const temp = data;
  //     if (name) {
  //       setData(() =>
  //         [
  //           { id: Math.random(), name, value: 10 },
  //           { id: Math.random(), name, value: 10 },
  //         ].concat(temp)
  //       );
  //     }
  //   };

  return (
    <TransitionGroup className="todo-list">
      {data.length > 0 ? (
        data.map((item, index) => (
          <CSSTransition key={index} timeout={500} classNames="item">
            <div className="transactions-list">
              <div className="tr-item align-items-center">
                <div className="tr-company-name">
                  <div className="tr-icon tr-card-icon text-primary tr-card-bg-primary">
                    <Info />
                  </div>
                  <div className="tr-text"></div>
                </div>
                <div>
                  <h5>{item.name}</h5>
                </div>
              </div>
            </div>
          </CSSTransition>
        ))
      ) : (
        <div className="todo-list">
          <p>No data to display</p>
        </div>
      )}
      {/* <button className="btn btn-primary w-100" onClick={addItemHandler}>
        Add Item
      </button> */}
    </TransitionGroup>
  );
};

export default Transition;
