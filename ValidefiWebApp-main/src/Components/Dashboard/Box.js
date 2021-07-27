import React from 'react';

const Box = ({ title, data, color }) => {
  return (
    <div class="col-md-6 col-xl-3">
      <div class="card stat-widget">
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <h2>{data}</h2>
          <p>From last week</p>
          <div class="progress">
            <div
              class={`progress-bar bg-${color} progress-bar-striped`}
              role="progressbar"
              style={{ width: '25%' }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
