import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import SignupPage from "./routes/signup"
import LoginPage from "./routes/login"

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/admin/signup" component={SignupPage} />
        <Route path="/admin/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
