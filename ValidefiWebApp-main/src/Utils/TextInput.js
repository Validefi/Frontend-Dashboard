import React, { useState } from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';

const TextInput = ({ handleSubmit, icon, autoFocus = false }) => {
  const { currentTheme } = useThemeSwitcher();

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
        autoFocus={autoFocus}
      />
      <button
        className="input-group-text nav-link search-icon"
        aria-expanded="false"
        style={{
          backgroundColor: currentTheme === 'dark' ? '#2B3B52' : '#fff',
        }}
        onClick={() => handleSubmit(text)}
      >
        {icon}
      </button>
    </div>
  );
};

export default TextInput;
