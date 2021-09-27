import { useWeb3React } from '@web3-react/core';
import useAxios from 'axios-hooks';
import React, { useEffect, useMemo, useState } from 'react';
import { Search } from 'react-feather';
import { connect } from 'react-redux';
import { toggleLoading } from '../../Store/actionCreatos/auth';
import Image from '../../Utils/CoinImage';
import TextInput from '../../Utils/TextInput';
import { PairPoolData } from './data';

const PairPool = ({
  title,
  isSearch,
  url,
  refetchInterval,
  isGetRequest,
  reqBody,
  isEthereum,
  toggleLoading,
  isDataLoading,
}) => {
  const [data, setData] = useState([]);
  const { account } = useWeb3React();

  const [{ data: apiData, loading: isLoading, error }, refetch, cancelRequest] =
    useAxios({
      url: url,
      method: isGetRequest ? 'GET' : 'POST',
      data: isGetRequest ? undefined : reqBody,
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
                  <th scope="col">Date</th>
                  <th scope="col">Sender</th>
                  <th scope="col">Receiver</th>
                  <th scope="col">Coin</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                {PairPoolData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.date}</td>
                    <th scope="row">{item.sender}</th>
                    <td>{item.receiver}</td>
                    <td>
                      <Image contract_ticker_symbol={item?.token} />
                      {item.token}
                    </td>
                    <td>
                      <span className="badge bg-info">{item.amount}</span>
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
export default connect(mapStateToProps, mapDispatchToProps)(PairPool);
