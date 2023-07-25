// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./Components/Auth/Login";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import AgentDashboard from "./Components/Agent/AgentDashboard";
import PrivateRoute from "./Components/Common/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/admin/dashboard" component={AdminDashboard} role="admin" />
        <PrivateRoute path="/agent/dashboard" component={AgentDashboard} role="agent" />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
