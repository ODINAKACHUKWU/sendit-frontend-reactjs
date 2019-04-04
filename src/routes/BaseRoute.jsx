import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./Routes";
import PrivateRoute from "./PrivateRoute";

const BaseRoute = () => (
  <Router>
    <Switch>
      {Routes.default.map(({ exact, path, component }, index) => (
        <Route key={index} exact={exact} path={path} component={component} />
      ))}
      {Routes.secured.map(({ exact, path, component }, index) => (
        <PrivateRoute
          key={index}
          exact={exact}
          path={path}
          component={component}
        />
      ))}
    </Switch>
  </Router>
);

export default BaseRoute;
