import React from 'react';
import { Search } from 'react-feather';
import TextInput from '../../Utils/TextInput';

const PairPool = () => {
  const handleSearch = (e) => {};
  const data = [
    {
      date: '12/11/2020',
      sender: 'Binance',
      receiver: 'Rahul',
      amount: 100,
    },
    {
      date: '12/11/2020',
      sender: 'Binance',
      receiver: 'Rahul',
      amount: 100,
    },
    {
      date: '12/11/2020',
      sender: 'Binance',
      receiver: 'Rahul',
      amount: 100,
    },
    {
      date: '12/11/2020',
      sender: 'Binance',
      receiver: 'Rahul',
      amount: 100,
    },
    {
      date: '12/11/2020',
      sender: 'Binance',
      receiver: 'Rahul',
      amount: 100,
    },
  ];
  return (
    <div className="col-md-12 col-lg-8">
      <div className="card table-widget">
        <div className="card-body">
          <div className="d-flex" style={{ alignItems: 'center' }}>
            <h5 className="card-title" style={{ flex: 1 }}>
              Pair/Pool Explorer
            </h5>
            <TextInput
              style={{
                width: '30%',
                height: '100%',
                marginRight: '15px',
                marginTop: '-15px',
              }}
              label="Search"
              handleSubmit={handleSearch}
              icon={<Search />}
            />
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Sender</th>
                  <th scope="col">Receiver</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr>
                    <td>{item.date}</td>
                    <th scope="row">{item.sender}</th>
                    <td>{item.receiver}</td>
                    <td>
                      <span className="badge bg-info">{item.amount}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PairPool;
