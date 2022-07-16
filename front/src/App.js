import logo from "./logo.svg";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { Routes } from "react-router";
import Profile from "./pages/profile/Profile";
import PrivateRoute from "./component/PrivateRoute";
import ProtectedRoute from "./component/PrivateRoute";
import useLogin from "./hook/useLogin";
import Preferences from "./pages/preferences/Preferences";

function App() {
  const { logged, LogOut, submit, userEmail } = useLogin();

  console.log("logged ? :", logged);

  return (
    <Routes>
      <Route
        path="/profile"
        element={
          <ProtectedRoute user={logged}>
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
      <Route path="/login" element={<Login submit={submit} />} />
      <Route path="/register" element={<Register submit={submit} />} />
    </Routes>
  );
}

export default App;
