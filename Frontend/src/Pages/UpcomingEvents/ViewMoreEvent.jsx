import React, { useEffect } from "react";
import { Helmet } from "react-helmet"; // Import Helmet
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
            <div className="col-md-5">
              <div className="banner2img">
                <img
                  src={banner2}
                  alt="banner2"
                />
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
