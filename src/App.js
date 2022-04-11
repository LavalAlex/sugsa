import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Admin from "./Pages/Admin/Admin";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NavbarAdmin from "./Components/Navbar/NavBar";

function App() {
  return (
    <div>
      <NavbarAdmin />
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/login">
            <Admin />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
