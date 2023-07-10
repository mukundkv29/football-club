import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Users from './user/pages/Users';
import Players from './player/pages/Players';
import MainNavigation from './shared/components/navigation/MainNavigation';

function App() {
  return <Router >
    <MainNavigation />
    <main>
      <Switch>
        <Route path='/' exact>
          <Players />
          <Users />
        </Route>
        <Redirect to='/' />
      </Switch>
    </main>

  </Router>

}

export default App;
