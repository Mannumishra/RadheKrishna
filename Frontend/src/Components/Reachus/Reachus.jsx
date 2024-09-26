import React from "react";
import "./Reachus.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import call from "../../Assets/call.svg.png";
import mail from "../../Assets/mail.svg.png";
import location from "../../Assets/location-dot-circle.svg.png";
import krishnaHand from "../../Assets/KrishnaHand.jpeg";

const Reachus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    location: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Validation logic
  const validate = () => {
    let formErrors = {};
    let isValid = true;

    // Name validation
    if (formData.name.trim().length < 2) {
      formErrors.name = "Name must be at least 3 characters long.";
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      formErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Mobile number validation
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(formData.mobile)) {
      formErrors.mobile = "Mobile number must be 10 digits.";
      isValid = false;
    }

    // Location validation
    if (formData.location.trim() === "") {
      formErrors.location = "Location is required.";
      isValid = false;
    }

    // Message validation
    if (formData.message.trim().length < 10) {
      formErrors.message = "Message must be at least 10 characters long.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (validate()) {
      console.log("Form submitted successfully!", formData);
      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        mobile: "",
        location: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <>
      <section className="reachUs">
        <div className="container">
          <div className="row">
            <div className="col-md-5 bg-cream">
              <div className="contact-info">
                <div className="icon-circle">
                  <img src={call} alt="call" />
                </div>
                <div className="contact-detail">
                  <p>
                    <small>Call Us.</small>
                  </p>
                  <p>
                    <a href="tel:+919811881650">9811881650</a> /
                    <a href="tel:+919899029372">9899029372</a>/
                    <a href="tel:+919873031650">9873031650</a>
                  </p>
                </div>
              </div>

              <div className="contact-info">
                <div className="icon-circle">
                  <img src={mail} alt="mail" />
                </div>
                <div className="contact-detail">
                  <p>
                    <small>Make a Quote.</small>
                  </p>
                  <a href="mailto:kanusrkgroup@gmail.com">
                    kanusrkgroup@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-info">
                <div className="icon-circle">
                  <img src={location} alt="location" />
                </div>
                <div className="contact-detail">
                  <p>
                    <small>Location.</small>
                  </p>
                  <a href="#">B-1/57, Sector-17, Rohini, Delhi-110089</a>
                </div>
              </div>

              <img src={krishnaHand} className="video-image" alt="video" />
            </div>
            <div className="col-md-1"></div>

            <div className="col-md-6">
              <div className="contact-form">
                <h1>Reach us</h1>
                
                <form className="row" onSubmit={handleSubmit}>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <small className="text-danger">{errors.name}</small>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">E-mail</label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <small className="text-danger">{errors.email}</small>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="mobile">Mobile no.</label>
                      <input
                        type="tel"
                        id="mobile"
                        className="form-control"
                        placeholder="Your mobile no."
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                      {errors.mobile && (
                        <small className="text-danger">{errors.mobile}</small>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="location">Location</label>
                      <input
                        type="text"
                        id="location"
                        className="form-control"
                        placeholder="Your location"
                        value={formData.location}
                        onChange={handleChange}
                      />
                      {errors.location && (
                        <small className="text-danger">{errors.location}</small>
                      )}
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="message">Your Message*</label>
                      <textarea
                        id="message"
                        className="form-control"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                      {errors.message && (
                        <small className="text-danger">{errors.message}</small>
                      )}
                    </div>
                  </div>

                  <div className="col-md-12">
                    <button type="submit" className="btn-Submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Reachus;
