import React from "react";
import { Switch, Route, Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/"></Route>
        <Route path="/about"></Route>
        <Route path="/portfolio"></Route>
      </Switch>
    </Router>
  );
};

export default App;
