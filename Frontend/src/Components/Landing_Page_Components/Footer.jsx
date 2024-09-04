import React from "react";
import Logo from "../../assets/logo.png";
// import { BsTwitter } from "react-icons/bs";
// import { SiLinkedin } from "react-icons/si";
// import { BsYoutube } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        {/* <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div> */}
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Contact us - </span>
          <span>(+1)782-882-9999</span>
          <span>(+1)782-882-9998</span>
          {/* <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span> */}
        </div>
        <div className="footer-section-columns">
          <span>Email us - </span>
          {/* <span>hello.artisian@gmail.com</span> */}
          <span>contact.tradeartz@gmail.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;