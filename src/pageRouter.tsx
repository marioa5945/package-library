import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createHashHistory } from 'history';
import './base.scss';

const history = createHashHistory();

import PageHome from './container/home/';
import PageReactMd from './container/react-md/';
import PageImportLodashLoader from './container/import-lodash-loader/';
import RcDeclarationWebpackPlugin from './container/rc-declaration-webpack-plugin/';
import ServerPrint from './container/server-print/';

const PageRouter: React.FC = () => {
  history.listen((location) => {
    if (location.pathname === '/home') {
      window.location.href = '/home';
    }
    console.log(`You changed the page to: ${location.pathname}`);
  });
  return (
    <Router history={history}>
      <Switch>
        <Route exact={true} path={'/'} component={PageHome} />
        <Route exact={true} path={'/demos'} component={PageHome} />
        <Route path={'/demos/react-md'} component={PageReactMd} />
        <Route path={'/demos/import-lodash-loader'} component={PageImportLodashLoader} />
        <Route path={'/demos/rc-declaration-webpack-plugin'} component={RcDeclarationWebpackPlugin} />
        <Route path={'/demos/server-print'} component={ServerPrint} />
      </Switch>
    </Router>
  );
};

export default PageRouter;
