import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Checkout } from './pages';

import { ProductsProvider } from './context/ProductContext';

function App() {
  return (
    <ProductsProvider>
      <Router>
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ProductsProvider>
  );
}

export default App;
