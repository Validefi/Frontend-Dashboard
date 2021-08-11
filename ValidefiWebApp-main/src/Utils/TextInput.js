import React, { useState } from 'react';

const TextInput = ({ handleSubmit, icon }) => {
  const [text, setText] = useState('');
  const handleKeypress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(text);
    }
  };
  return (
    <div className="input-group flex-nowrap">
      <input
        type="text"
        className="form-control accordion-flush"
        placeholder="Enter wallet address"
        aria-label="Enter wallet address"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeypress}
      />
      <button
        className="input-group-text nav-link search-icon"
        aria-expanded="false"
        style={{ backgroundColor: '#fff' }}
        onClick={() => handleSubmit(text)}
      >
        {icon}
      </button>
    </div>
  );
};

export default TextInput;
