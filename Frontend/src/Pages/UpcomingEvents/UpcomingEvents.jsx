import React, { useEffect } from "react";
import { Helmet } from "react-helmet"; // Import Helmet
import banner2 from "../../Assets/Banner2.png";
import banner1 from "../../Assets/Banner1.png";
import banner3 from "../../Assets/UpcomingEvent3.jpeg";
import Reachus from "../../Components/Reachus/Reachus";
import { Link } from "react-router-dom";
import "./UpcomingEvent.css";


function UpcomingEvents() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const events = [
    {
      id: 1,
      image: banner2,
      link: "/ViewMoreEvent",
      title: "Event 1",
    },
    {
      id: 2,
      image: banner1,
      link: "/ViewMoreEvent", 
      title: "Event 2",
    },
    {
      id: 3,
      image: banner3,
      link: "/ViewMoreEvent", 
      title: "Event 3",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Upcoming Events - Shri Kanu</title>
        <meta
          name="description"
          content="Join us for our upcoming events at Shri Kanu. Explore our activities and connect with the community." />
      </Helmet>

      <div className="hero home-hero"></div>

      <section className="my-3 mission">
        <div className="container">
          <h1 className="title-head">Upcoming Events</h1>

          <div className="row grid-2"> {/* Use grid-3 for layout */}
            {events.map((event) => (
              <div className="col-md-4 mb-4 Eventbtn" key={event.id}>
                <img src={event.image} alt={`Upcoming Event ${event.title}`} className="img-fluid" />
                <Link to={event.link} className="view-Event">View Event</Link>
              </div>
            ))}
          </div>

          <div className="my-5">
            <Reachus />
          </div>
        </div>
      </section>
    </>
  );
}

export default UpcomingEvents;
