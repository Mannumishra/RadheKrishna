import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios"
import toast from "react-hot-toast";

const Registration = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    whatsappNumber: "",
    address: "",
    age: "",
    message: "",
  });



  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  };

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/create-registation", formData)
      if (res.status === 200) {
        toast.success(res.data.message)
        setFormData({
          name: "",
          whatsappNumber: "",
          address: "",
          age: "",
          message: "",
        })
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
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
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
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

export default Registration;
