import React, { useState, useEffect } from "react";
import Web3 from "web3";
import "./UserDashboard.css";
import { Avatar } from "@material-ui/core";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import PersonalVideoOutlinedIcon from "@material-ui/icons/PersonalVideoOutlined";
import KeyboardArrowRightOutlinedIcon from "@material-ui/icons/KeyboardArrowRightOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import SettingsBackupRestoreIcon from "@material-ui/icons/SettingsBackupRestore";
import SortIcon from "@material-ui/icons/Sort";
import { useStateValue } from "./StateProvider.js";
import RefreshIcon from "@material-ui/icons/Refresh";
import axios from "axios";

function UserDashboard({ blockInfo, newsApiInfo }) {
  const [addr, setAddr] = useState("");
  const [networkIdNum, setNetworkIdNum] = useState(null);
  const [networkName, setNetworkName] = useState("");
  const [{ walletDetails }, dispatch] = useStateValue();
  const [txsData, setTxsData] = useState([]);
  const [walletDetailsFlag, setWalletDetailsFlag] = useState(false);
  const [txstype, setTxsType] = useState([
    "send",
    "receive",
    "swap",
    "add",
    "remove",
  ]);
  const [txsTitle, setTxsTitle] = useState([
    "Token Sent!",
    "Token Received!",
    "Token Swapped",
    "Liquidity Added",
    "Liquidity Removed",
  ]);
  const ethereum = window.ethereum;
  const handleLogin = async () => {
    if (ethereum) {
      var web3 = new Web3(ethereum);
      await ethereum.enable();
    }
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    setAddr(accounts[0]);
    setNetworkIdNum(networkId);
    console.log(accounts);
    ethereum.on("accountsChanged", function (accounts) {
      if (accounts.length === 0) {
        setAddr("");
        alert("Please connect to MetaMask.");
      } else if (accounts[0] !== addr) {
        setAddr(accounts[0]);
        console.log(accounts);
      }
    });
    ethereum.on("networkChanged", function (chainId) {
      //window.location.reload();
      setNetworkIdNum(chainId);
      console.log(chainId);
    });
  };

  const yourTransApiCall = (walletDetails) => {
    console.log("Transaction request");
    axios({
      headers: {
        token: "VALIDEFI_TXS_XS345&DS^89212nd",
      },
      method: "post",
      url: "http://88.150.227.104:8080/getTxAddr",
      data: walletDetails[0],
    })
      .then((response) => setTxsData(response.data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if ((addr.length !== 0) & (networkIdNum == 1)) {
      setNetworkName("Ethereum Network");
      dispatch({
        type: "ADD_TO_WALLET_DETAILS",
        payload: {
          network: "ethereum",
          address: addr,
        },
      });
      setWalletDetailsFlag(true);
    } else if ((addr.length !== 0) & (networkIdNum == 56)) {
      setNetworkName("smart chain");
      dispatch({
        type: "ADD_TO_WALLET_DETAILS",
        payload: {
          network: "bsc",
          address: "0x413ee6e13b568c8ab88430094e13d34f9d4f60dd",
        },
      });
      setWalletDetailsFlag(true);
    } else {
      setAddr("");
      setNetworkName("");
      dispatch({
        type: "ADD_TO_WALLET_DETAILS",
        payload: {
          network: "",
          address: "",
        },
      });
      setWalletDetailsFlag(false);
    }
    if (walletDetailsFlag) {
      yourTransApiCall(walletDetails);
    }
  }, [addr, networkIdNum]);

  const handleTxsRefersh = () => {
    yourTransApiCall(walletDetails);
  };
  return (
    <div className="userDashboard">
      <div className="userDashboard__left">
        <div className="userDashboard__leftTop">
          <Avatar alt="username" src="/static/images/avatar/1.jpg" />
          <h1 className="userDashboard__leftTitle">ValiDefi.</h1>
        </div>

        <div className="userDashboard__leftWallet">
          <h4>Wallets</h4>
          <p>{addr.slice(0, 7) + "..." + addr.slice(-6)}</p>

          <div className="userDashboard__leftMenu">
            <DashboardOutlinedIcon />
            <h4 className="userDashboard__leftMenuItem">Dashboard</h4>
          </div>
          <div className="userDashboard__leftMenu">
            <ExploreOutlinedIcon />
            <h4 className="userDashboard__leftMenuItem">Explorer</h4>
          </div>
          <div className="userDashboard__leftMenu">
            <PersonalVideoOutlinedIcon />
            <h4 className="userDashboard__leftMenuItem">Monitor</h4>
          </div>
          <div className="userDashboard__leftMenu">
            <KeyboardArrowRightOutlinedIcon />
            <h4 className="userDashboard__leftMenuItem">Coins</h4>
          </div>
          <div className="userDashboard__leftMenu">
            <DescriptionOutlinedIcon />
            <h4 className="userDashboard__leftMenuItem">Portfolio</h4>
          </div>
          <div className="userDashboard__leftMenu">
            <SettingsRoundedIcon />
            <h4 className="userDashboard__leftMenuItem">Profile</h4>
          </div>
        </div>

        {addr === "" && (
          <div
            className="userDashboard__leftConnectWallet"
            onClick={handleLogin}
          >
            <h4>Connect Your Wallet</h4>
            <AddCircleOutlineRoundedIcon className="circle" />
          </div>
        )}
        {!(addr === "") && (
          <div className="userDashboard__leftConnectWallet">
            <h4>Wallet Connected</h4>
          </div>
        )}
      </div>

      <div className="userDashboard__middle">
        <div className="userDashboard__middleHeader">
          <div className="header__title">
            <h4>Dashboard</h4>
            <p>Sunday, 20 May 2021</p>
          </div>
          <div className="header__items">
            <input
              className="header__searchInput"
              placeholder="Search ..."
              type="text"
            />
            {/* dropdown */}
            <div className="header__networkName">{networkName}</div>
          </div>
        </div>
        <div className="userDashboard__adv">
          <h3>Advertisement</h3>
        </div>
        <div className="portfolio__holdings">
          <div className="portfolio__graph">
            <h3>Your Portfolio Value</h3>
          </div>
          <div className="current__holdings">
            <h2>Current Holdings</h2>
            <div className="holdings">
              <h4>XMARK</h4>
              <p>$100</p>
            </div>
            <div className="holdings">
              <h4>BUSD</h4>
              <p>$100</p>
            </div>
            <div className="holdings">
              <h4>BNB</h4>
              <p>$100</p>
            </div>
          </div>
        </div>
        <div className="metrics__currentEvents">
          <div className="key__metrics">
            <h4>Key Metrics</h4>
            <p>Insights on your portfolio</p>
            <div>
              <h5>Metric Graph</h5>
            </div>
          </div>
          <div>
            <h3 className="current__eventsTitle">Current Events</h3>
            <div className="current__events">
              {blockInfo.map((eachBlock) => (
                <div className="event">
                  <div className="event__icon">
                    <SettingsBackupRestoreIcon />
                  </div>
                  <div>
                    <h5>Pair Swap Detected!</h5>
                    <p>{eachBlock.description_tx}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* userDashboard__right */}
      <div className="userDashboard__right">
        <div className="current__portfolioValue">
          <h3>Current Portfolio Value</h3>
          <h1>
            <span>$491.50</span>
          </h1>
        </div>
        <div className="your__transactionsTitle">
          <h3>Your Transactions</h3>
          <div onClick={handleTxsRefersh}>
            <RefreshIcon />
            <p>Refresh</p>
          </div>
        </div>
        <div className="current__events">
          {txsData.map((eachTxs) => (
            <div className="event">
              <DescriptionOutlinedIcon />
              <div>
                <h5>
                  {
                    txsTitle[
                      txstype.findIndex((eachType) => eachType === eachTxs.type)
                    ]
                  }
                </h5>
                <p>
                  {eachTxs.description} {"At"}{" "}
                  {new Date(eachTxs.date * 1000).toString()}
                </p>
              </div>
              <KeyboardArrowRightOutlinedIcon />
            </div>
          ))}
        </div>
        <div className="news__updates">
          <h3>News & Updates</h3>
          <div className="current__events">
            {newsApiInfo.map((eachItem) => (
              <div className="event">
                <SortIcon />
                <div>
                  <a href={eachItem.url} target="_blank">
                    {eachItem.kind} {":"} {eachItem.title}
                  </a>
                </div>
                <KeyboardArrowRightOutlinedIcon />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
