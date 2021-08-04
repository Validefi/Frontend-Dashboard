import React from 'react';

const Box = ({ title, data, color, isCurrentValue }) => {
  return (
    <div
      className={` ${
        isCurrentValue ? 'col-xl-6 col-md-12' : 'col-xl-3 col-md-6'
      }`}
    >
      <div className="card stat-widget" style={{ height: '12rem' }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h2 style={isCurrentValue ? { fontSize: '45px' } : {}}>{data}</h2>
          {!isCurrentValue && <p>From last week</p>}
          <div
            className="progress"
            style={isCurrentValue ? { display: 'none' } : {}}
          >
            {!isCurrentValue && (
              <div
                className={`progress-bar bg-${color} progress-bar-striped`}
                role="progressbar"
                style={{ width: '25%' }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
