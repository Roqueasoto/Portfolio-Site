import React from 'react';
import './css/App.css';
import {Navigation} from "./Components/Navigation";
import {BrowserRouter} from "react-router-dom";
import RouteContainer from "./Components/RouteContainer";

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
