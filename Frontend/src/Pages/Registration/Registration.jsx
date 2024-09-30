import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import toast from "react-hot-toast";

const Registration = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    whatsappNumber: "",
    address: "",
    age: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false); // Modal state
  const [popupMessage, setPopupMessage] = useState(""); // Message to show in modal


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("https://api.kanusrkgroup.in/api/create-registation", formData);
      if (res.status === 200) {
        setPopupMessage("Thank you for your registration! Your details have been submitted successfully.");
        setShowPopup(true); // Show modal on success
        setFormData({
          name: "",
          whatsappNumber: "",
          address: "",
          age: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close the modal
  };

  return (
    <>
      <Helmet>
        <title>Registration - Your Site Name</title>
        <meta name="description" content="Register to join our community and access exclusive features." />
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
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
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
                      value={formData.whatsappNumber}
                      name="whatsappNumber"
                      onChange={handleChange}
                      required
                    />
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
                      name="address"
                      onChange={handleChange}
                      required
                    />
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
                      name="age"
                      required
                    />
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
                      name="message"
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="col-md-12">
                  <button type="submit" className="btn-Submit">
                    {loading ? "Please Wait.." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {showPopup && (
        <div
          className="popup-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            className="popup-content"
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h4>{popupMessage}</h4>
            <button
              onClick={handleClosePopup}
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                backgroundColor: "#F05A28",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Registration;
