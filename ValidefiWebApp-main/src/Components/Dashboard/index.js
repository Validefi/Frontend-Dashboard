import React from 'react';
import Box from './Box';
import LongBox from './LongBox';
import Chart from './Chart';

const Dashboard = () => {
  return (
    <div class="page-content">
      <div class="main-wrapper">
        <div class="row">
          <Box title="Portfolio Value" data="100k" color="success" />
          <Box title="Monthly Profit" data={10} color="danger" />
          <Box title="Growth" data={10} color="info" />
          <Box title="Market Status" data="-10%" color="danger" />
        </div>
        <div class="row">
          <Chart />
          <LongBox />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
