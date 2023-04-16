import "./app.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import { AuthContext } from "./authContext/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Home /> : <Navigate to="/register" />}
        />
        <Route
          exact
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route
          exact
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        {user && (
          <>
            <Route exact path="/movies" element={<Home type="movie" />} />
            <Route exact path="/series" element={<Home type="series" />} />
            <Route exact path="/watch" element={<Watch />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
