import React from "react";
import { Router, Route } from "react-router";
import { RootComponent } from "./components/RootComponent";
import { DashboardPage } from "./pages/DashboardPage";

const Routes = props => {
  return (
    <Router {...props}>
      <Route component={RootComponent}>
        <Route path="/" component={DashboardPage} />
      </Route>
    </Router>
  );
};

export default Routes;
