import React from 'react';

import AppRouter from '../base/AppRouter';
import AppRoute, { ACCESS_TYPES } from '../base/AppRoute';

import Login from '../pages/Login';
import Home from '../pages/Home';

const Routes = () => (
  <AppRouter>
    <AppRoute allowedAccessBy={ACCESS_TYPES.AUTHENTICATED} exact path="/" component={Home} />
    <AppRoute allowedAccessBy={ACCESS_TYPES.NOT_AUTHENTICATED} path="/login" component={Login} />
    <AppRoute allowedAccessBy={ACCESS_TYPES.AUTHENTICATED} path="/home" component={Home} />
    <AppRoute allowedAccessBy={ACCESS_TYPES.ANY} path="/test" component={Home} />
  </AppRouter>
);

export default Routes;
