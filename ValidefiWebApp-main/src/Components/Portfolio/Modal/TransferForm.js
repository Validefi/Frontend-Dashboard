import React from 'react';
import Select from 'react-select';

const TransferForm = ({ isDark, isBuy, onSubmit }) => {
  const [transferData, setTransferData] = React.useState({
    coin: '',
    quantity: 0,
    mode: '',
  });

  const options = [
    { value: 'in', label: 'Transfer In' },
    { value: 'out', label: 'Transfer Out' },
  ];

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: isDark ? '#253345' : '#fff',
    }),
    option: (provided, state) => ({
      ...provided,
      color: isDark
        ? state.isSelected
          ? 'rgba(225, 235, 245, 0.87)'
          : 'rgba(225, 235, 245, 0.4)'
        : state.isSelected
        ? 'white'
        : '#5b5b5b',
      backgroundColor: isDark
        ? state.isSelected
          ? '#212d3d'
          : '#253345'
        : state.isSelected
        ? '#7888fc'
        : '#fff',
    }),
  };
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
          value={transferData.coin}
          onChange={(e) =>
            transferData({ ...transferData, coin: e.target.value })
          }
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-12">
        <label for="transfer" className="form-label">
          Transfer
        </label>
        <Select
          styles={customStyles}
          defaultValue={options[0]}
          isSearchable={false}
          onChange={(option) =>
            setTransferData({ ...transferData, mode: option.value })
          }
          options={options}
        />
        <div class="invalid-feedback">Please select a valid mode.</div>
      </div>
      <div className="col-md-12">
        <label for="quantity" className="form-label">
          Quantity
        </label>
        <input
          type="number"
          className="form-control"
          id="quantity"
          value={transferData.quantity}
          onChange={(e) =>
            setTransferData({ ...transferData, quantity: e.target.value })
          }
          required
        />
        <div className="valid-feedback">Looks good!</div>
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

export default TransferForm;
