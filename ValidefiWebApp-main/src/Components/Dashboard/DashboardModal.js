import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import useAxios from 'axios-hooks';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { getIcon } from '../../Utils';
import Modal from '../../Utils/Modal';
import { connect } from 'react-redux';
import Loading from '../Loading';

const DashboardModal = ({
  isOpen,
  handleClose,
  title,
  reqBody,
  refetchInterval,
  isEthereum,
}) => {
  const [modalData, setModalData] = useState(null);

  const url = React.useMemo(
    () =>
      title === 'News & Updates'
        ? `${process.env.REACT_APP_BASE_URL}/news/`
        : `${process.env.REACT_APP_BASE_URL}/${
            isEthereum ? 'ethTransactionsAll/' : 'bscTransactionsAll/'
          }`,
    [title, isEthereum]
  );

  const [{ data, loading: isLoading, error }, refetch] = useAxios({
    url: url,
    method: title === 'News & Updates' ? 'GET' : 'POST',
    data: title === 'News & Updates' ? undefined : reqBody,
    timeout: 20000,
  });

  const ModalContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 1.6rem 0 1.6rem;
  `;

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, refetchInterval);
    return () => {
      clearInterval(interval);
    };
  }, [refetch, refetchInterval]);

  useEffect(() => {
    if (title === 'News & Updates') {
      setModalData(data?.results);
    } else {
      setModalData(data?.transactions);
    }
  }, [data, title]);
  return (
    <Modal
      isOpen={isOpen}
      handleClose={handleClose}
      width={isMobile ? 85 : title === 'News & Updates' ? 50 : 40}
      height={isMobile ? 60 : 85}
      title={title}
    >
      <ModalContent className="flex-column">
        {isLoading && !error && <Loading />}
        {error && (
          <p>
            There seems to be some problem while fetching the data. Please try
            again.
          </p>
        )}
        <TransitionGroup className="todo-list w-100">
          {!isLoading && !error && (
            <>
              {modalData?.length > 0 ? (
                modalData?.map((item, index) => (
                  <CSSTransition key={index} timeout={500} classNames="item">
                    {title === 'News & Updates' ? (
                      <News item={item} />
                    ) : (
                      <Transactions item={item} />
                    )}
                  </CSSTransition>
                ))
              ) : (
                <p>
                  {title === 'News & Updates'
                    ? 'No data to display'
                    : "You don't have any transactions"}
                </p>
              )}
            </>
          )}
        </TransitionGroup>
      </ModalContent>
    </Modal>
  );
};

const News = ({ item }) => {
  const { currentTheme } = useThemeSwitcher();
  return (
    <div className="transactions-list box-shadow">
      <div className="tr-item">
        <div className="tr-company-name w-100">
          <div className="tr-icon tr-card-icon text-primary tr-card-bg-primary">
            <img
              alt="Favicon"
              src={`https://www.google.com/s2/favicons?sz=32&domain_url=${item?.source?.domain}`}
              width="25px"
            />
          </div>
          <a
            className="tr-text w-100"
            href={`${item?.url}`}
            target="_blank"
            rel="noreferrer nofollow"
          >
            <h6
              style={{ fontWeight: '400' }}
              className={currentTheme === 'dark' ? 'text-white' : 'text-dark'}
            >
              {item?.title}
            </h6>
            <div className="d-flex justify-content-between align-items-center">
              <p className="text-muted" style={{ flex: 1 }}>
                {new Date(item?.published_at)
                  .toDateString()
                  .split(' ')
                  .slice(1)
                  .join(' ')}
              </p>
              <p
                style={{
                  color: currentTheme === 'dark' ? '#fff' : '#1a1a1a',
                  fontWeight: 600,
                  flex: 1,
                  textAlign: 'right',
                }}
              >
                {item?.source?.domain}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const Transactions = ({ item, isEthereum }) => {
  return (
    <div className="transactions-list">
      <div className="tr-item">
        <div className="tr-company-name w-100">
          <div className="tr-icon tr-card-icon text-primary tr-card-bg-primary">
            {getIcon(item?.type)}
          </div>
          <div className="tr-text w-100">
            <a
              href={
                isEthereum
                  ? `https://etherscan.io/tx/${item?.id}`
                  : `https://bscscan.com/tx/${item?.id}`
              }
              target="_blank"
              rel="noreferrer nofollow"
            >
              <h4>{item?.type?.toUpperCase().replace('_', ' ')}</h4>
            </a>
            <div className="d-flex w-100">
              <p style={{ width: '100%', flex: 1 }}>
                {new Date(item?.date * 1000).toDateString()}
              </p>

              <a
                href={
                  isEthereum
                    ? `https://etherscan.io/tx/${item?.id}`
                    : `https://bscscan.com/tx/${item?.id}`
                }
                target="_blank"
                rel="noreferrer nofollow"
                style={{ flex: 1 }}
              >
                <p style={{ textAlign: 'right' }}>{item?.description}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isEthereum: state.auth.isEthereum,
});

export default connect(mapStateToProps)(DashboardModal);
