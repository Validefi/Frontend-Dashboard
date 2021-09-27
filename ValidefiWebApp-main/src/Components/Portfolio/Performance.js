import { useWeb3React } from '@web3-react/core';
import useAxios from 'axios-hooks';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Search, DollarSign } from 'react-feather';
import { connect } from 'react-redux';
import { toggleLoading } from '../../Store/actionCreatos/auth';
import Image from '../../Utils/CoinImage';
import TextInput from '../../Utils/TextInput';
import { performanceData } from '../Explorer/data';

const Performance = ({
  title,
  isSearch,
  url,
  refetchInterval,
  isEthereum,
  toggleLoading,
  isDataLoading,
}) => {
  const [data, setData] = useState([]);
  const { account } = useWeb3React();

  const [{ data: apiData, loading: isLoading, error }, refetch, cancelRequest] =
    useAxios({
      url: url,
      method: 'GET',
      timeout: 20000,
    });

  useEffect(() => {
    async function fetchData() {
      await cancelRequest();
      try {
        setData([]);
        await refetch();
      } catch (e) {
        console.error('Please try again');
      }
    }
    fetchData();
  }, [account, cancelRequest, isEthereum, refetch]);

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, refetchInterval);
    return () => {
      clearInterval(interval);
    };
  }, [refetch, refetchInterval]);

  useEffect(() => {
    if (apiData) {
      setData(apiData);
      toggleLoading(false);
    }
  }, [apiData, toggleLoading]);

  const shouldDisplay = useMemo(
    () => !isLoading && !error && !isDataLoading && apiData,
    [isLoading, error, isDataLoading, apiData]
  );

  const handleSearch = (e) => {};

  const calculateHoldings = useCallback((buyPrice, holdings) => {
    const value = holdings / buyPrice;
    return +value.toFixed(2);
  }, []);

  return (
    <div className="col-md-12 col-lg-12">
      <div className="card table-widget" style={{ height: '95%' }}>
        <div className="card-body">
          <div className="d-flex" style={{ alignItems: 'center' }}>
            <h5 className="card-title" style={{ flex: 1 }}>
              {title}
            </h5>
            {isSearch && (
              <TextInput
                style={{
                  width: '30%',
                  height: '100%',
                  marginRight: '15px',
                  marginTop: '-15px',
                }}
                label="Search"
                handleSubmit={handleSearch}
                icon={<Search />}
              />
            )}
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Coin</th>
                  <th scope="col">Price</th>
                  <th scope="col">Buy Price</th>
                  <th scope="col">Holdings</th>
                  <th scope="col">All time return</th>
                </tr>
              </thead>
              <tbody>
                {performanceData.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">
                      <Image contract_ticker_symbol={item?.coin} />
                      {item.coin}
                    </th>

                    <td>${item.price}</td>
                    <td>${item.buyPrice}</td>
                    <td>
                      <span style={{ fontWeight: 500 }}>${item.holdings}</span>
                      <span className="text-muted" style={{ display: 'block' }}>
                        {calculateHoldings(item.buyPrice, item.holdings)}{' '}
                        {item.coin}
                      </span>
                    </td>
                    <td style={{ fontWeight: 700 }}>
                      <span
                        className={`${
                          item.isPositive ? 'text-success' : 'text-danger'
                        }`}
                      >
                        {item.isPositive ? '+' : '-'}
                        {item.change}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isEthereum: state.auth.isEthereum,
  isDataLoading: state.auth.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  toggleLoading: (isEthereum) => {
    dispatch(toggleLoading(isEthereum));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Performance);
