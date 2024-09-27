import React, { useEffect, useRef } from "react";
import About from "../../Components/HomeAbout/HomeAbout";
import kannuTrust from "../../Assets/kannutrust.jpeg";
import kannuTrustslide from "../../Assets/kannutrust1.jpg";
import Thakurji from "../../Assets/1.jpg";
import RadhaKrishna from "../../Assets/2.jpg";
import Geeta from "../../Assets/3.jpg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./Home.css";
import Reachus from "../../Components/Reachus/Reachus";
import Slider from "react-slick";
import { useState } from "react";
import axios from "axios"

const Home = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Reference to the slider
  const sliderRef = useRef(null);

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  // Slider data
  const slides = [
    { id: 1, image: Thakurji },
    { id: 2, image: RadhaKrishna },
    { id: 3, image: Geeta },
    { id: 4, image: kannuTrustslide },
  ];

  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await axios.get("https://api.kanusrkgroup.in/api/gallery");
        if (response.status === 200 && response.data.success) {
          setImages(response.data.data); // Set images from the API response
        }
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchGalleryData();
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
        <title>Home - Kanu SRK Group</title>
        <meta
          name="description"
          content="Welcome to Kanu SRK Group, where every event is crafted into an unforgettable moment."
        />
        <meta
          name="keywords"
          content="Kanu SRK Group, Events, Gallery, Upcoming Events"
        />
        <meta name="author" content="Kanu SRK Group" />
      </Helmet>

      <div className="home-slider">
        <Slider {...settings} ref={sliderRef} className="slider">
          {slides.map((slide) => (
            <div key={slide.id} className="slide-item">
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="slide-image"
              />
            </div>
          ))}
        </Slider>

        {/* Next and Previous buttons */}
        <button
          className="prev-button"
          onClick={() => sliderRef.current.slickPrev()}
        >
          &#8249; {/* Left arrow symbol */}
        </button>
        <button
          className="next-button"
          onClick={() => sliderRef.current.slickNext()}
        >
          &#8250; {/* Right arrow symbol */}
        </button>
      </div>

      <div className="container text-center">
        <div className="row justify-content-center btns">
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <Link to="/registration" className="btn member-btn w-70">
              Become a Member
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <Link to="/donation" className="btn donate-btn w-70">
              Donate Now
            </Link>
          </div>
        </div>
      </div>

      <About />

      <section className="joinus">
        <div className="container-fluid">
          <div className="banner">
            <img src={kannuTrust} alt="Kannu Trust" />
          </div>
          <div className="subcribe">
            <h2>Subscribe to know more about our events and updates.</h2>
            <Link to={`/contact`} className="btn-Subscribe">
              Subscribe
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="imagetext">
            <h2 className="title-head">Captured Moments</h2>
            <div className="grid-3">
              {images &&
                images.slice(0, 6).map((image, index) => (
                  <img src={image.gallery} alt="moments-image" key={index} />
                ))}
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-12 text-center mx-auto">
              <Link to={`/images`} className="view-gallerybtn">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="title-head">Upcoming Events</h2>
          <div className="row">
            <div className="col-md-2"></div>
            {
              events.slice(0, 2).map((item, index) =>
                <div className="col-md-4" style={{display:"flex",flexDirection:"column" ,alignItems:"center"}}>
                  <img src={item.image} alt="banner2" />
                  <Link to={`/ViewEvent/${item._id}`} className="mybtn">View Event</Link>
                </div>
              )
            }
            <div className="col-md-2"></div>
          </div>
          <div className="row my-5">
            <div className="col-md-12 text-center mx-auto">
              <Link to={`/upcoming-events`} className="view-gallerybtn">
                Explore Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Reachus />
    </>
  );
};

export default Home;
