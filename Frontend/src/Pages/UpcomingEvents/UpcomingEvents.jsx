import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Reachus from "../../Components/Reachus/Reachus";
import { Link } from "react-router-dom";
import "./UpcomingEvent.css";
import axios from "axios"
import { useState } from "react";

function UpcomingEvents() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [events, setEvents] = useState([])
  const getApiData = async () => {
    try {
      const res = await axios.get("https://api.kanusrkgroup.in/api/event")
      if (res.status === 200) {
        setEvents(res.data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getApiData()
  }, [])

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
                <Link to={`/ViewEvent/${event._id}`} className="view-Event">View Event</Link>
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
