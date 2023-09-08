import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMultiply } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../Assets/Images/Logo/Pure-N-Bright-Logo.png.webp";
import "./navbar.css";
import React from "react";
import SubBars from "./SubBars";

const Navbar = () => {
  const [click, setClick] = useState(true);
  const [navbar, setNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(50);
  const [fade, setFade] = useState(true);

  const handleClick = () => {
    console.log(click);
    setClick(!click);
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > lastScrollY) {
  //       setNavbar(false);
  //     } else {
  //       setNavbar(true);
  //     }
  //     setLastScrollY(window.scrollY);
  //   });
  // });

  // useEffect(() => {
  //   const handleFade = (event) => {
  //     if (window.scrollY > 200) {
  //       setFade(false);
  //     } else setFade(true);
  //   };
  //   window.addEventListener("scroll", handleFade);

  //   return () => {
  //     window.removeEventListener("scroll", handleFade);
  //   };
  // });

  return (
    <>
      <div
        // style={
        //   fade
        //     ? { backgroundColor: "rgba(0, 0, 0, 0)" }
        //     : { backgroundColor: "rgba(0, 0, 0, 0.5)" }
        // }
        className={navbar ? "navbar active" : "navbar"}
      >
        <div className="navbar_wrapper">
          <div className="navbar_logo">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar_lists">
            {click ? (
              <FontAwesomeIcon
                className="up_down"
                onClick={handleClick}
                icon={faBars}
              />
            ) : (
              <FontAwesomeIcon
                className="up_down"
                onClick={handleClick}
                icon={faMultiply}
              />
            )}
            <ul
              className={
                click ? "navbar_list_items" : "navbar_list_items active"
              }
            >
              <Link to={"/"}>
                <li>Home</li>
              </Link>

              <Link to={"/blog"}>
                <li>Blog</li>
              </Link>

              <SubBars
                title="Services"
                titleLink="/services"
                height={14 + "rem"}
                opt={[
                  {
                    name: "Carpet Cleaning Melbourne",
                    link: "/services/carpet-cleaning-melbourne",
                  },
                  {
                    name: "Rug Cleaning Melbourne",
                    link: "/services/rug-cleaning-melbourne",
                  },
                  {
                    name: "Rug Repair Melbourne",
                    link: "/services/rug-repair-melbourne",
                  },
                ]}
              />
              <SubBars
                title="Why Us?"
                titleLink="/why-us"
                opt={[
                  {
                    name: "FAQ",
                    link: "/faq",
                  },
                  {
                    name: "Terms and Conditions",
                    link: "/terms-and-conditions",
                  },
                ]}
              />
              <Link to={"/gallery"}>
                <li>Gallery</li>
              </Link>

              <Link to="/contact-us">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
