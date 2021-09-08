import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const BigChart = ({
  title,
  series,
  height = 350,
  colors,
  tooltipFormat,
  Xcategories,
}) => {
  const [options] = useState({
    chart: {
      height: height,
      toolbar: {
        show: true,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'smooth',
    },
    colors: colors,
    xaxis: {
      type: 'datetime',
      categories: Xcategories,
      labels: {
        show: true,
        style: {
          colors: 'rgba(94, 96, 110, .5)',
        },
      },
    },
    yaxis: {
      color: '#000000',
      axisBorder: { color: '#000000' },
      crosshairs: {
        show: true,
        position: 'back',
        stroke: {
          color: '#000000',
        },
      },
    },
    tooltip: {
      x: {
        format: tooltipFormat,
      },
    },
    grid: {
      show: true,
      borderColor: 'rgba(94, 96, 110, .5)',
      strokeDashArray: 4,
    },
  });

  return (
    <div className="col-sm-6 col-xl-8">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
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

export default BigChart;
