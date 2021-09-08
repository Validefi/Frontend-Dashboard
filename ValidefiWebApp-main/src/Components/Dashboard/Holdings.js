import React, { useEffect, useMemo, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import useAxios from 'axios-hooks';
import { Link, useHistory } from 'react-router-dom';
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
  const [ethData, setETHData] = useState([]);
  const [bscData, setBSCData] = useState([]);
  const history = useHistory();

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
    if (ETHData) {
      setETHData(ETHData);
      toggleLoading(false);
    }
    if (BSCData) {
      setBSCData(BSCData);
      toggleLoading(false);
    }
  }, [BSCData, ETHData, toggleLoading]);

  useEffect(() => {
    const hash = history.location.hash;
    // Check if there is a hash and if an element with that id exists
    const el = hash && document.getElementById(hash.substr(1));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history.location.hash]);

  const shouldETHDisplay = useMemo(
    () => !isETHLoading && !ethError && !isDataLoading && ETHData,
    [isETHLoading, ethError, isDataLoading, ETHData]
  );
  const shouldBSCDisplay = useMemo(
    () => !isBSCLoading && !bscError && !isDataLoading && BSCData,
    [isBSCLoading, bscError, isDataLoading, BSCData]
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
            <div>
              <p
                style={{
                  borderRadius: '10px',
                  backgroundColor: '#fad7dd',
                  color: '#ee6e83',
                  borderColor: '#fad7dd',
                  marginRight: '10px',
                  padding: '5px 25px',
                  fontWeight: 600,
                }}
              >
                ETH
              </p>
              <Link
                to="#bsc"
                style={{
                  borderRadius: '10px',
                  backgroundColor: '#fad7dd',
                  color: '#ee6e83',
                  borderColor: '#fad7dd',
                  marginRight: '10px',
                  padding: '5px 25px',
                  fontWeight: 600,
                }}
              >
                BSC
              </Link>
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
            {shouldETHDisplay && ethData?.length > 0 && (
              <TransitionGroup
                className="todo-list w-100 d-flex"
                style={{
                  flexDirection: 'column',
                }}
              >
                <p
                  className="active-sidebar-item"
                  style={{
                    lineHeight: '45px',
                    padding: '0 15px',
                    opacity: '1',
                  }}
                >
                  Ethereum
                </p>
                {ethData.map((item, index) => (
                  <CSSTransition key={index} timeout={500} classNames="item">
                    <Item
                      item={item}
                      index={index}
                      dataLength={ethData.length}
                    />
                  </CSSTransition>
                ))}
              </TransitionGroup>
            )}
            {shouldBSCDisplay && bscData?.length > 0 && (
              <TransitionGroup
                className="todo-list w-100 d-flex"
                style={{
                  flexDirection: 'column',
                }}
              >
                <p
                  className="active-sidebar-item"
                  style={{
                    lineHeight: '45px',
                    padding: '0 15px',
                    opacity: '1',
                  }}
                  id="bsc"
                >
                  Binance Smart Chain
                </p>
                {bscData.map((item, index) => (
                  <CSSTransition key={index} timeout={500} classNames="item">
                    <Item
                      item={item}
                      index={index}
                      dataLength={bscData.length}
                    />
                  </CSSTransition>
                ))}
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

const Item = ({ item, index, dataLength }) => {
  const dispatch = useDispatch();
  let wallet_balance = 0;
  const calculateBalance = (quote, index) => {
    wallet_balance += quote;
    if (index === dataLength - 1) {
      dispatch(setWalletBalance(wallet_balance));
    }
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
          <h5>${calculateBalance(item?.quote, index)}</h5>
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
