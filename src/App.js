import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import Players from './player/pages/Players';
import MainNavigation from './shared/components/navigation/MainNavigation';
import Fixture from './fixtures/pages/Fixture';
import News from './news/pages/News';
import Home from './home/pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return <Router >
    <MainNavigation />
    <main>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/players' exact>
          <Players />
        </Route>
        <Route path='/news' exact>
          <News />
        </Route>
        <Route path='/fixtures' exact>
          <Fixture />
        </Route>
        <Redirect to='/' />
      </Switch>
    </main>

  </Router>

}

export default App;
