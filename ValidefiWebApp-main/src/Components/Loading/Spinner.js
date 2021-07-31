import React from 'react';

const Loading = () => (
  <div style={{ position: 'fixed', top: '50%', left: '50%' }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export default Loading;
