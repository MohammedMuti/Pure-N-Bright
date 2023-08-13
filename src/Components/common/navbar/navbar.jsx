import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMultiply } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../Assets/Images/Logo/Pure-N-Bright-Logo.png.webp";
import "./navbar.css";
import React from "react";

const Navbar = () => {
  const [click, setClick] = useState(true);
  const [navbar, setNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(50);
  const [fade, setFade] = useState(true);

  const handleClick = () => {
    console.log(click);
    setClick(!click);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > lastScrollY) {
        setNavbar(false);
      } else {
        setNavbar(true);
      }
      setLastScrollY(window.scrollY);
    });
  });

  useEffect(() => {
    const handleFade = (event) => {
      if (window.scrollY > 200) {
        setFade(false);
      } else setFade(true);
    };
    window.addEventListener("scroll", handleFade);

    return () => {
      window.removeEventListener("scroll", handleFade);
    };
  });

  return (
    <>
      <div
        style={
          fade
            ? { backgroundColor: "rgba(0, 0, 0, 0)" }
            : { backgroundColor: "rgba(0, 0, 0, 0.5)" }
        }
        className={navbar ? "navbar active" : "navbar"}
      >
        <div className="navbar_wrapper">
          <div className="navbar_logo">
            <img src={logo} alt="" />
          </div>
          <div className="navbar_lists">
            {click ? (
              <FontAwesomeIcon onClick={handleClick} icon={faBars} />
            ) : (
              <FontAwesomeIcon onClick={handleClick} icon={faMultiply} />
            )}
            <ul
              className={
                click ? "navbar_list_items" : "navbar_list_items active"
              }
            >
              <li>About Us</li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>Gallery</li>
              <li>Projects</li>
            </ul>
          </div>
        </div>
        {/* <div className="navbar-container">
          <div className="navbar-menu">
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="navbar-image">
            <img src={svg} alt="" />
          </div>
          <div className="navbar-links">
            <ul className={click ? "lists" : "active"}>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Home</Link>
              </li>
            </ul>
            <button className="bars-btn" onClick={handleClick}>
              btn
            </button>
          </div>
          <div className="button">
            <FontAwesomeIcon icon={faPhone} />
            <button>Call-Now</button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
