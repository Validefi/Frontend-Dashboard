import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const DonutChart = ({
  title,
  series,
  width = 280,
  labels,
  toggleTransactionModal,
  togglePortfolioModal,
  isDark,
}) => {
  const [options] = useState({
    series: [44, 55, 41, 17, 15],
    labels: labels,
    plotOptions: {
      pie: {
        customScale: 1,
        expandOnClick: false,
      },
    },
  });
  return (
    <div className="col-sm-6 col-xl-5" style={{ height: '462px' }}>
      <div className="card" style={{ height: '100%' }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div id="apexchart">
            <Chart
              options={options}
              series={series}
              type="donut"
              width={width}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '10px',
              display: 'flex',
              left: '0',
              right: '0',
              padding: '5px 20px',
            }}
          >
            <button
              type="button"
              className="btn btn-primary"
              style={{
                flex: '1',
              }}
              onClick={toggleTransactionModal}
            >
              Add Transaction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
