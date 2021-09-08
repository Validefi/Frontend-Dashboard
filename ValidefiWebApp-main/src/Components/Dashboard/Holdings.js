import React, { useEffect, useMemo, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { getIcon } from '../../Utils';
import { connect } from 'react-redux';
import useAxios from 'axios-hooks';
import { useWeb3React } from '@web3-react/core';
import { useDispatch } from 'react-redux';
import { setWalletBalance } from '../../Store/actionCreatos/wallets';
import DefaultCoin from '../../assets/default_coin.png';
import { toggleLoading } from '../../Store/actionCreatos/auth';
import Loading from '../Loading';

const Holdings = ({
  title,
  url,
  refetchInterval,
  reqBody,
  toggleLoading,
  isDataLoading,
}) => {
  const { account } = useWeb3React();
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const [{ data: apiData, loading: isLoading, error }, refetch, cancelRequest] =
    useAxios({
      url: url,
      method: 'POST',
      data: reqBody,
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
  }, [account]);

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, refetchInterval);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (apiData) {
      setData(apiData);
      toggleLoading(false);
    }
  }, [apiData, toggleLoading]);

  const isEthereum = false;

  const shouldDisplay = useMemo(
    () => !isLoading && !error && !isDataLoading && apiData,
    [isLoading, error, isDataLoading, apiData]
  );

  let wallet_balance = 0;
  const calculateBalance = (quote, index) => {
    wallet_balance += quote;
    if (index === data.length - 1) {
      dispatch(setWalletBalance(wallet_balance));
    }
    return parseFloat(quote.toFixed(2));
  };
  const calculateQuantity = (balance, decimal) => {
    const quantity = balance * Math.pow(10, -decimal);
    return parseFloat(quantity.toFixed(4));
  };
  return (
    <div className="col-sm-6 col-xl-4 ">
      <div className="card stat-widget ">
        <div
          className="card-body"
          style={{
            height: '462px',
            padding: '30px',
          }}
        >
          <div
            className="card-body-header"
            style={{
              position: 'sticky',
              top: 0,
              height: '10%',
              padding: '0px',
            }}
          >
            <h5 className="card-title">{title}</h5>
          </div>
          {(isLoading || isDataLoading) && !error && <Loading />}
          {error && (
            <p>
              There seems to be some problem while fetching the data. Please try
              again.
            </p>
          )}
          <div
            style={{
              height: '90%',
              overflow: 'hidden scroll',
            }}
          >
            {shouldDisplay && (
              <TransitionGroup className="todo-list">
                {data.length > 0 ? (
                  data.map((item, index) => (
                    <CSSTransition key={index} timeout={500} classNames="item">
                      <div className="transactions-list">
                        <div className="tr-item align-items-center">
                          <div className="tr-company-name">
                            <div
                              className="tr-icon tr-card-icon text-primary tr-card-bg-primary"
                              style={{
                                display: 'grid',
                                placeItems: 'center',
                                padding: 0,
                              }}
                            >
                              <Image
                                contract_ticker_symbol={
                                  item?.contract_ticker_symbol
                                }
                              />
                            </div>
                            <div className="tr-text">
                              <h4>{item?.contract_name}</h4>

                              <p>
                                {calculateQuantity(
                                  item?.balance,
                                  item?.contract_decimals,
                                  index
                                )}
                              </p>
                            </div>
                          </div>
                          <div>
                            <h5>${calculateBalance(item?.quote, index)}</h5>
                          </div>
                        </div>
                      </div>
                    </CSSTransition>
                  ))
                ) : (
                  <div className="todo-list">
                    <p>No data to display</p>
                  </div>
                )}
                {/* <button className="btn btn-primary w-100" onClick={addItemHandler}>
        Add Item
      </button> */}
              </TransitionGroup>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Image = ({ contract_ticker_symbol }) => {
  const [src, setSrc] = useState(
    `https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/${contract_ticker_symbol.toLowerCase()}.webp`
  );
  const onError = () => {
    setSrc(DefaultCoin);
  };
  return <img src={src} alt="Coin" onError={onError} width={30} />;
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
export default connect(mapStateToProps, mapDispatchToProps)(Holdings);
