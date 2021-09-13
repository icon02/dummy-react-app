import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import { Switch as RouteSwitch, Route, Link, Redirect } from "react-router-dom";
import https from "./https-common";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [text, setText] = useState("");

  function setNetworkData() {
    setLoading(true);
    https.get("/test")
    .then((res) => {
      setText(res.data.value);
      setLoading(false);
    });
  }

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
          <p>
            <Button onClick={setNetworkData} variant="outlined">Request Data</Button>
          </p>
          <p>Data comes here: {isLoading ? "Loading.." : text}</p>
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
