import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Users from './user/pages/Users';
import Players from './player/pages/Players';
import MainNavigation from './shared/components/navigation/MainNavigation';
import Fixture from './fixtures/pages/Fixture';

function App() {
  return <Router >
    <MainNavigation />
    <main>
      <Switch>
        <Route path='/' exact>
          <Players />
          <Users />
        </Route>
        <Route path='/news' exact></Route>
        <Route path='/fixtures' exact>
          <Fixture />
        </Route>
        <Redirect to='/' />
      </Switch>
    </main>

  </Router>

}

export default App;
