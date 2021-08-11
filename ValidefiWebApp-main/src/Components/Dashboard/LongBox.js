import React, { useEffect } from 'react';
import axios from 'axios';
import TransitionGroup from './TransitionGroup';
import TransactionTransition from './TransactionTransition';
import { useQuery, useQueryClient } from 'react-query';
import Loading from '../Loading';
import { connect } from 'react-redux';
import { Plus } from 'react-feather';

const LongBox = ({ title, url, wallet_address, isAddIcon, toggleModal }) => {
  const queryClient = useQueryClient();

  const { isLoading, error, data, refetch } = useQuery(
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
    refetch();
    return () => {
      queryClient.cancelQueries(title);
    };
  }, [queryClient, refetch, title, wallet_address]);

  return (
    <>
      <div className="col-sm-6 col-xl-4 ">
        <div className="card stat-widget ">
          <div
            className="card-body"
            style={{
              minHeight: title === 'Current Holdings' ? '476px' : '573px',
            }}
          >
            <div className="card-body-header">
              <h5 className="card-title">{title}</h5>
              {isAddIcon ? (
                <p
                  className="card-title-view d-flex align-items-center"
                  onClick={toggleModal}
                >
                  Add <Plus size={15} />
                </p>
              ) : (
                <p className="card-title-view">View All</p>
              )}
            </div>
            {isLoading && <Loading />}
            {!isLoading && error && (
              <p>
                There seems to be some problem while fetching the data. Please
                try again.
              </p>
            )}
            {data && title !== 'Your Transactions' && (
              <TransitionGroup title={title} data={data?.data} />
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
    </>
  );
};

const mapStateToProps = (state) => ({
  wallet_address: state.auth.wallet_address,
});

export default connect(mapStateToProps)(LongBox);
