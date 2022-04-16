import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import User from "./Pages/User/User";

import NavbarAdmin from "./Components/Navbar/NavBar";

function App() {
  return (
    <div>
      <NavbarAdmin />
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
