import React, { useEffect } from 'react';
import axios from 'axios';
import TransitionGroup from './TransitionGroup';
import TransactionTransition from './TransactionTransition';
import NewsTransitionGroup from './NewsTransitionGroup';
import { useQuery, useQueryClient } from 'react-query';
import Loading from '../Loading';
import { Plus } from 'react-feather';
import { useWeb3React } from '@web3-react/core';

const LongBox = ({
  title,
  url,
  isAddIcon,
  toggleModal,
  refetchInterval,
  isGetRequest,
  reqBody,
}) => {
  const { account } = useWeb3React();

  const queryClient = useQueryClient();

  const { isLoading, error, data, refetch } = useQuery(
    title,
    async () => {
      const CancelToken = axios.CancelToken;
      const source = CancelToken.source();

      let promise;
      if (isGetRequest) {
        promise = await axios.get(url, { cancelToken: source.token });
      } else {
        promise = await axios.post(url, reqBody, { cancelToken: source.token });
      }

      promise.cancel = () => {
        source.cancel('Aborting the request');
      };
      return promise;
    },
    {
      retry: (count, { message: status }) =>
        status !== '404' && status !== '401',
      refetchInterval: refetchInterval,
    }
  );
  useEffect(() => {
    refetch();
    return () => {
      queryClient.cancelQueries(title);
    };
  }, [account]);
  return (
    <>
      <div className="col-sm-6 col-xl-4 ">
        <div className="card stat-widget ">
          <div
            className="card-body"
            style={{
              height: title === 'Current Holdings' ? '462px' : '573px',
            }}
          >
            <div
              className="card-body-header"
              style={{ position: 'sticky', top: 0, height: '10%' }}
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
                  {title !== 'Current Holdings' && (
                    <p className="card-title-view">View All</p>
                  )}
                </>
              )}
            </div>
            {isLoading && !error && <Loading />}
            {!isLoading && error && (
              <p>
                There seems to be some problem while fetching the data. Please
                try again.
              </p>
            )}
            <div
              style={{
                height: '90%',
                overflow: 'hidden scroll',
                scrollbarWidth: 'thin',
              }}
            >
              {data && title === 'Current Holdings' && (
                <TransitionGroup title={title} data={data?.data} />
              )}
              {data && title === 'Monitored Wallets' && (
                <TransitionGroup title={title} data={data?.data} />
              )}
              {data && title === 'News & Updates' && (
                <NewsTransitionGroup title={title} data={data?.data?.results} />
              )}
              {data && title === 'Your Transactions' && (
                <TransactionTransition
                  title={title}
                  data={data?.data?.transactions}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LongBox;
