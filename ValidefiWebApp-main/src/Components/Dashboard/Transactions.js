import React from 'react';

const Transactions = () => {
  return (
    <div className="col-md-12 col-lg-8">
      <div className="card table-widget">
        <div className="card-body">
          <h5 className="card-title">Your Transactions</h5>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Token</th>
                  <th scope="col">Exchange</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bitcoin</td>
                  <th scope="row">Binance</th>
                  <td>100</td>
                  <td>
                    <span className="badge bg-info">Unconfirmed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
