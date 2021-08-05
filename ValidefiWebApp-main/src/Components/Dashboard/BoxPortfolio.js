import React, { useState } from 'react';
import SmallChart from '../../Utils/SmallChart';

const Box = ({ title, data, color }) => {
  const [series] = useState([
    {
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
    },
  ]);
  return (
    <div className="col-xl-6 col-md-12">
      <div className="card stat-widget" style={{ height: '12rem' }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="dashboard-portfolio-card">
            <h2 className="dashboard-portfolio-card-heading">{data}</h2>
            <SmallChart series={series} color={color} width={150} height={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
