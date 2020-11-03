import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './Components/Navigation/Header';
import ProductState from './Context/Product/ProductState';
import Home from './Pages/Home';

function App() {
  return (
    <ProductState>
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
    </ProductState>
  );
}

export default App;
