import React, { useEffect } from "react";
import Reachus from "../../Components/Reachus/Reachus";
import { Helmet } from "react-helmet";
const ContactPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Contact Us - Kanu SRK Group</title>
        <meta
          name="description"
          content="Get in touch with Kanu SRK Group for inquiries and support."
        />
        <meta
          name="keywords"
          content="Contact, Kanu SRK Group, support, inquiries"
        />
        <meta name="author" content="Kanu SRK Group" />
      </Helmet>
      {/* bread-content ==  */}
      <div className="hero home-hero"></div>

      <section className="my-5">
        <Reachus />
      </section>

      <section className="location">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.2919497861167!2d77.11646607529326!3d28.74069907560584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0124afe2c4bf%3A0xc33d4335fee763c5!2sb%20block%20pocket%2C%201%2C%20Pocket%201%2C%20Sector%2017%2C%20Rohini%2C%20Delhi%2C%20110085!5e0!3m2!1sen!2sin!4v1726913735035!5m2!1sen!2sin"
                style={{ height: "400px", width: "100%" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
