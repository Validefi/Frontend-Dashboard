import React, { useState, useEffect } from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import Web3 from "web3";

function Login() {
  const [addr, setAddr] = useState("");
  const [chainId, setChainId] = useState("");
  const [networkName, setNetworkName] = useState("ray");
  const [networkInfo, setNetworkInfo] = useState([]);
  const [isConnect, setIsConnect] = useState(false);
  const ethereum = window.ethereum;

  useEffect(() => {
    fetch("https://chainid.network/chains.json")
      .then((response) => response.json())
      .then((data) => {
        setNetworkInfo(data);
      });
  }, []);

  const handle__login = async () => {
    if (ethereum) {
      var web3 = new Web3(ethereum);
      await ethereum.enable();
    }
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    setAddr(accounts[0]);
    setChainId(networkId);
    console.log(accounts);
    ethereum.on("accountsChanged", function (accounts) {
      if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
        setAddr("");
        alert("Please connect to MetaMask.");
      } else if (accounts[0] !== addr) {
        setAddr(accounts[0]);
        console.log(accounts);

        // Do any other work!
      }
    });
    ethereum.on("networkChanged", function (chainId) {
      //window.location.reload();
      setChainId(chainId);
      console.log(chainId);
    });
    if (chainId == 1) {
      setNetworkName("Ethereum Mainnet");
      console.log("hi");
    } else if (chainId == 56) {
      setNetworkName("Smart Chain");
      console.log("bye");
    }

    setIsConnect(true);
  };
  console.log(networkName);
  return (
    <div className="Login">
      <div className="login__button">
        {ethereum ? (
          <Button onClick={handle__login}>Connect to Wallet</Button>
        ) : (
          <p>Please use browser with ethereum wallet</p>
        )}
        {isConnect && (
          <div>
            <p>{addr}</p>
            {networkInfo.map(
              (eachNetwork) =>
                eachNetwork.chainId == chainId && <p>{eachNetwork.name}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
