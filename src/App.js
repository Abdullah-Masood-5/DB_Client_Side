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
const Testimonial = React.lazy(() => import("./Components/Testimonial"));


const Volunteer = React.lazy(() => import("./Components/Volunteer"));



const TransactionHistory = React.lazy(() => import("./Components/Transaction_History")); 
const Complains = React.lazy(() => import("./Components/Complains"));

const Gallery = React.lazy(() => import("./Components/Gallery")); 

const App = () => {

  return (
    <Router>

      <Navbar />
      <Suspense fallback={<>d</> }>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donor" element={<Donor />} />
        <Route path="/volunteer" element={<Volunteer />} /> 
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/transactionhistory" element={<TransactionHistory />} />


        <Route path="/listedprojects" element={<Listedprojects />} />
        <Route path="/listcampaigns" element={<Listcampaigns />} />
        <Route path="/AppliedProject" element={<AppliedProj />} />
        <Route path="/testimonial" element={<Testimonial/>} />  
        
        <Route path="/complains" element={<Complains/>} />  
      </Routes>

      </Suspense>

    </Router>
  );
};

export default App;