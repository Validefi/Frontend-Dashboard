import { useWeb3React } from '@web3-react/core';
import useAxios from 'axios-hooks';
import React, { useEffect, useMemo, useState } from 'react';
import { Search } from 'react-feather';
import { connect } from 'react-redux';
import { toggleLoading } from '../../Store/actionCreatos/auth';
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

  return (
    <div className="col-md-12 col-lg-4">
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
                  <th scope="col">Performance</th>
                </tr>
              </thead>
              <tbody>
                {performanceData.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{item.coin}</th>
                    <td>
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
