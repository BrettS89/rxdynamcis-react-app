import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Spinner from '../components/spinner';
import ErrorModal from '../containers/errorModal';
import TrHistory from '../containers/history';
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
            <Route path="/history" component={TrHistory} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Dashboard} />
          </Switch>
          <Spinner />
          <ErrorModal />
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
};
 