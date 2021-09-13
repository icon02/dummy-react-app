import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import { Switch as RouteSwitch, Route, Link, Redirect } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Link to="/home">
            Home
          </Link>
          <Link to="/about">
            About
          </Link>
        </Toolbar>
      </AppBar>
      <RouteSwitch>
        <Route path="/home" exact>
          This is the home component
        </Route>
        <Route path="/about" exact>
          this is the about component
        </Route>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
      </RouteSwitch>
    </div>
  );
}

export default App;
