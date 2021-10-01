import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Checkout } from './pages';

import { ProductsProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
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
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
