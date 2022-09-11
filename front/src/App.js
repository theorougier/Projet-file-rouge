import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import { Routes } from "react-router";
import ProtectedRoute from "./component/PrivateRoute";
import useLogin from "./hook/useLogin";

import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Preferences from "./pages/preferences/Preferences";

function App() {
  const { logged, setLogged, submit } = useLogin();

  console.log("logged ? :", logged);

  return (
    <Routes>
      <Route
        path="/home"
        element={
          <ProtectedRoute user={true}>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute user={true}>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/preference"
        element={
          <ProtectedRoute user={true}>
            <Preferences />
          </ProtectedRoute>
        }
      />
      <Route
        path="/login"
        element={<Login submit={submit} logged={logged} />}
      />
      <Route path="/register" element={<Register submit={submit} />} />
    </Routes>
  );
}

export default App;
