import React, { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import useAxios from 'axios-hooks';
import { toggleLoading } from '../../../Store/actionCreatos/auth';
// import TransactionTransition from './TransactionTransition';
import Loading from '../../Loading';
import { useWeb3React } from '@web3-react/core';
// import DashboardModal from './DashboardModal';
import { Plus } from 'react-feather';

const AlertBox = ({
  title,
  url,
  refetchInterval,
  reqBody,
  isEthereum,
  toggleLoading,
  isDataLoading,
  monitored_wallet,
  toggleModal,
}) => {
  const { account } = useWeb3React();
  const [isOpen, toggle] = useState(false);
  const [data, setData] = useState([]);

  const [{ data: apiData, loading: isLoading, error }, refetch, cancelRequest] =
    useAxios({
      url: url,
      method: 'POST',
      data: reqBody,
      timeout: reqBody.address ? 20000 : 10,
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

  return (
    <>
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
              {reqBody.address && data ? (
                <p
                  className="card-title-view d-flex align-items-center"
                  onClick={() => toggle(true)}
                >
                  View All
                </p>
              ) : (
                <p
                  className="card-title-view d-flex align-items-center"
                  onClick={toggleModal}
                >
                  Add <Plus size={15} />
                </p>
              )}
            </div>
            {(isLoading || isDataLoading) && !error && <Loading />}
            {!reqBody.address && <p>You can add alerts from here.</p>}
            {error && reqBody.address && (
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
              {/* {shouldDisplay && monitored_wallet && data.transactions && (
                // <TransactionTransition data={data?.transactions} />
              )} */}
            </div>
          </div>
        </div>
      </div>
      {/* {isOpen && (
        <DashboardModal
          isOpen={isOpen}
          handleClose={() => toggle(false)}
          title={title}
          reqBody={reqBody}
          refetchInterval={refetchInterval}
        />
      )} */}
    </>
  );
};

const mapStateToProps = (state) => ({
  isEthereum: state.auth.isEthereum,
  isDataLoading: state.auth.isLoading,
  monitored_wallet: state.wallet.monitored_wallet,
});

const mapDispatchToProps = (dispatch) => ({
  toggleLoading: (isEthereum) => {
    dispatch(toggleLoading(isEthereum));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(AlertBox);
