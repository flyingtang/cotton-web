import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import SignupPage from "./routes/signup"
import LoginPage from "./routes/login"
import AdminLayout from "./routes/adminlayout"
import Account from "./routes/account"
import Article from "./routes/article"
import Category from "./routes/category"
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/admin"  component={AdminLayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
