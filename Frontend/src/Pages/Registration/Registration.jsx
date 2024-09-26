import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet"; 
import { Link } from "react-router-dom";
import emailjs from "emailjs-com"; // Import emailjs

const Registration = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    address: "",
    age: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.whatsapp.trim()) newErrors.whatsapp = "Whatsapp number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.age.trim()) newErrors.age = "Age is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // If no errors, send form data using EmailJS
      emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Form submitted successfully!");
          // Reset form
          setFormData({
            name: "",
            whatsapp: "",
            address: "",
            age: "",
            message: "",
            
          });
          setErrors({});
        })
        .catch((error) => {
          console.log("FAILED...", error);
        });
    } else {
      // If there are errors, set the error state
      setErrors(formErrors);
    }
  };

  return (
    <>
      <Helmet>
        <title>Registration - Your Site Name</title> {/* Set the title */}
        <meta name="description" content="Register to join our community and access exclusive features." /> {/* Set a description */}
      </Helmet>

      <div className="hero home-hero"></div>

      <section className="py-2">
        <div className="col-md-12">
          <div className="container">
            <div className="contact-form">
              <h1>Registration</h1>
              <p>Fill the below details and submit</p>
              <form className="row" onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">Name*</label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <div className="text-danger">{errors.name}</div>}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="whatsapp">Whatsapp no.*</label>
                    <input
                      type="tel"
                      id="whatsapp"
                      className="form-control"
                      placeholder="Your Whatsapp no"
                      value={formData.whatsapp}
                      onChange={handleChange}
                    />
                    {errors.whatsapp && <div className="text-danger">{errors.whatsapp}</div>}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="address">Address*</label>
                    <input
                      type="text"
                      id="address"
                      className="form-control"
                      placeholder="Your Address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                    {errors.address && <div className="text-danger">{errors.address}</div>}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="age">Age*</label>
                    <input
                      type="text"
                      id="age"
                      className="form-control"
                      placeholder="Your Age"
                      value={formData.age}
                      onChange={handleChange}
                    />
                    {errors.age && <div className="text-danger">{errors.age}</div>}
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
                    ></textarea>
                    {errors.message && <div className="text-danger">{errors.message}</div>}
                  </div>
                </div>

                <div className="col-md-12">
                  <button type="submit" className="btn-Submit">
                    Submit
                  </button>
                </div>
              </form>
              {successMessage && <div className="text-success">{successMessage}</div>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
