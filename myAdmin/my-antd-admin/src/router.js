import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import HelloPage from './routes/HelloPage';
import Products from './routes/Products'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/hello" component={HelloPage}/>
      <Route path="/products" exact component={Products} />
    </Router>
  );
}

export default RouterConfig;
