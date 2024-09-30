import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import QR from "./DonationQR.png"; // Image for QR code (Keep your image path correct)

const Donation = () => {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    age: "",
    message: "",
  });

  // Scroll to top on component load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Handle form data changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple client-side validation
    for (const value of Object.values(formData)) {
      if (!value) {
        alert("All fields are mandatory.");
        return;
      }
    }

    try {
      setLoading(true);
      // Sending the form data to the backend
      const response = await fetch("http://localhost:8000/api/create-donate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // If the request was successful, show the success message
        setPopupMessage("Thank you for your donation! Your details have been submitted successfully.");
        setShowPopup(true);
        setFormData({ name: "", whatsapp: "", email: "", age: "", message: "" });
        setLoading(false);
      } else {
        // If something went wrong, show an error message
        setPopupMessage("Something went wrong. Please try again later.");
        setShowPopup(true);
        setLoading(false);

      }
    } catch (error) {
      // Handle error
      console.error("Error submitting donation form:", error);
      setPopupMessage("An error occurred. Please try again.");
      setShowPopup(true);
      setLoading(false);

    }
  };

  // Handle popup close
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Helmet>
        <title>Donation - Kanu SRK Group</title>
        <meta
          name="description"
          content="Donate to Kanu SRK Group and support our initiatives. Find our bank details and fill the form for more information."
        />
        <meta
          name="keywords"
          content="Donation, Kanu SRK Group, support, charitable contributions"
        />
        <meta name="author" content="Kanu SRK Group" />
      </Helmet>

      <div className="hero home-hero"></div>

      <section className="about py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <img src={QR} alt="Donation QR" />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6">
              <h2 className="title-Head">Donate</h2>
              <div className="py-5">
                <p className="fs-bold">
                  <strong>
                    To pay through online banking or NEFT or IMPS, kindly find
                    the bank details given below:
                  </strong>
                </p>

                <p className="fs-bold">
                  <strong>
                    Account Name :- Kanu Shree Radhe Krishna Group
                  </strong>
                </p>
                <p className="fs-bold">
                  <strong>Bank Details :- Canara Bank</strong>
                </p>
                <p className="fs-bold">
                  <strong>A/c No. :- 120020472144</strong>
                </p>
                <p className="fs-bold">
                  <strong>IFSE :- CNRB0002702</strong>
                </p>
                <p className="fs-bold">
                  <strong>Branch :- Sector-16, Rohini, Delhi-110089</strong>
                </p>
              </div>
            </div>
            <div className="col-md-1"></div>

            {/* Donation Form */}
            <form className="row my-5" onSubmit={handleSubmit}>
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
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="whatsapp">WhatsApp No.</label>
                  <input
                    type="number"
                    id="whatsapp"
                    className="form-control"
                    placeholder="Your WhatsApp Number"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input
                    type="number"
                    id="age"
                    className="form-control"
                    placeholder="Your Age"
                    value={formData.age}
                    onChange={handleChange}
                    min="1"
                    max="90"
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

export default Donation;
