import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Users from './user/pages/Users';

function App() {
  return <Router >
    
    <Switch>
      <Route path='/' exact>
        <Users />
      </Route>
      <Redirect to ='/' />
    </Switch>
  
  </Router>

}

export default App;
