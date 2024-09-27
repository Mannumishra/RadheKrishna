import React from "react";
import "./Footer.css";
import Footerlogo from "../../Assets/Footerlogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-light pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-4 ">
              <img
                src={Footerlogo}
                alt="Shree Radha Krishna Group"
                className="logo w-50 mb-3"
              />
              <p>Kanu SRK Group enhance the power of spirituality !!</p>
              <div className="contact-li">
                <div className="mb-2">
                  <i className="fa-solid fa-envelope me-2"></i>
                  <a
                    href="mailto:kanusrkgroup.official@gmail.com"
                    className="text-light"
                  >
                    kanusrkgroup.official@gmail.com
                  </a>
                </div>
                <div>
                  <i className="fa-solid fa-phone me-2"></i>
                  <a href="tel:+919811881650" className="text-light">
                    +91-9811881650
                  </a>{" "}
                  /
                  <a href="tel:+919899029372" className="text-light ms-1">
                    +91-9899029372
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <h3>Quick Links</h3>
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li>
                      <i className="fa-solid fa-caret-right me-2"></i>
                      <Link to="/" className="text-light">
                        Homepage
                      </Link>
                    </li>
                    <li>
                      <i className="fa-solid fa-caret-right me-2"></i>
                      <Link to="/about" className="text-light">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <i className="fa-solid fa-caret-right me-2"></i>
                      <Link to="/registration" className="text-light">
                        Registration
                      </Link>
                    </li>
                    <li>
                      <i className="fa-solid fa-caret-right me-2"></i>
                      <Link to="/gallery" className="text-light">
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <i className="fa-solid fa-caret-right me-2"></i>
                      <Link to="/contact" className="text-light">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li>
                      <i className="fa-solid fa-caret-right me-2"></i>
                      <Link to="/upcoming-events" className="text-light">
                        Upcoming Events
                      </Link>
                    </li>
                    <li>
                      <i className="fa-solid fa-caret-right me-2"></i>
                      <Link to="/objectives" className="text-light">
                        Objectives
                      </Link>
                    </li>
                    <li>
                      <i className="fa-solid fa-caret-right me-2"></i>
                      <Link to="/feedback" className="text-light">
                        Feedback
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4 mr-3">
              <h3>SRK Group</h3>
              <ul className="list-unstyled">
                <li>
                  <i className="fa-solid fa-caret-right me-2"></i>
                  <Link to="/srk-groups" className="text-light">
                    SRK Bhagwat Geeta Group
                  </Link>
                </li>
                <li>
                  <i className="fa-solid fa-caret-right me-2"></i>
                  <Link to="/srk-groups1" className="text-light">
                    SRK Maa Bhimeshwari Kul
                  </Link>
                </li>
                <li>
                  <i className="fa-solid fa-caret-right me-2"></i>
                  <Link to="/srk-groups2" className="text-light">
                    SRK Yatra Group
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-4">
              <h3 className="h4">Follow Us on Social Media</h3>
              <p>Join with us and feel the power of God.</p>
              <ul className="list-unstyled social-links d-flex">
                <li className="me-3">
                  <a href="https://www.facebook.com/profile.php?id=100089219941173&mibextid=ZbWKwL" className="text-light">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="me-3">
                  <a href="https://www.instagram.com/kanusrkgroup?igsh=ZDhndGhxYW13NDlx" className="text-light">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="me-3">
                  <a href="https://www.youtube.com/@kanusrkgroup" className="text-light">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      <div className="row copyright">
        <div className="col-md-12 text-center">
          <p className="mb-0">
            {" "}
            &#169; {new Date().getFullYear()}{" "}
            <Link to={`/`}>Kanu SRK Group</Link>. All Rights Reserved.
            
          </p>
        </div>
      </div>
      </footer>
    </>
  );
};

export default Footer;
