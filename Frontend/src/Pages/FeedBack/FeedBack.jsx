import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com"; // Import EmailJS

const FeedBack = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    age: "",
    message: "",
  });

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
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data
    const { name, email, mobile, age, message } = formData;
    if (!name || !email || !mobile || !age || !message) {
      alert("All fields are mandatory.");
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        formData,
        "your_user_id" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Feedback sent successfully!");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send feedback. Please try again later.");
        }
      );

    // Reset form
    setFormData({
      name: "",
      email: "",
      mobile: "",
      age: "",
      message: "",
    });
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
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="mobile">Whatsapp no.*</label>
                    <input
                      type="int"
                      id="mobile"
                      className="form-control"
                      placeholder="Your Whatsapp no"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="age">Age*</label>
                    <input
                      type="int"
                      id="age"
                      className="form-control"
                      placeholder="Your Age"
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
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="col-md-12">
                  <button type="submit" className="btn-Submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeedBack;
