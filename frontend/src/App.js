import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route>

          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
