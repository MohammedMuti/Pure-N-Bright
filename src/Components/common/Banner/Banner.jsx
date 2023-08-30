import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Banner.css";

const Banner = (props) => {
  const path = useLocation();

  const firstPath = path.pathname.split("/")[1];
  const secondPath = path.pathname.split("/")[2];

  return (
    <React.Fragment>
      <div
        className="banner"
        style={{
          backgroundImage: `url(${
            props.background || require("../../../Assets/Images/Back/1.avif")
          })`,
        }}
      >
        <div className="banner-content">
          <div className="banner-title">
            <h1>{props.sublink2 ? props.sublink2 : props.sublink}</h1>
          </div>
        </div>
      </div>
      <div className="breadcrumbs">
        <div className="subs">
          <Link to="/">
            <p>Home</p>
          </Link>
          <FontAwesomeIcon icon={faChevronRight} />
          <Link to={`/${firstPath}`}>
            <p
              className="activeC"
              style={props.sublink2 ? { color: "black" } : null}
            >
              {props.sublink}
            </p>
          </Link>
          {props.sublink2 ? <FontAwesomeIcon icon={faChevronRight} /> : null}
          <Link to={`/${firstPath}/${secondPath}`}>
            <p className="activeC">{props.sublink2}</p>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
