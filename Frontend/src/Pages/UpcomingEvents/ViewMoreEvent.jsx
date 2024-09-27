import React, { useEffect } from "react";
import { Helmet } from "react-helmet"; 
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios"

const ViewMoreEvent = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const { id } = useParams()

  const [event, setEvent] = useState({})

  const getApiData = async () => {
    try {
      const res = await axios.get("https://api.kanusrkgroup.in/api/event/" + id)
      if (res.status === 200) {
        setEvent(res.data.data)
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
                  src={event.image}
                  alt="banner2"
                />
              </div>

            </div>

            <div className="col-md-1"></div>

            <div className="col-md-5">
              <h2 className="title-Head py-5">
                <strong>{event.name}</strong>
              </h2>
              <p className="fs-bold"
              dangerouslySetInnerHTML={{ __html: event.description }}
              />
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewMoreEvent;
