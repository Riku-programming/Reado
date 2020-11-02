import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AuthProvider } from "./Auth";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <AuthProvider>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </AuthProvider>
      </Switch>
    </Router>
  );
};

export default App;
