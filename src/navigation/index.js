import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Header from '../containers/header';
import Dashboard from '../containers/dashboard';
import Login from '../containers/login';

export default () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <div style={{ paddingLeft: 55, paddingRight: 55 }}>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
};
 