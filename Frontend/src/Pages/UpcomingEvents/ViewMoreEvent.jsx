import React, { useEffect } from "react";
import { Helmet } from "react-helmet"; // Import Helmet
import { Link } from "react-router-dom";
import Reachus from "../../Components/Reachus/Reachus";
import banner2 from "../../Assets/Banner2.png";

const ViewMoreEvent = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Event Details - Kanu SRK Yatra Group</title> {/* Set the title */}
        <meta
          name="description"
          content="Explore the details of Malikarjun Jyotirling & Hyderabad yatra with Kanu SRK Yatra Group. Inclusive of return tickets, meals, accommodation, and more."
        /> {/* Set a description */}
      </Helmet>

      <div className="hero home-hero"></div>

      <section className="about py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5 py-5">
              <div className="banner2img">
                <img
                  src={banner2}
                  alt="banner2"
                  data-bs-toggle="modal"
                  data-bs-target="#imageModal"
                  style={{ cursor: "pointer" }}
                />
              </div>

              {/* Bootstrap Modal */}
              <div
                className="modal fade"
                id="imageModal"
                tabIndex="-1"
                aria-labelledby="imageModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="imageModalLabel">
                        Kanu SRK Yatra Group
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body text-center">
                      <img
                        src={banner2}
                        alt="banner2 full-size"
                        className="img-fluid w-50"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-1"></div>
            
            <div className="col-md-5">
              <h2 className="title-Head py-5">
                <strong>Kanu SRK Yatra Group</strong>
              </h2>
              <p className="fs-bold">
                <strong>Malikarjun Jyotirling & Hyderabad</strong>
              </p>

              <p className="fs-bold">
                <ul>
                  <li>
                    <p>Return Air Tickets By Vistara Airline.</p>
                  </li>
                  <li>
                    <p>Including Meals in Both Side Flight Journey.</p>
                  </li>
                  <li>
                    <p>02 Night Accommodation.</p>
                  </li>
                  <li>
                    <p>Return Airport Transfers.</p>
                  </li>
                  <li>
                    <p>All Tours & Transfers By AC Vehicle.</p>
                  </li>
                  <li>
                    <p>All Toll, Tax, TA, Parking & Permits.</p>
                  </li>
                </ul>
              </p>

              <p className="fs-bold">
                <strong>Contact: 9811881650, 9899029372</strong>
              </p>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewMoreEvent;
