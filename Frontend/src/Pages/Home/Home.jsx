import React, { useEffect } from "react";
import About from "../../Components/HomeAbout/HomeAbout";
import kannuTrust from "../../Assets/kannutrust.jpeg";
import kannuTrustslide from "../../Assets/kannutrust1.jpg";
import CapturedMovements from "../../Assets/Movements.png";
import banner2 from "../../Assets/Banner2.png";
import banner1 from "../../Assets/Banner1.png";
import Thakurji from "../../Assets/1.jpg";
import RadhaKrishna from "../../Assets/2.jpg";
import Geeta from "../../Assets/3.jpg";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";
import "./Home.css";
import Reachus from "../../Components/Reachus/Reachus";
import Slider from "react-slick";
import AutoPlaySound from "../../Components/AutoPlaySound/AutoPlaySound";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // const [momentImages,setMomentImages] = useState([])

  const setMomentImages = [
    CapturedMovements,
    CapturedMovements,
    CapturedMovements,
    CapturedMovements,
    CapturedMovements,
    CapturedMovements,
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    
  };

  const slides = [
    { id: 1, image: Thakurji },
    { id: 2, image: RadhaKrishna },
    { id: 3, image: Geeta },
    { id: 4, image: kannuTrustslide },
  ];

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
        <Slider {...settings} className="slider">
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
            <img src={kannuTrust} alt="" />
          </div>
          <div className="subcribe">
            <h2>Subscribe us to know more about our events and updates.</h2>
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
              {setMomentImages &&
                setMomentImages.map((image, index) => (
                  <img src={image} alt="moments-image" key="index" />
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
            <div className="col-md-4 mb-2">
              <img src={banner2} alt="banner2" />
            </div>
            <div className="col-md-4">
              <img src={banner1} alt="banner1" />
            </div>
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
