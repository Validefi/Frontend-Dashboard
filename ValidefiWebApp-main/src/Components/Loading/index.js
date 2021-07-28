import React from 'react';

const Loading = () => (
  <div style={{ position: 'fixed', top: '50%', left: '50%' }}>
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
);

export default Loading;
