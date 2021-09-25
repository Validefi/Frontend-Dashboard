import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import useAxios from 'axios-hooks';
import { connect } from 'react-redux';
import Modal from '../../../Utils/Modal';
import Loading from '../../Loading';
import BuySellForm from './BuySellForm';
import TransferForm from './TransferForm';

const TransactionModal = ({
  isOpen,
  handleClose,
  title,
  reqBody,
  refetchInterval,
  isEthereum,
}) => {
  const [options, setOptions] = useState({
    buy: true,
    sell: false,
    tranfer: false,
  });
  const { currentTheme } = useThemeSwitcher();

  const ModalContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 1.6rem 0 1.6rem;
  `;
  return (
    <Modal
      isOpen={isOpen}
      handleClose={handleClose}
      width={isMobile ? 85 : title === 'News & Updates' ? 50 : 40}
      height={isMobile ? 60 : 85}
      title={title}
    >
      <ModalContent className="flex-column">
        <div className="card-header w-100" style={{ padding: '0 0 15px 5px' }}>
          <ul className="nav nav-tabs card-header-tabs d-flex w-100">
            <li className="nav-item">
              <button
                onClick={() =>
                  setOptions({ buy: true, sell: false, tranfer: false })
                }
                className="holdings-tab"
                style={{
                  backgroundColor: options.buy
                    ? '#f3f6f9'
                    : currentTheme === 'dark'
                    ? '#253347'
                    : '#fff',
                }}
              >
                Buy
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() =>
                  setOptions({ buy: false, sell: true, tranfer: false })
                }
                className="holdings-tab"
                style={{
                  backgroundColor: options.sell
                    ? '#f3f6f9'
                    : currentTheme === 'dark'
                    ? '#253347'
                    : '#fff',
                }}
              >
                Sell
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() =>
                  setOptions({ buy: false, sell: false, tranfer: true })
                }
                className="holdings-tab"
                style={{
                  backgroundColor: options.tranfer
                    ? '#f3f6f9'
                    : currentTheme === 'dark'
                    ? '#253347'
                    : '#fff',
                }}
              >
                Transfer
              </button>
            </li>
          </ul>
        </div>

        <div className="card-body w-100" style={{ padding: '20px 5px' }}>
          {options.buy || options.sell ? (
            <BuySellForm
              onSubmit={() => console.log('submitted')}
              isDark={currentTheme === 'dark'}
              isBuy={options.buy}
            />
          ) : (
            <TransferForm
              onSubmit={() => console.log('submitted')}
              isDark={currentTheme === 'dark'}
            />
          )}
        </div>
      </ModalContent>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  isEthereum: state.auth.isEthereum,
});

export default connect(mapStateToProps)(TransactionModal);
