import React, { useMemo, useState } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import styled from 'styled-components';
import { useThemeSwitcher } from 'react-css-theme-switcher';

const TextField = styled.input`
  height: 32px;
  width: 200px;
  &:hover {
    cursor: pointer;
  }
`;

const Table = ({ title, columns, data, filterHeading, customStyles }) => {
  const { currentTheme } = useThemeSwitcher();
  const [filterText, setFilterText] = useState('');
  const filteredItems = data?.filter(
    (item) =>
      item.name.toLowerCase().includes(filterText.toLowerCase()) ||
      item.symbol.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = useMemo(
    () => (
      <FilterComponent
        filterHeading={filterHeading}
        onFilter={(e) => setFilterText(e.target.value)}
        filterText={filterText}
      />
    ),
    [filterText, filterHeading]
  );
  createTheme('dark', {
    text: {
      primary: 'rgba(225, 235, 245, 0.87)',
      secondary: '#7888fc',
    },
    background: {
      default: '#253345',
    },
    button: {
      default: 'rgba(225, 235, 245, 0.87)',
      focus: 'rgba(225, 235, 245, 0.5)',
      hover: 'rgba(225, 235, 245, 0.5)',
      disabled: 'rgba(225, 235, 245, 0.2)',
    },
  });
  createTheme('light', {
    text: {
      primary: '#5b5b5b',
      secondary: '#7888fc',
    },
    background: {
      default: '#fff',
    },
    button: {
      default: 'rgba(0,0,0,.54)',
      focus: 'rgba(0,0,0,.12)',
      hover: 'rgba(0,0,0,.12)',
      disabled: 'rgba(0, 0, 0, .18)',
    },
  });

  return (
    <DataTable
      title={title}
      columns={columns}
      data={filteredItems}
      theme={currentTheme === 'dark' ? 'dark' : 'light'}
      pagination
      paginationResetDefaultPage={filterText.length === 0}
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      persistTableHead
      customStyles={customStyles}
    />
  );
};

const FilterComponent = ({ filterText, onFilter, filterHeading }) => (
  <TextField
    id="search"
    type="text"
    className="form-control"
    placeholder={filterHeading}
    aria-label="Search Input"
    value={filterText}
    onChange={onFilter}
  />
);

export default Table;
