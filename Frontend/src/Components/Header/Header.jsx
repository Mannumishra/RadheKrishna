import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import Krishnaudio from "../../Assets/song.mp3";

const Header = () => {
  const [audio] = useState(new Audio(Krishnaudio));
  const [isPlaying, setIsPlaying] = useState(false);

  // Define the handlePlayAudio function
  const handlePlayAudio = () => {
    audio.muted = false; // Unmute the audio
    audio.play().then(() => {
      setIsPlaying(true); // Update state if play succeeds
    }).catch((error) => {
      console.log("Playback failed after user interaction or auto-play policy:", error);
    });
  };

  useEffect(() => {
    // Try to auto-play audio when the component mounts
    handlePlayAudio();

    // Cleanup audio when the component unmounts
    return () => {
      audio.pause();
      audio.currentTime = 0; // Reset audio to the beginning
    };
  }, [audio]);

  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false); // Update state when paused
    } else {
      handlePlayAudio(); // Call the function to play audio
    }
  };

  const [active, setActive] = useState(false);

  const handleActiveChange = () => {
    setActive(!active);
  };

  return (
    <>
        <a href="#" className="music_float" onClick={(e) => { e.preventDefault(); toggleAudio(); }}>
       {isPlaying ? <i class="fa-solid fa-pause"></i> : <i class="fa-solid fa-play"></i>}
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=919873031650"
        target="_blank"
        className="whatsapp_float"
      >
        <i className="fa-brands fa-whatsapp whatsapp-icon"></i>
      </a>

      <a href="tel:+919873031650" target="_blank" className="call_float">
        <i className="fa-solid fa-phone-volume"></i>
      </a>

      <header>
        <div className="above-line ">
          <div className="contact">
            <div className="single-info">
              <i className="fa-solid fa-envelope-open-text"></i>
              <a href="mailto:kanusrkgroup.official@gmail.com">
                kanusrkgroup.official@gmail.com
              </a>
            </div>
            <div className="single-info">
              <i className="fa-solid fa-phone-volume"></i>
              <a href="tel:+919873031650">+91-9873031650</a>
              <a href="#" className="mx-5">
                Registration No :- 414/2023
              </a>
            </div>
          </div>

          <div className="list-unstyled social ">
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100089219941173&mibextid=ZbWKwL">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a target="_blank" href="https://www.instagram.com/kanusrkgroup?igsh=ZDhndGhxYW13NDlx">
              <i className="fab fa-instagram"></i>
            </a>
            <a target="_blank" href="https://www.youtube.com/@kanusrkgroup">
              <i className="fab fa-youtube"></i>
            </a>
          </div>

          {/* Google Translate Element */}
          <div
            id="google_translate_element"
            style={{ overflow: "hidden" }}
            className="translate-widget"
          ></div>
        </div>

        <nav>
          <div className="logo img-fluid">
            <Link to={`/`}>
              <img src={logo} alt="LOGO" />
            </Link>
          </div>
          <div className="position-relative">
            <ul
              className={`list-unstyled nav-links ${
                active ? "active" : ""
              } mb-0`}
            >
              <li>
                <Link onClick={handleActiveChange} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={handleActiveChange} to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link onClick={handleActiveChange} to="/objectives">
                  Objective
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  id="srkGroupsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SRK Groups
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="srkGroupsDropdown"
                >
                  <li>
                    <Link
                      className="dropdown-item hum-drop-down"
                      onClick={handleActiveChange}
                      to="/srk-groups"
                    >
                      SRK Bhagwat Geeta Group
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item hum-drop-down"
                      onClick={handleActiveChange}
                      to="/srk-groups1"
                    >
                      SRK Maa Bhimeshwari Kul
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item hum-drop-down"
                      onClick={handleActiveChange}
                      to="/srk-groups2"
                    >
                      SRK Yatra Group
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  id="mediaDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gallery
                </Link>
                <ul className="dropdown-menu" aria-labelledby="galleryDropdown">
                  <li>
                    <Link
                      className="dropdown-item hum-drop-down"
                      onClick={handleActiveChange}
                      to="/images"
                    >
                      Images
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item hum-drop-down"
                      onClick={handleActiveChange}
                      to="/video"
                    >
                      Videos
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link onClick={handleActiveChange} to="/SrkProducts">
                  Poshak Bhandar
                </Link>
              </li>
              <li>
                <Link onClick={handleActiveChange} to="/registration">
                  Registration
                </Link>
              </li>
              <li>
                <Link onClick={handleActiveChange} to="/feedback">
                  Feedback
                </Link>
              </li>

              <li>
                <Link onClick={handleActiveChange} to="/upcoming-events">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link onClick={handleActiveChange} to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="side-flex">
            <div className="bar" onClick={handleActiveChange}>
              <i className="fa-solid fa-bars"></i>
            </div>
            <Link to="/donation" className="donate-btn">
              Donate
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
