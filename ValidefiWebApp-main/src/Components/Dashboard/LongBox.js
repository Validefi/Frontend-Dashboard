import React, { useEffect } from 'react';
import axios from 'axios';
import TransitionGroup from './TransitionGroup';
import { useQuery, useQueryClient } from 'react-query';
import Loading from '../Loading';

const LongBox = ({ title, url }) => {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery(
    title,
    async () => {
      const CancelToken = axios.CancelToken;
      const source = CancelToken.source();

      const promise = await axios.get(url, { cancelToken: source.token });
      promise.cancel = () => {
        source.cancel('Aborting the request');
      };
      return promise;
    },
    {
      retry: 2,
      // refetchInterval: 1000,
    }
  );
  useEffect(() => {
    return () => {
      queryClient.cancelQueries(title);
    };
  }, [queryClient, title]);
  console.log(isLoading, error, data);
  return (
    <>
      <div className="col-sm-6 col-xl-4 ">
        <div
          className={`card stat-widget ${
            title === 'Current Holdings' ? 'bg-primary text-white' : ''
          }`}
        >
          <div
            className="card-body"
            style={{
              minHeight: '476px',
            }}
          >
            <div className="card-body-header">
              <h5 className="card-title">{title}</h5>
              <p className="card-title-view">View All</p>
            </div>
            {isLoading && (
              <Loading
                color={title === 'Current Holdings' ? 'text-white' : ''}
              />
            )}
            {!isLoading && error && (
              <p>
                There seems to be some problem while fetching the data. Please
                try again.
              </p>
            )}
            {data && (
              <TransitionGroup
                isHoldings={title === 'Current Holdings'}
                data={data?.data}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LongBox;
