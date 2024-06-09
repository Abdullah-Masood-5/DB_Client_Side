import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import "../src/Components/Styles/loader.css";
// Lazy loading components
const Home = React.lazy(() => import("./Components/Home"));
const SignUp = React.lazy(() => import("./Components/Signup"));
const Login = React.lazy(() => import("./Components/Login"));
const Donor = React.lazy(() => import("./Components/Donor"));
const Listedprojects = React.lazy(() => import("./Components/Projects_list"));
const AppliedProj = React.lazy(() => import("./Components/Applied_projects"));
const Listcampaigns = React.lazy(() => import("./Components/Campaigns_list"));
<<<<<<< HEAD
const Testimonial = React.lazy(() => import("./Components/Testimonial"));

=======
const Volunteer = React.lazy(() => import("./Components/Volunteer"));
const Gallery = React.lazy(() => import("./Components/Gallery"));
>>>>>>> b1c9c8b921380cf5a6d4925d7a92ee6a2491c2e0
const App = () => {

  return (
    <Router>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donor" element={<Donor />} />
        <Route path="/volunteer" element={<Volunteer />} /> 
        <Route path="/gallery" element={<Gallery />} />


        <Route path="/listedprojects" element={<Listedprojects />} />
        <Route path="/listcampaigns" element={<Listcampaigns />} />
        <Route path="/AppliedProject" element={<AppliedProj />} />
        
        <Route path="/complains" element={<Complains/>} /> 
      </Routes>


    </Router>
  );
};

export default App;