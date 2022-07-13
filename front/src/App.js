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
// import useLogin from "./hook/useLogin";

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <ProtectedRoute user={false}>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route exact path="login" element={<Login />} />
      <Route exact path="register" element={<Register />} />
      <Route exact path="profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
