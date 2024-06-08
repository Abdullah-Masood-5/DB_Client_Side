import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import "../src/Components/Styles/loader.css";
// Lazy loading components
const Home = React.lazy(() => import("./Components/Home"));
const SignUp = React.lazy(() => import("./Components/Signup"));
const Login = React.lazy(() => import("./Components/Login"));

const App = () => {

  return (
    <Router>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>


    </Router>
  );
};

export default App;