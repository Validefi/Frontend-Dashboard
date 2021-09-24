import React, { useEffect, useMemo, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import useAxios from 'axios-hooks';
import { connect } from 'react-redux';
import { toggleLoading } from '../../Store/actionCreatos/auth';
import { profitBarData } from '../Explorer/data';

const ProfitBar = ({
  title,
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
    <div className="col-md-12 col-lg-6">
      <div className="card table-widget" style={{ height: '95%' }}>
        <div className="card-body">
          <h5 className="card-title" style={{ flex: 1 }}>
            {title}
          </h5>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  {profitBarData.map((item, index) => (
                    <td key={index}>
                      <span
                        className={`${
                          item.isPositive ? 'text-success' : 'text-danger'
                        }`}
                        style={{
                          fontSize: '1.4rem',
                          fontWeight: '500',
                        }}
                      >
                        {item.isPositive ? '+' : '-'}
                        {item.change}%
                      </span>
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {profitBarData.map((item, index) => (
                    <td key={index}>{item.time}</td>
                  ))}
                </tr>
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
export default connect(mapStateToProps, mapDispatchToProps)(ProfitBar);
