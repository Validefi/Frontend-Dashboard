import React, { useEffect, useMemo, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
  refetchInterval,
  reqBody,
  toggleLoading,
  isDataLoading,
}) => {
  const { account } = useWeb3React();
  const dispatch = useDispatch();
  const [ethData, setETHData] = useState([]);
  const [bscData, setBSCData] = useState([]);
  const [showETH, setShowETH] = useState(true);
  const [balance, setBalance] = useState(0);

  const [
    { data: ETHData, loading: isETHLoading, error: ethError },
    refetchETH,
    cancelRequestETH,
  ] = useAxios({
    url: `${process.env.REACT_APP_BASE_URL}/ethTokenBalance/`,
    method: 'POST',
    data: reqBody,
    timeout: 20000,
  });
  const [
    { data: BSCData, loading: isBSCLoading, error: bscError },
    refetchBSC,
    cancelRequestBSC,
  ] = useAxios({
    url: `${process.env.REACT_APP_BASE_URL}/bscTokenBalance/`,
    method: 'POST',
    data: reqBody,
    timeout: 20000,
  });

  useEffect(() => {
    async function fetchData() {
      await cancelRequestETH();
      await cancelRequestBSC();
      try {
        setETHData([]);
        setBSCData([]);
        await refetchETH();
        await refetchBSC();
      } catch (e) {
        console.error('Please try again');
      }
    }
    fetchData();
  }, [account]);

  useEffect(() => {
    const interval = setInterval(() => {
      refetchETH();
      refetchBSC();
    }, refetchInterval);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const getSum = (total, num) => {
      return total + num;
    };
    if (ETHData) {
      const ethBalance = ETHData.map((item) => item?.quote)?.reduce(getSum, 0);
      setETHData(ETHData);
      setBalance((prev) => prev + ethBalance);
      toggleLoading(false);
    }
    if (BSCData) {
      const bscBalance = BSCData.map((item) => item?.quote)?.reduce(getSum, 0);
      setBSCData(BSCData);
      setBalance((prev) => prev + bscBalance);
      toggleLoading(false);
    }
  }, [BSCData, ETHData, toggleLoading]);

  useEffect(() => {
    dispatch(setWalletBalance(balance));
  }, [balance, dispatch]);

  const shouldETHDisplay = useMemo(
    () => showETH && !isETHLoading && !ethError && !isDataLoading,
    [isETHLoading, ethError, isDataLoading, showETH]
  );
  const shouldBSCDisplay = useMemo(
    () => !showETH && !isBSCLoading && !bscError && !isDataLoading,
    [isBSCLoading, bscError, isDataLoading, showETH]
  );

  return (
    <div className="col-sm-6 col-xl-4 ">
      <div className="card stat-widget ">
        <div
          className="card-body"
          style={{
            height: '440px',
            padding: '30px',
            overflow: 'hidden',
          }}
        >
          <div
            className="card-body-header"
            style={{
              position: 'sticky',
              top: 0,
              minHeight: '10%',
              padding: '0px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h5 className="card-title" style={{ marginBlock: '10px' }}>
              {title}
            </h5>
            <div class="card-header w-100" style={{ padding: '0 0 15px 5px' }}>
              <ul class="nav nav-tabs card-header-tabs d-flex w-100">
                <li class="nav-item">
                  <button
                    onClick={() => setShowETH(true)}
                    style={{
                      borderRadius: '10px',
                      backgroundColor: showETH ? '#f3f6f9' : '#fff',
                      color: '#7888fc',
                      borderColor: '#fad7dd',
                      marginRight: '10px',
                      padding: '5px 25px',
                      border: 'none',
                    }}
                  >
                    ETH
                  </button>
                </li>
                <li class="nav-item">
                  <button
                    onClick={() => setShowETH(false)}
                    style={{
                      borderRadius: '10px',
                      backgroundColor: showETH ? '#fff' : '#f3f6f9',
                      color: '#7888fc',
                      padding: '5px 25px',
                      border: 'none',
                    }}
                  >
                    BSC
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {(isETHLoading || isBSCLoading || isDataLoading) &&
            !(ethError && bscError) && <Loading />}

          {(ethError || bscError) && (
            <p>
              There seems to be some problem while fetching the data. Please try
              again.
            </p>
          )}
          <div
            style={{
              height: '80%',
              overflow: 'hidden scroll',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {shouldETHDisplay && (
              <TransitionGroup
                className="todo-list w-100 d-flex mt-1"
                style={{
                  flexDirection: 'column',
                }}
              >
                {ethData.length > 0 ? (
                  <>
                    {ethData.map((item, index) => (
                      <CSSTransition
                        key={index}
                        timeout={500}
                        classNames="item"
                      >
                        <Item item={item} index={index} />
                      </CSSTransition>
                    ))}
                  </>
                ) : (
                  <p>You don't have any holdings on Ethereum Chain.</p>
                )}
              </TransitionGroup>
            )}
            {shouldBSCDisplay && (
              <TransitionGroup
                className="todo-list w-100 d-flex mt-1"
                style={{
                  flexDirection: 'column',
                }}
              >
                {bscData.length > 0 ? (
                  <>
                    {bscData.map((item, index) => (
                      <CSSTransition
                        key={index}
                        timeout={500}
                        classNames="item"
                      >
                        <Item item={item} index={index} />
                      </CSSTransition>
                    ))}
                  </>
                ) : (
                  <p>You don't have any holding on Binance Smart Chain.</p>
                )}
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

const Item = ({ item, index }) => {
  const calculateBalance = (quote) => {
    return parseFloat(quote.toFixed(2));
  };

  const calculateQuantity = (balance, decimal) => {
    const quantity = balance * Math.pow(10, -decimal);
    return parseFloat(quantity.toFixed(4));
  };
  return (
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
            <Image contract_ticker_symbol={item?.contract_ticker_symbol} />
          </div>
          <div className="tr-text">
            <h4>{item?.contract_name}</h4>

            <p>
              {calculateQuantity(item?.balance, item?.contract_decimals, index)}
            </p>
          </div>
        </div>
        <div>
          <h5>${calculateBalance(item?.quote)}</h5>
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
export default connect(mapStateToProps, mapDispatchToProps)(Holdings);
