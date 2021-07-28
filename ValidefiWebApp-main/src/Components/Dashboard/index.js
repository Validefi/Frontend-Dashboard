import React from 'react';
import Box from './Box';
import LongBox from './LongBox';
import Chart from './Chart';
// import Transactions from './Transactions';

const Dashboard = () => {
  return (
    <div className="page-content">
      <div className="main-wrapper">
        <div className="row">
          <Box title="Portfolio Value" data="100k" color="success" />
          <Box title="Monthly Profit" data={10} color="danger" />
          <Box title="Growth" data={10} color="info" />
          <Box title="Market Status" data="-10%" color="danger" />
        </div>
        <div className="row">
          <Chart />
          <LongBox title="Current Holdings" />
        </div>
        {/* <div className="row">
          <Transactions />
        </div> */}
        <div className="row">
          <LongBox title="Current Events" />
          <LongBox title="News &#38; Updates" />
          <LongBox title="Your Transactions" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
