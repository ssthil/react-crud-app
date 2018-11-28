import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import Users from "../pages/Users";
import Groups from "../pages/Groups";

const App = () => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route exact path="/" component={ Users } />
      <Route path="/users" component={ Users } />
      <Route path="/groups" component={ Groups } />
    </Switch>
  </React.Fragment>
);

export default App;
