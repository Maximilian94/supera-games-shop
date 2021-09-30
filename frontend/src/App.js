import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './pages';

import { ProductsProvider } from './context/ProductContext';

function App() {
  return (
    <ProductsProvider>
      <Router>
        <Switch>
          <Route>
            <Home />
          </Route>
        </Switch>
      </Router>
    </ProductsProvider>
  );
}

export default App;
