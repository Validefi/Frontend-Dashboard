import React from 'react';

const BuySellForm = ({ isDark, isBuy, onSubmit }) => {
  const [buyData, setBuyData] = React.useState({
    coin: '',
    amount: 0.0,
    quantity: 0,
  });

  return (
    <form className="row g-3 needs-validation" novalidate>
      <div className="col-md-12">
        <label for="coin" className="form-label">
          Coin
        </label>
        <input
          type="text"
          className="form-control"
          id="coin"
          value={buyData.coin}
          onChange={(e) => setBuyData({ ...buyData, coin: e.target.value })}
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-6">
        <label for="quantity" className="form-label">
          Quantity
        </label>
        <input
          type="number"
          className="form-control"
          id="quantity"
          value={buyData.quantity}
          onChange={(e) => setBuyData({ ...buyData, quantity: e.target.value })}
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-6">
        <label for="price" className="form-label">
          Price Per Token
        </label>
        <input
          type="number"
          className="form-control"
          id="price"
          value={buyData.amount}
          onChange={(e) => setBuyData({ ...buyData, amount: e.target.value })}
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-12">
        <label for="total" className="form-label">
          Total {isBuy ? 'Spent' : 'Received'}
        </label>
        <textarea
          id="total"
          value={buyData.amount * buyData.quantity}
          className="form-control"
          disabled
          style={{
            resize: 'none',
            color: isDark ? 'rgba(225, 235, 245, 0.87)' : '#000',
          }}
        />
      </div>
      <div className="col-12">
        <button
          className="btn btn-primary w-100"
          type="submit"
          onClick={onSubmit}
        >
          Add Transaction
        </button>
      </div>
    </form>
  );
};

export default BuySellForm;
