import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createHashHistory } from 'history';
import './base.scss';

const history = createHashHistory();

import HomePage from './container/home/';
import ReactMdPage from './container/react-md/';
import ImportLodashLoaderPage from './container/import-lodash-loader/';
import RcDeclarationWebpackPluginPage from './container/rc-declaration-webpack-plugin/';
import ServerPrintPage from './container/server-print/';

import BlueprintKoa from './container/blueprint-koa/';
import ApibJson from './container/apib-json/';
import TomlJson from './container/toml-json/';
import Tscn from './container/tscn/';

const PageRouter: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact={true} path={'/'} component={HomePage} />
        <Route exact={true} path={'/demos'} component={HomePage} />
        <Route path={'/demos/react-md'} component={ReactMdPage} />
        <Route path={'/demos/import-lodash-loader'} component={ImportLodashLoaderPage} />
        <Route path={'/demos/rc-declaration-webpack-plugin'} component={RcDeclarationWebpackPluginPage} />
        <Route path={'/demos/server-print'} component={ServerPrintPage} />
        <Route path={'/demos/blueprint-koa'} component={BlueprintKoa} />
        <Route path={'/demos/apib-json'} component={ApibJson} />
        <Route path={'/demos/toml-json'} component={TomlJson} />
        <Route path={'/demos/tscn'} component={Tscn} />
      </Switch>
    </Router>
  );
};

export default PageRouter;
