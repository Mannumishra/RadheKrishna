import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import toast from "react-hot-toast";

const FeedBack = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    age: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // Modal state
  const [popupMessage, setPopupMessage] = useState(""); // Message to show in modal

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("https://api.kanusrkgroup.in/api/create-feedback", formData);
      if (res.status === 200) {
        // toast.success(res.data.message);
        setPopupMessage("Thank you for your feedback! Your details have been submitted successfully.");
        setShowPopup(true); // Show modal on success
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
          age: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
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
        <title>Feedback - Kanu SRK Group</title>
        <meta
          name="description"
          content="Provide your feedback and suggestions for Kanu SRK Group. We value your opinion."
        />
        <meta name="keywords" content="Feedback, Suggestions, Kanu SRK Group" />
        <meta name="author" content="Kanu SRK Group" />
      </Helmet>

      <div className="hero home-hero"></div>

      <section className="my-2">
        <div className="col-md-12">
          <div className="container">
            <div className="contact-form">
              <h1>Feedback</h1>
              <p>Write your suggestion or feedback here</p>
              <form className="row" onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">Name*</label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="email">Email*</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="whatsapp">Whatsapp no.*</label>
                    <input
                      type="text"
                      id="whatsapp"
                      className="form-control"
                      name="whatsapp"
                      placeholder="Your Whatsapp no"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="age">Age*</label>
                    <input
                      type="number"
                      id="age"
                      className="form-control"
                      placeholder="Your Age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
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
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
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

      {/* Popup Modal */}
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

export default FeedBack;
