import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './Components/Navigation/Header';
import Home from './Pages/Home';

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
          <Redirect to='/' />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
