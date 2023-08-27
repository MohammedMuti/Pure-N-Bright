import "./Blog.css";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BlogComp = (props) => {
  return (
    <>
      <div className="blog">
        <div className="blog img">
          <img src={props.img} alt="" />
        </div>
        <div className="blog info">
          <h4>{props.title}</h4>
          <button>
            Know More <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogComp;
