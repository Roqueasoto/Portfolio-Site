import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './Projects.js';
import Articles from './Articles.js';
import About from './About.js';
import './css/App.css';

function App() {
  return (
      <BrowserRouter>
          <div className="App">

              <div className="Navigation">
                  <img src={logo} className="logo" alt="Logo Image" />
                  <div className="navigation-sub">
                      <a href="/" className="item">Projects</a>
                      <a href="/articles" className="item">Articles</a>
                      <a href="/about" className="item">About</a>
                  </div>
              </div>

              {/* Router */}
              <Route exact path="/" component={Projects}/>
              <Route path="/articles" component={Articles}/>
              <Route path="/about" component={About}/>
          </div>
      </BrowserRouter>
  );
}

export default App;
