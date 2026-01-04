import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/auth/Login";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer"
const LoginPage = () => {
  
  return (
    <div className="login-page-wrapper">
      <Navbar variant="top" />

      {/* Login component ko success handler pass */}
      <Login />
      <Footer/>
    </div>
  );
};

export default LoginPage;
