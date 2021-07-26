import React from 'react';
import './App.css';
import Routing from './Components/Routing';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routing />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
