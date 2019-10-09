import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import RouteWithLayout from './layouts/RouteWithLayout'
import DefaultLayout from './layouts/default';

import Home from './components/Home';
import Container from './components/Container';

const App = () => {
  return (
    <div className="App">
      <Router>
        <RouteWithLayout exact path="/" component={Home} layout={DefaultLayout} />
        <Route exact path="/container" component={Container} />
      </Router>
    </div>
  );
};

export default App;
