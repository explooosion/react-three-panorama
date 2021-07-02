import React from 'react';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Routes from './routes';

function App() {
  const renderRoute = route => {
    const { key, path, exact, component: Component, title } = route;
    return (
      <Route
        key={key}
        exact={exact}
        path={path}
        title={title}
        render={props => (
          <>
            <Helmet>
              <title>{title}</title>
            </Helmet>
            <Component {...props} />
          </>
        )}
      />
    );
  }

  return (
    <Router>
      <Switch>
        {Routes.map(renderRoute)}
      </Switch>
    </Router>
  );
}

export default App;
