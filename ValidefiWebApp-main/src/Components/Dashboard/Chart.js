import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const CustomChart = () => {
  const [options] = useState({
    chart: {
      height: 350,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    colors: ['#b3baff', '#90e0db'],

    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00',
        '2018-09-19T01:30:00',
        '2018-09-19T02:30:00',
        '2018-09-19T03:30:00',
        '2018-09-19T04:30:00',
        '2018-09-19T05:30:00',
        '2018-09-19T06:30:00',
      ],
      labels: {
        style: {
          colors: 'rgba(94, 96, 110, .5)',
        },
      },
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
    grid: {
      borderColor: 'rgba(94, 96, 110, .5)',
      strokeDashArray: 4,
    },
  });
  const [series] = useState([
    {
      name: 'profit',
      data: [70, 79, 42, 51, 28, 40, 37],
    },
    {
      name: 'market growth',
      data: [41, 52, 14, 32, 45, 32, 21],
    },
  ]);
  return (
    <div class="col-sm-6 col-xl-8">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Revenue</h5>
          <div id="apexchart">
            <Chart
              options={options}
              series={series}
              type="area"
              //   width={500}
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomChart;
