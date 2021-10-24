import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "./store.js";
import Login from "./container/Login/index";
import PrivateRoute from "./PrivateRoute.js";
import EmployeeDashboard from "./container/EmployeeDashboard";


const RouteMe = () => {
  return (
    <Router history={history}>
      <div class="main-body">
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/dashboard" component={EmployeeDashboard} />
        </Switch>
      </div>
    </Router>
  );
};

export default RouteMe;
