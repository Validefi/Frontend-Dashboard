import { useWeb3React } from '@web3-react/core';
import useAxios from 'axios-hooks';
import React, { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { toggleLoading } from '../../../Store/actionCreatos/auth';
import Image from '../../../Utils/CoinImage';
import { SwapLiquidityData } from '../data';

const SwapLiquidity = ({
  title,
  url,
  refetchInterval,
  isGetRequest,
  reqBody,
  isEthereum,
  toggleLoading,
  isDataLoading,
  className = 'col-md-12 col-lg-12',
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
    <div className={className}>
      <div className="card table-widget" style={{ height: '95%' }}>
        <div className="card-body">
          <div className="d-flex" style={{ alignItems: 'center' }}>
            <h5 className="card-title" style={{ flex: 1 }}>
              {title}
            </h5>
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Market</th>
                  <th scope="col">Pair</th>
                  <th scope="col">Price</th>
                  <th scope="col">Volume</th>
                  <th scope="col">Change</th>
                  {/* <th scope="col">Liquidity</th> */}
                </tr>
              </thead>
              <tbody>
                {SwapLiquidityData.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <Image contract_ticker_symbol={item?.market} />
                      {item.market}
                    </td>
                    <th scope="row">{item.pair}</th>
                    <td>{item.price}</td>
                    <td>{item.volume}</td>
                    <td
                      className={
                        item.change >= 0 ? 'text-success' : 'text-danger'
                      }
                    >
                      {item.change >= 0 ? '+' : ''}
                      {item.change}%
                    </td>
                    {/* <td>{item.liquidity}</td> */}
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
export default connect(mapStateToProps, mapDispatchToProps)(SwapLiquidity);
