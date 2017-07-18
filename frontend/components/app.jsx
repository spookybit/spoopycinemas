import React from 'react';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

import Splash from './splash/splash';
import HeadingContainer from './heading/heading_container';

const App = () => (
  <div>
    <HeadingContainer/>
    <Splash />
  </div>
);

export default App;
