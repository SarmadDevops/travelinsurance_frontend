import React from "react";
import { 
  PhoneOutlined, 
  MailOutlined, 
  EnvironmentOutlined,
  FacebookFilled,
  InstagramOutlined,
  LinkedinFilled 
} from "@ant-design/icons";
import "./Footer.css";

const AppFooter = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-content">
        
        {/* Contact Details */}
        <div className="contact-list">
          <div className="contact-item">
            <div className="footer-icon-circle"><PhoneOutlined /></div>
            <span>+92-042-111-000-014</span>
          </div>

          <div className="contact-item">
            <div className="footer-icon-circle"><MailOutlined /></div>
            <span>SecurePathSolution.com</span>
          </div>

          <div className="contact-item">
            <div className="footer-icon-circle"><EnvironmentOutlined /></div>
            <span> Lahore - Pakistan.</span>
          </div>
        </div>

        {/* Social Media - FB, Insta, LinkedIn */}
        <div className="social-icons-row">
          <div className="social-box" title="Facebook"><FacebookFilled /></div>
          <div className="social-box" title="Instagram"><InstagramOutlined /></div>
          <div className="social-box" title="LinkedIn"><LinkedinFilled /></div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom-bar">
          <p>
            Copyright 2000 - {new Date().getFullYear()} <span style={{color: '#13c2c2', fontWeight: 600}}>The Insurance Company Of Pakistan Ltd.</span> All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default AppFooter;