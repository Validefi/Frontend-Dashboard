import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const DonutChart = ({ series, width = 280, labels }) => {
  const [options] = useState({
    series: [44, 55, 41, 17, 15],
    labels: labels,
    plotOptions: {
      pie: {
        customScale: 1,
        expandOnClick: true,
      },
    },
  });
  return (
    <div id="apexchart">
      <Chart options={options} series={series} type="donut" width={width} />
    </div>
  );
};

export default DonutChart;
