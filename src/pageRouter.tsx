import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createHashHistory } from 'history';

const history = createHashHistory();

import PageHome from './container/home/';
import PageReactMd from './container/react-md/';
import PageImportLodashLoader from './container/import-lodash-loader/';
import RcDeclarationWebpackPlugin from './container/rc-declaration-webpack-plugin/';

const PageRouter: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact={true} path={'/'} component={PageHome} />
        <Route path={'/react-md'} component={PageReactMd} />
        <Route path={'/import-lodash-loader'} component={PageImportLodashLoader} />
        <Route path={'/rc-declaration-webpack-plugin'} component={RcDeclarationWebpackPlugin} />
      </Switch>
    </Router>
  );
};

export default PageRouter;
