import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contact from "../../common/Contact/Contact";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import Review from "../../common/Review/Review";
import Works from "../../common/Works/Works";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="main_banner">
          <div className="main_banner_content">
            <h1>PURE N BRIGHT </h1>
            <h3>High Quality Rug Cleaning Service</h3>
            <p>At Affordable Prices</p>
            <button>Know More</button>
          </div>
        </div>

        <div className="pick_up section">
          <div className="pick_up heading">
            <h2>How We Work...</h2>
          </div>
          <div className="pick_up content">
            <div className="pick_up info">
              <h3>Pick Up And Drop Off Service</h3>
              <p>
                Rug Cleaning Melbourne - Cleaning the rugs using the DIY methods
                only cleans the surface, leaving behind a mix of soil and
                chemical residue. The best way to clean a rug is to get it
                cleaned professionally from the rug cleaning experts in order to
                achieve the best results. Whether your rug is a treasured
                Persian or a modern machine-made creation, the care we take when
                cleaning and sanitizing it, remains the same.
              </p>
              <p>
                Whenever we take on a new rug cleaning project, we comply with
                the guidelines. We complete a detailed analysis of the rug
                before we begin our job to decide the ideal approach to clean
                it. Generally, pre-vacuuming lifts loose dirt and it allows us
                to attack the deeper-rooted grime. In order to ensure that they
                are fully removed during the washing, localized stains and spots
                require special pre-treatment.
              </p>
            </div>
            <div className="pick_up img">
              <img
                src={require("../../../Assets/Images/Dilivery/delivery2.jpg")}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="types section">
          <div className="types heading">
            <h2>Types of Rugs</h2>
          </div>
          <div className="types content">
            <div className="types info">
              <h3>We Clean All Types Of Rugs.</h3>
              <p>
                Wool | Jute | Turkish | Viscouse | Art Silk | Silk | Moroccan |
                Sheep Skin | Cow Hide | Dhurrie | Silk | Oriental | Persian |
                Antique | Indian Rugs & Many More…
              </p>
            </div>
            <div className="types img">
              <img
                src={require("../../../Assets/Images/Types/types3.jpg")}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="review section">
          <div className="review heading"></div>
          <div className="review content">
            <Review />
          </div>
        </div>

        <div className="choose_us section">
          <div className="choose_us heading">
            <h2>Why Choose Us...?</h2>
          </div>
          <div className="choose_us content">
            <div className="choose_us info">
              <ul>
                <li>HASSLE FREE PICKUP & DROP OFF</li>
                <li>QUALITY SERVICES</li>
                <li>ECONOMICAL</li>
                <li>SANITIZATION & DISINFECTION</li>
                <li>HEALTHY ENVIRONMENT</li>
                <li>NEW LOOK</li>
              </ul>
            </div>
            <div className="choose_us img">
              <img
                src={require("../../../Assets/Images/Choose/choose1.webp")}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="protect section">
          <div className="protect heading"></div>
          <div className="protect content">
            <div className="protect info">
              <h2>Protect</h2>
              <h3>Your Valuable Rug</h3>
              <p>
                After cleaning, we recommend applying stains protectors to avoid
                further staining and to stay rugs cleaner for a longer period.
              </p>
            </div>
            <div className="protect img">
              <img
                src={require("../../../Assets/Images/Pets/pet.jpg")}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="work section">
          <div className="work heading">
            <h2>Our Recent Works</h2>
          </div>
          <div className="work content">
            <Works />
          </div>
        </div>

        <div className="contact section">
          <div className="contact heading">
            <h2>We're Here To Help...</h2>
          </div>
          <div className="contact content">
            <div className="contact img">
              <img
                src={require("../../../Assets/Images/Contact/contact.jpeg")}
                alt=""
              />
            </div>
            <div className="contact info">
              <Contact />
            </div>
            {/* <div className="contact info"></div>
            <div className="contact img">

            </div> */}
          </div>
        </div>

        <Footer />
        {/* <div className="footer section">
        </div> */}

        {/* <div className="copyright section">
          <p>
            Copyright © Pure N Bright Carpet Cleaning 2021. All rights reserved.
          </p>
        </div> */}

        <div className="fixed-icon">
          <div className="whatsapp-button">
            <a href="https://wa.me/9538989075" target={"_blank"}>
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>

          <div className="Call-now-button">
            <a href="tel:953-898-9075" target={"_blank"}>
              <FontAwesomeIcon icon={faPhone} className="phone-icon1" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
