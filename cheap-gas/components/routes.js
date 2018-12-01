import React from 'react';
import { Router, Route } from 'react-router';

import Begin from './screens/Begin';
import NotFound from './screens/NotFound';
import GoogleMaps from './screens/GoogleMaps';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/googlemap" component={GoogleMaps} />

    <Route path="/" component={Begin} />

    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
