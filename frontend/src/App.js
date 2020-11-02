import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch,Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './Components/Navigation/Header';

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route>

          </Route>
         <Redirect to='/' />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
