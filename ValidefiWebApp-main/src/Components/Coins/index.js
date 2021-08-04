import React from 'react';
import './table.css';
import Table from '../../Utils/Table';

const Coins = () => {
  const columns = [
    {
      name: 'Rank',
      selector: 'rank',
      sortable: true,
    },
    {
      name: 'Symbol',
      selector: 'symbol',
      sortable: true,
    },
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Price',
      selector: 'price',
      sortable: true,
    },
    {
      name: 'Mk. Cap',
      selector: 'cap',
      sortable: true,
    },
    {
      name: 'Pairs',
      selector: 'pairs',
      sortable: true,
    },
    {
      name: 'Graph',
      cell: (row) => (
        <button onClick={() => console.log('')} id={row.ID}></button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];
  const data = [
    {
      rank: 1,
      symbol: 'BTC',
      name: 'Bitcoin',
      price: '$35000',
      cap: '$1 Trillion',
      pairs: 'BTC/USDT',
    },
    {
      rank: 2,
      symbol: 'ETH',
      name: 'Ethereum',
      price: '$2000',
      cap: '$500 Million',
      pairs: 'ETH/USDT',
    },
    {
      rank: 2,
      symbol: 'ETH',
      name: 'Ethereum',
      price: '$2000',
      cap: '$500 Million',
      pairs: 'ETH/USDT',
    },
    {
      rank: 2,
      symbol: 'ETH',
      name: 'Ethereum',
      price: '$2000',
      cap: '$500 Million',
      pairs: 'ETH/USDT',
    },
    {
      rank: 2,
      symbol: 'ETH',
      name: 'Ethereum',
      price: '$2000',
      cap: '$500 Million',
      pairs: 'ETH/USDT',
    },
    {
      rank: 2,
      symbol: 'ETH',
      name: 'Ethereum',
      price: '$2000',
      cap: '$500 Million',
      pairs: 'ETH/USDT',
    },
    {
      rank: 2,
      symbol: 'ETH',
      name: 'Ethereum',
      price: '$2000',
      cap: '$500 Million',
      pairs: 'ETH/USDT',
    },
    {
      rank: 2,
      symbol: 'ETH',
      name: 'Ethereum',
      price: '$2000',
      cap: '$500 Million',
      pairs: 'ETH/USDT',
    },
    {
      rank: 2,
      symbol: 'ETH',
      name: 'Ethereum',
      price: '$2000',
      cap: '$500 Million',
      pairs: 'ETH/USDT',
    },
    {
      rank: 2,
      symbol: 'ETH',
      name: 'Ethereum',
      price: '$2000',
      cap: '$500 Million',
      pairs: 'ETH/USDT',
    },
    {
      rank: 2,
      symbol: 'ETH',
      name: 'Ethereum',
      price: '$2000',
      cap: '$500 Million',
      pairs: 'ETH/USDT',
    },
  ];

  return (
    <div class="page-content">
      <div class="main-wrapper">
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <Table
                  title="Coin List"
                  columns={columns}
                  data={data}
                  filterHeading="Find Coin"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coins;
