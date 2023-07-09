import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// import Users from './user/pages/Users';
import Players from './player/pages/Players';

function App() {
  return <Router >
    
    <Switch>
      <Route path='/' exact>
        <Players />
      </Route>
      <Redirect to ='/' />
    </Switch>
  
  </Router>

}

export default App;
