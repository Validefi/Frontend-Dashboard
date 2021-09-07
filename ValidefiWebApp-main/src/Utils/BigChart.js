import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const CustomChart = ({
  title,
  series,
  height,
  colors,
  tooltipFormat,
  Xcategories,
}) => {
  const [options] = useState({
    chart: {
      height: height || 350,
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    colors: colors,

    xaxis: {
      type: 'datetime',
      categories: Xcategories,
      labels: {
        style: {
          colors: 'rgba(94, 96, 110, .5)',
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.8,
        opacityTo: 0.6,
        stops: [0, 99],
      },
    },

    tooltip: {
      x: {
        format: tooltipFormat,
      },
    },
    grid: {
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

export default CustomChart;
