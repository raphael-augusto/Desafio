import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Langing from './pages/Landing';
import CreateClinic from './pages/CreateClinic';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Langing} />
        <Route path="/clinic/create" component={CreateClinic} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
