import React from "react";
import "./Reachus.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import call from "../../Assets/call.svg.png";
import mail from "../../Assets/mail.svg.png";
import location from "../../Assets/location-dot-circle.svg.png";
import krishnaHand from "../../Assets/KrishnaHand.jpeg";
import axios from "axios";
import toast from "react-hot-toast";

const Reachus = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    address: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    try {
      const res = await axios.post("https://api.kanusrkgroup.in/api/send-contact", formData)
      console.log(res)
      if (res.status === 200) {
        toast.success(res.data.message)
        setFormData({
          name: "",
          email: "",
          mobileNumber: "",
          address: "",
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
                  <a
                    href="mailto:
kanusrkgroup.official@gmail.com"
                  >
                    kanusrkgroup.official@gmail.com
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
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">E-mail</label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        name="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                      />
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
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        name="mobileNumber"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="location">Address</label>
                      <input
                        type="text"
                        id="location"
                        className="form-control"
                        placeholder="Your Address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
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
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
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
        </div>
      </section>
    </>
  );
};
export default Reachus;
