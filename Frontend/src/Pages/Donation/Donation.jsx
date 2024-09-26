import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import QR from "./DonationQR.png";

const Donation = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
    <Helmet>
        <title>Donation - Kanu SRK Group</title>
        <meta name="description" content="Donate to Kanu SRK Group and support our initiatives. Find our bank details and fill the form for more information." />
        <meta name="keywords" content="Donation, Kanu SRK Group, support, charitable contributions" />
        <meta name="author" content="Kanu SRK Group" />
      </Helmet>
      <div className="hero home-hero">
       
      </div>

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
            <form className="row my-5" action="#" method="POST">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="email">Whatsapp no.</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Your Whatsapp no "
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="mobile">Email</label>
                  <input
                    type="tel"
                    id="mobile"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="location">Age</label>
                  <input
                    type="text"
                    id="location"
                    className="form-control"
                    placeholder="Your Age"
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
      </section>
    </>
  );
};
export default Donation;
