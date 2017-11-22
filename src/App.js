import React, { Component } from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import Example1 from './Example1.jsx';
import Example2 from './Example2.jsx';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="alert alert-info">
          <h1 className="display-4">
          Promise Demo
          </h1>
        </div>
        <HashRouter>
          <div>
            <div>
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <NavLink to="/example1" className="nav-link">Example1</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/example2" className="nav-link">Example2</NavLink>
                </li>
              </ul>
            </div>
            <div>
              <Route path="/example1" component={Example1} />
              <Route path="/example2" component={Example2} />
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
