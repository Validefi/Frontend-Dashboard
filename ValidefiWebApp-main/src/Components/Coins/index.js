import React, { useState } from 'react';
import './table.css';
import Table from '../../Utils/Table';
import SmallChart from '../../Utils/SmallChart';

const Coins = () => {
  const [series] = useState([
    {
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
    },
  ]);
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
        <SmallChart
          series={series}
          color={'#f00'}
          width={100}
          height={20}
          strokeWidth={3}
        />
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
