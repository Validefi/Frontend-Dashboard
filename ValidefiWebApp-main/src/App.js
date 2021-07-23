import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/NavBar/NavBar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import UserDashboard from "./Components/UserDashboard/UserDashboard";
import axios from "axios";
import cors from "cors";
import { useStateValue } from "./StateProvider";

function App() {
  const [apiData, setapiData] = useState([]);
  const [newsApiData, setNewsApiData] = useState([]);
  const [{ walletDetails }, dispatch] = useStateValue();

  const newsUrl = "http://88.150.227.104:8080/getNews";

  const newsApiCall = () => {
    console.log("news request");
    axios({
      headers: {
        token: "VALIDEFI_NEWS_XS345&DS^89212nd",
      },
      method: "post",
      url: newsUrl,
    })
      .then((response) => setNewsApiData(response.data.data))
      .catch((error) => console.log(error));
  };
  console.log(walletDetails);
  console.log(walletDetails[0]);

  var url = "ws://88.150.227.104:5000";
  var connection = new WebSocket(url);
  useEffect(() => {
    connection.onopen = () => {
      connection.send("I want to connect");
    };
    setTimeout(() => {
      newsApiCall();
    }, 15000);
  }, []);

  connection.onopen = () => {
    setTimeout(() => {
      connection.send("getData");
    }, 3000);
  };

  // Listening to server for Data
  connection.onmessage = (e) => {
    // Data From Server
    if (e.data != null || e.data != undefined) {
      // console.log(e.data); // view this data to understand how the response is
      // Checking for Json data
      try {
        var data = JSON.parse(e.data); // If parseable data then useful, else they are informative messages
        if (data["status"] === true) {
          // Good Data -> Next steps
          setapiData(data.data);
        } else if (data["status"] === "connecting") {
          console.log("Connecting....");
        } else {
          // some issue from server side
          console.log(" Data Status:false");
        }
      } catch (jsonerr) {
        // Next steps
        console.log(jsonerr);
      }
    }
  };

  return (
    <>
      <Router>
        <div className="app">
          {/* <Navbar /> */}
          <UserDashboard blockInfo={apiData} newsApiInfo={newsApiData} />
        </div>
      </Router>
    </>
  );
}

export default App;
