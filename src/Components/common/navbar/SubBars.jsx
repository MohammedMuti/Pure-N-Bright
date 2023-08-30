import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const SubBars = (props) => {
  const [dropDown, setDropDown] = useState(false);

  const handleDropDown = () => {
    setDropDown(!dropDown);
    console.log(dropDown);
  };

  const setDropDownTrue = () => {
    setDropDown(true);
  };

  const setDropDownFalse = () => {
    setDropDown(false);
  };

  //   console.log(props.opt);

  return (
    <>
      <Link to={props.titleLink}>
        <li
          className="sublinks"
          onMouseLeave={setDropDownFalse}
          onMouseEnter={setDropDownTrue}
          onClick={handleDropDown}
        >
          {props.title}
          {dropDown ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronRight} />
          )}
          <ul
            className={dropDown ? "drop-down-nav active" : "drop-down-nav"}
            onMouseLeave={setDropDownFalse}
          >
            {/* {props.opt?.map((i) => {
            console.log(i);
          })} */}
            {props.opt
              ? props.opt?.map((i) => {
                  return (
                    <Link to={i.link}>
                      <li>{i.name}</li>
                    </Link>
                  );
                })
              : null}
            {/* <li>
            <Link to={"/services/carpet-cleaning-melbourne"}>
              {props.option1}
            </Link>
          </li>
          <li>
            <Link to={"/services/rug-cleaning-melbourne"}>{props.option1}</Link>
          </li> */}
          </ul>
        </li>
      </Link>
    </>
  );
};

export default SubBars;
