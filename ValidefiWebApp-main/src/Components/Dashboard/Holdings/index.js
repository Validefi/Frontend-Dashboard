import React, { useEffect, useMemo, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import useAxios from 'axios-hooks';
import { useWeb3React } from '@web3-react/core';
import { useDispatch } from 'react-redux';
import { setWalletBalance } from '../../../Store/actionCreatos/wallets';
import { toggleLoading } from '../../../Store/actionCreatos/auth';
import Loading from '../../Loading';
import Item from './Item';

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

  const [
    { data: ETHData, loading: isETHLoading, error: ethError },
    refetchETH,
    cancelRequestETH,
  ] = useAxios({
    url: `${process.env.REACT_APP_BASE_URL}/ethTokenBalance/`,
    method: 'POST',
    data: reqBody,
    timeout: 25000,
  });

  const [
    { data: BSCData, loading: isBSCLoading, error: bscError },
    refetchBSC,
    cancelRequestBSC,
  ] = useAxios({
    url: `${process.env.REACT_APP_BASE_URL}/bscTokenBalance/`,
    method: 'POST',
    data: reqBody,
    timeout: 25000,
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
  }, [account, cancelRequestBSC, cancelRequestETH, refetchBSC, refetchETH]);

  useEffect(() => {
    const interval = setInterval(() => {
      refetchETH();
      refetchBSC();
    }, refetchInterval);
    return () => {
      clearInterval(interval);
    };
  }, [refetchBSC, refetchETH, refetchInterval]);

  const getSum = (total, num) => {
    return total + num;
  };

  useEffect(() => {
    let balance = 0;
    if (ETHData) {
      balance = balance + ETHData.map((item) => item?.quote)?.reduce(getSum, 0);
      setETHData(ETHData);
    }
    if (BSCData) {
      balance = balance + BSCData.map((item) => item?.quote)?.reduce(getSum, 0);
      setBSCData(BSCData);
    }
    toggleLoading(false);
    dispatch(setWalletBalance(balance));
  }, [BSCData, ETHData, dispatch, toggleLoading]);

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
                    className="holdings-tab"
                    style={{
                      backgroundColor: showETH ? '#f3f6f9' : '#fff',
                    }}
                  >
                    ETH
                  </button>
                </li>
                <li class="nav-item">
                  <button
                    onClick={() => setShowETH(false)}
                    className="holdings-tab"
                    style={{
                      backgroundColor: showETH ? '#fff' : '#f3f6f9',
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
