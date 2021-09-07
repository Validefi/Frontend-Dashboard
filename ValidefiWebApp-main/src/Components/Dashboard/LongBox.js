import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { toggleLoading } from '../../Store/actionCreatos/auth';
import TransitionGroup from './TransitionGroup';
import TransactionTransition from './TransactionTransition';
import NewsTransitionGroup from './NewsTransitionGroup';
import { useQuery, useQueryClient } from 'react-query';
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
  const queryClient = useQueryClient();
  const [isOpen, toggle] = useState(false);
  const { isLoading, error, data, refetch } = useQuery(
    ['data', title],
    async () => {
      const CancelToken = axios.CancelToken;
      const source = CancelToken.source();

      let promise;
      if (isGetRequest) {
        promise = await axios.get(url, {
          cancelToken: source.token,
        });
      } else {
        promise = await axios.post(url, reqBody, {
          cancelToken: source.token,
        });
      }

      promise.cancel = () => {
        source.cancel('Aborting the request');
      };
      return promise;
    },
    {
      retry: (count, { message: status }) =>
        status !== '404' && status !== '401',
      retryDelay: 6000,
      refetchInterval: refetchInterval,
    }
  );
  useEffect(() => {
    async function fetchData() {
      await queryClient.cancelQueries('data');
      refetch();
    }
    fetchData();
  }, [account, isEthereum]);

  useEffect(() => {
    if (data) toggleLoading(false);
  }, [data, toggleLoading]);

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
              {console.log(title === 'Current Holdings', data)}
              {data && title === 'Current Holdings' && (
                <TransitionGroup title={title} data={data?.data} />
              )}
              {data && title === 'Monitored Wallets' && (
                <TransitionGroup title={title} data={data?.data} />
              )}
              {data && title === 'Your Transactions' && (
                <TransactionTransition
                  title={title}
                  data={data?.data?.transactions}
                />
              )}
              {data && title === 'News & Updates' && (
                <NewsTransitionGroup title={title} data={data?.data?.results} />
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
