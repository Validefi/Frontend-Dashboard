import React from 'react';
import Box from './Box';
import BoxPortfolio from './BoxPortfolio';
import LongBox from './LongBox';
import Chart from './Chart';
import { connect } from 'react-redux';
// import Transactions from './Transactions';

const Dashboard = ({ wallet_address }) => {
  // showAlert('Please install MetaMask', 'error');

  return (
    <div className="page-content">
      <div className="main-wrapper">
        <div
          className="alert alert-danger"
          role="alert"
          style={{
            display: 'grid',
            placeItems: 'center',
            height: '6rem',
            fontSize: '22px',
          }}
        >
          Advertisement
        </div>
        <div className="row">
          <Box title="Portfolio Value" data="100k" color="success" />
          <Box title="Monthly Profit" data={10} color="danger" />
          <BoxPortfolio
            title="Wallet Balance"
            data={'$480.99'}
            color="#FF1654"
          />
        </div>
        <div className="row">
          <Chart />
          <LongBox
            title="Current Holdings"
            url={`https://stg-api.unmarshal.io/v1/ethereum/address/${wallet_address}/assets?auth_key=VGVtcEtleQ%3D%3D`}
          />
        </div>
        {/* <div className="row">
          <Transactions />
        </div> */}
        <div className="row">
          <LongBox
            title="Monitored Wallets"
            url={`https://stg-api.unmarshal.io/v1/ethereum/address/${wallet_address}/assets?auth_key=VGVtcEtleQ%3D%3D`}
          />
          <LongBox
            title="News &#38; Updates"
            url={`https://stg-api.unmarshal.io/v1/ethereum/address/${wallet_address}/assets?auth_key=VGVtcEtleQ%3D%3D`}
          />
          <LongBox
            title="Your Transactions"
            url={`https://stg-api.unmarshal.io/v1/ethereum/address/${wallet_address}/transactions?page=1&pageSize=5&auth_key=VGVtcEtleQ%3D%3D`}
            // url="https://stg-api.unmarshal.io/v1/ethereum/address/0x48ba8eef1010be5dbf25f18a7cdb576ac66ca3c4/transactions?page=1&pageSize=5&auth_key=VGVtcEtleQ%3D%3D"
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  wallet_address: state.auth.wallet_address,
});

export default connect(mapStateToProps)(Dashboard);
