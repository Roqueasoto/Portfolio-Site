import React from 'react';
import './css/App.css';
import {Navigation} from "./Navigation";
import {BrowserRouter} from "react-router-dom";
import RouteContainer from "./RouteContainer";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Navigation/>
              <RouteContainer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
