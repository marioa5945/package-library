import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createHashHistory } from 'history';

const history = createHashHistory();

import PageHome from './container/home/';
import PageReactMd from './container/react-md/';

const PageRouter: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact={true} path={'/'} component={PageHome} />
        <Route path={'/react-md'} component={PageReactMd} />
      </Switch>
    </Router>
  );
};

export default PageRouter;
