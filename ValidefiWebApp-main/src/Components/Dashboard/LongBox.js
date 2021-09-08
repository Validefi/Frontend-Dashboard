import React, { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import useAxios from 'axios-hooks';
import { toggleLoading } from '../../Store/actionCreatos/auth';
import TransitionGroup from './TransitionGroup';
import TransactionTransition from './TransactionTransition';
import NewsTransitionGroup from './NewsTransitionGroup';
import MonitorWallet from './MonitorWallet';
import Loading from '../Loading';
import { Plus } from 'react-feather';
import { useWeb3React } from '@web3-react/core';
import DashboardModal from './DashboardModal';

const LongBox = ({
  title,
  url,
  isAddIcon,
  toggleModal,
  refetchInterval,
  isGetRequest,
  reqBody,
  isEthereum,
  toggleLoading,
  isDataLoading,
}) => {
  const { account } = useWeb3React();
  const [isOpen, toggle] = useState(false);
  const [data, setData] = useState([]);

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
  }, [account, isEthereum]);

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
  const shouldDisplay = useMemo(
    () => !isLoading && !error && !isDataLoading && data,
    [isLoading, error, isDataLoading, data]
  );

  return (
    <>
      <div className="col-sm-6 col-xl-4 ">
        <div className="card stat-widget ">
          <div
            className="card-body"
            style={{
              height: title === 'Current Holdings' ? '462px' : '573px',
              padding: title === 'News & Updates' ? '20px' : '30px',
            }}
          >
            <div
              className="card-body-header"
              style={{
                position: 'sticky',
                top: 0,
                height: '10%',
                padding: title === 'News & Updates' ? '10px' : '0px',
              }}
            >
              <h5 className="card-title">{title}</h5>
              {isAddIcon ? (
                <p
                  className="card-title-view d-flex align-items-center"
                  onClick={toggleModal}
                >
                  Add <Plus size={15} />
                </p>
              ) : (
                <>
                  {data && title !== 'Current Holdings' && (
                    <p className="card-title-view" onClick={() => toggle(true)}>
                      View All
                    </p>
                  )}
                </>
              )}
            </div>
            {(isLoading || isDataLoading) && !error && <Loading />}
            {error && (
              <p>
                There seems to be some problem while fetching the data. Please
                try again.
              </p>
            )}
            <div
              style={{
                height: '90%',
                overflow: 'hidden scroll',
              }}
            >
              {shouldDisplay && title === 'Current Holdings' && (
                <TransitionGroup title={title} data={data} />
              )}
              {shouldDisplay && title === 'Monitored Wallets' && (
                <MonitorWallet title={title} data={data} />
              )}
              {shouldDisplay &&
                data.transactions &&
                title === 'Your Transactions' && (
                  <TransactionTransition
                    title={title}
                    data={data?.transactions}
                  />
                )}
              {shouldDisplay && data.results && title === 'News & Updates' && (
                <NewsTransitionGroup title={title} data={data.results} />
              )}
            </div>
          </div>
        </div>
      </div>
      {isOpen && !isAddIcon && title !== 'Current Holdings' && (
        <DashboardModal
          isOpen={isOpen}
          handleClose={() => toggle(false)}
          title={title}
          reqBody={reqBody}
          refetchInterval={refetchInterval}
        />
      )}
    </>
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
export default connect(mapStateToProps, mapDispatchToProps)(LongBox);
