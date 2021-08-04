import React from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import Select from 'react-select';

const Section = ({ title, data }) => {
  const { currentTheme } = useThemeSwitcher();

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: currentTheme === 'dark' ? '#253345' : '#fff',
    }),
    option: (provided, state) => ({
      ...provided,
      color:
        currentTheme === 'dark'
          ? state.isSelected
            ? 'rgba(225, 235, 245, 0.87)'
            : 'rgba(225, 235, 245, 0.4)'
          : state.isSelected
          ? 'white'
          : '#5b5b5b',
      backgroundColor:
        currentTheme === 'dark'
          ? state.isSelected
            ? '#212d3d'
            : '#253345'
          : state.isSelected
          ? '#7888fc'
          : '#fff',
    }),
    // placeholder: (provided, state) => ({
    //   ...provided,
    //   color: '#fff',
    // }),
    // control: (provided, state) => ({
    //   ...provided,
    //   backgroundColor: 'blue',
    //   borderRadius: '10px',
    // }),
  };
  return (
    <div className="mb-4">
      <div
        className="row mt-2 mb-3"
        style={{ display: 'inline-block', marginLeft: '0.6rem' }}
      >
        <button type="button" class="btn btn-primary text-left">
          {title}
        </button>
      </div>
      {data?.title?.map((item, index) => (
        <div class="row g-3 form-section">
          <div class="col-sm-3">
            <h6 className="profile--section-title">{item}</h6>
          </div>
          <div class="col-sm">
            <input
              type="text"
              class="form-control"
              placeholder={data?.value[index]}
              disabled
            />
          </div>
          <div class="col-sm">
            <Select
              placeholder="Manage"
              styles={customStyles}
              isSearchable={false}
              onChange={() => console.log('')}
              options={data?.options[index]}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section;
