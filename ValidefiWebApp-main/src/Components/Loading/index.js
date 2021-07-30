import React from 'react';

const Loading = ({ color }) => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      display: 'grid',
      placeItems: 'center',
    }}
  >
    <div
      class={`spinner-border ${color ? color : 'text-primary'}`}
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
);

export default Loading;
