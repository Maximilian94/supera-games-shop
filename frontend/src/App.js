import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
