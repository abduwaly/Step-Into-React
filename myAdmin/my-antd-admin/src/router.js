import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import HelloPage from './routes/HelloPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/hello" component={HelloPage}/>
    </Router>
  );
}

export default RouterConfig;
