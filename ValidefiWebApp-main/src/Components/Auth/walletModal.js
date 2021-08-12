import React, { useState } from 'react';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import Option from './Option';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { AbstractConnector } from '@web3-react/abstract-connector';
import MetamaskIcon from '../../assets/metamask.svg';
import { fortmatic, injected, portis } from '../Connectors';
import { SUPPORTED_WALLETS } from '../../constants/wallet';

const WALLET_VIEWS = {
  OPTIONS: 'options',
  OPTIONS_SECONDARY: 'options_secondary',
  ACCOUNT: 'account',
  PENDING: 'pending',
};

const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.bg0};
  padding: 0 1rem 1rem 1rem;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const HeaderRow = styled.div`
  ${({ theme }) => theme.flexRowNoWrap};
  padding: 1rem 1rem;
  font-weight: 500;
  color: ${(props) =>
    props.color === 'blue' ? ({ theme }) => theme.primary1 : 'inherit'};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 1rem;
  `};
`;

const OptionGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    grid-template-columns: 1fr;
    grid-gap: 10px;
  `};
`;

const WalletModal = () => {
  const { active, account, connector, activate, error } = useWeb3React();
  const [walletView, setWalletView] = useState(WALLET_VIEWS.ACCOUNT);
  const tryActivation = async (connector = AbstractConnector) => {
    let name = '';
    Object.keys(SUPPORTED_WALLETS).map((key) => {
      if (connector === SUPPORTED_WALLETS[key].connector) {
        name = SUPPORTED_WALLETS[key]?.name;
        return name;
      }
      return true;
    });
    // log selected wallet

    // setPendingWallet(connector); // set wallet for pending view
    setWalletView(WALLET_VIEWS.PENDING);

    // if the connector is walletconnect and the user has already tried to connect, manually reset the connector
    if (
      connector instanceof WalletConnectConnector &&
      connector.walletConnectProvider?.wc?.uri
    ) {
      connector.walletConnectProvider = undefined;
    }

    connector &&
      activate(connector, undefined, true).catch((error) => {
        if (error instanceof UnsupportedChainIdError) {
          activate(connector); // a little janky...can't use setError because the connector isn't set
        } else {
          // setPendingError(true);
        }
      });
  };

  const getOptions = () => {
    const isMetamask = window.ethereum && window.ethereum.isMetaMask;
    return Object.keys(SUPPORTED_WALLETS).map((key) => {
      const option = SUPPORTED_WALLETS[key];
      // check for mobile options
      if (isMobile) {
        //disable portis on mobile for now
        if (option.connector === portis) {
          return null;
        }

        if (!window.web3 && !window.ethereum && option.mobile) {
          return (
            <Option
              onClick={() => {
                option.connector !== connector &&
                  !option.href &&
                  tryActivation(option.connector);
              }}
              id={`connect-${key}`}
              key={key}
              active={option.connector && option.connector === connector}
              color={option.color}
              link={option.href}
              header={option.name}
              subheader={null}
              icon={option.iconURL}
            />
          );
        }
        return null;
      }

      // overwrite injected when needed
      if (option.connector === injected) {
        // don't show injected if there's no injected provider
        if (!(window.web3 || window.ethereum)) {
          if (option.name === 'MetaMask') {
            return (
              <Option
                id={`connect-${key}`}
                key={key}
                color={'#E8831D'}
                header={<p>Install Metamask</p>}
                subheader={null}
                link={'https://metamask.io/'}
                icon={MetamaskIcon}
              />
            );
          } else {
            return null; //dont want to return install twice
          }
        }
        // don't return metamask if injected provider isn't metamask
        else if (option.name === 'MetaMask' && !isMetamask) {
          return null;
        }
        // likewise for generic
        else if (option.name === 'Injected' && isMetamask) {
          return null;
        }
      }

      // return rest of options
      return (
        !isMobile &&
        !option.mobileOnly && (
          <Option
            id={`connect-${key}`}
            onClick={() => {
              option.connector === connector
                ? setWalletView(WALLET_VIEWS.ACCOUNT)
                : !option.href && tryActivation(option.connector);
            }}
            key={key}
            active={option.connector === connector}
            color={option.color}
            link={option.href}
            header={option.name}
            subheader={null} //use option.descriptio to bring back multi-line
            icon={option.iconURL}
          />
        )
      );
    });
  };

  if (error) {
    return (
      <>
        <div>
          {error instanceof UnsupportedChainIdError ? (
            <p>Wrong Network</p>
          ) : (
            <p>Error connecting</p>
          )}
        </div>
        <div>
          {error instanceof UnsupportedChainIdError ? (
            <h5>
              <p>Please connect to the appropriate Ethereum network.</p>
            </h5>
          ) : (
            <p>Error connecting. Try refreshing the page.</p>
          )}
        </div>
      </>
    );
  }
  //   if (account && walletView === WALLET_VIEWS.ACCOUNT) {
  //     return (
  //       <AccountDetails
  //         toggleWalletModal={toggleWalletModal}
  //         pendingTransactions={pendingTransactions}
  //         confirmedTransactions={confirmedTransactions}
  //         ENSName={ENSName}
  //         openOptions={() => setWalletView(WALLET_VIEWS.OPTIONS)}
  //       />
  //     );
  //   }
  return (
    <div>
      {walletView !== WALLET_VIEWS.ACCOUNT ? (
        <HeaderRow color="blue">
          <p
            onClick={() => {
              //   setPendingError(false);
              setWalletView(WALLET_VIEWS.ACCOUNT);
            }}
          >
            <p>Back</p>
          </p>
        </HeaderRow>
      ) : (
        <HeaderRow>
          <p>Connect to a wallet</p>
        </HeaderRow>
      )}

      <ContentWrapper>
        {/* {walletView === WALLET_VIEWS.PENDING ? (
          <PendingView
            connector={pendingWallet}
            error={pendingError}
            setPendingError={setPendingError}
            tryActivation={tryActivation}
          />
        ) : ( */}
        <OptionGrid>{getOptions()}</OptionGrid>
        {/* )} */}
      </ContentWrapper>
    </div>
  );
  //   return <div></div>;
};

export default WalletModal;
