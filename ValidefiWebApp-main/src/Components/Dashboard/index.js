import React from 'react';
import Box from './Box';
import LongBox from './LongBox';
import Chart from './Chart';
import { connect } from 'react-redux';
// import Transactions from './Transactions';

const Dashboard = ({ wallet_address }) => {
  return (
    <div className="page-content">
      <div className="main-wrapper">
        <div
          class="alert alert-danger"
          role="alert"
          style={{ textAlign: 'center' }}
        >
          Advertisement
        </div>
        <div className="row">
          <Box title="Portfolio Value" data="100k" color="success" />
          <Box title="Monthly Profit" data={10} color="danger" />
          <Box title="Growth" data={10} color="info" />
          <Box title="Market Status" data="-10%" color="danger" />
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
            title="Current Events"
            url={`https://stg-api.unmarshal.io/v1/ethereum/address/${wallet_address}/assets?auth_key=VGVtcEtleQ%3D%3D`}
          />
          <LongBox
            title="News &#38; Updates"
            url={`https://stg-api.unmarshal.io/v1/ethereum/address/${wallet_address}/assets?auth_key=VGVtcEtleQ%3D%3D`}
          />
          <LongBox
            title="Your Transactions"
            url={`https://stg-api.unmarshal.io/v1/ethereum/address/${wallet_address}/assets?auth_key=VGVtcEtleQ%3D%3D`}
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
