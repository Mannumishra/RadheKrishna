import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios"
import toast from "react-hot-toast";

const FeedBack = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    age: "",
    message: "",
  });

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const res = await axios.post("http://localhost:8000/api/create-feedback", formData)
      if (res.status == 200) {
        toast.success(res.data.message)
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
          age: "",
          message: "",
        })
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

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
                      type="int"
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
                      type="int"
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
                    {loading ? "Please Wait.." : "  Send Message"}
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
