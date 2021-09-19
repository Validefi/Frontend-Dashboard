import React from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { tickerData } from './data';

const CustomTicker = () => {
  const { currentTheme } = useThemeSwitcher();

  return (
    <>
      {tickerData.map(({ pair, change, isPositive }) => (
        <div
          className="d-flex mx-2 px-3 py-1 align-items-center text-center"
          style={{
            backgroundColor: currentTheme === 'dark' ? '#253347' : '#fff',
            borderRadius: '8px',
          }}
        >
          <p
            className="mb-0"
            style={{
              marginRight: '8px',
              fontSize: '1.1rem',
              fontWeight: '500',
            }}
          >
            {pair}
          </p>
          <p className={`mb-0 ${isPositive ? 'text-success' : 'text-danger'}`}>
            {isPositive ? '+' : '-'}
            {change}%
          </p>
        </div>
      ))}
    </>
  );
};

export default CustomTicker;
