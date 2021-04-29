import React from "react";
import { Route, Switch, Redirect, } from "react-router-dom";
// styles
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

function Layout(props) {
  return (
    <div>
      <Header></Header>
      <Sidebar></Sidebar>
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/app/dashboard" />}
          />
          <Route path="/app/dashboard" component={Dashboard} />
          <Route path="/app/about" component={About} />
        </Switch>
      </main>
    </div>
  );
}

export default Layout;
