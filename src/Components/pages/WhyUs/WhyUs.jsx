import Banner from "../../common/Banner/Banner";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import "./WhyUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import ContactComp from "../../common/Contact/ContactComponent";

const WhyUs = () => {
  return (
    <>
      <Navbar />
      <Banner sublink="Why Us?" slogan="Why should you choose us?" />
      <div className="why_us">
        <div className="heading">
          <h4>WHY US??</h4>
        </div>
        <div className="content">
          <p>
            Today, all of our clienteles can trust on the skill, politeness, and
            prompt work attitude of our operators and our office staff, all
            working together to make house cleaning a breeze for our current and
            prospective customers.
          </p>
          <p>
            In the past the people in Melbourne had been looking for the best
            value for money domestic cleaning service in Melbourne, but there
            wasn’t much choice available. Although there were some companies
            doing domestic cleaning, the prices were too high. We thought of
            changing the situation. This is when we decided to set up a
            <span> domestic cleaning service in Melbourne</span> that offers the
            best services at the best price.
          </p>
          <p>
            With an efficient, affordable and a competent cleaning service in
            mind, we started <span> Pure N Bright Cleaning</span>. We knew it
            won’t be possible without the help of a fully skilled, expert
            cleaning and customer service staff. Delivering the best cleaning
            services is not easy unless you have experts working for you. So we
            started to hunt, select and train the professionals and brushed
            their skills even further. Now, all our clients can trust on the
            skill, politeness and prompt work attitude of our cleaners and
            support staff, alike. All of them together work to make house
            cleaning a breeze for our customers.
          </p>
          <p>
            Working in such a challenging industry needs versatility and
            competence on behalf of our administration and the operators; this
            is why Pure N Bright Cleaners never halts refining and developing.
            We regularly trail manufacturing companies for gaining and
            implementing fresher, improved and more organized cleaning systems
            and gears to deliver customers a cost effective, class cleaning
            every time.
          </p>
          <p>
            The company uses the environmental friendly materials as their
            contribution towards the environment sustainability and to take care
            of the health and well-being of our customers and their loved ones.
            If you’re in the market looking for an excellent cleaning service
            provider, that will deliver the best results – no ifs or buts and so
            at the best price, look no further as
            <span> Pure N Bright cleaners</span> are the best to rely on for
            help.
          </p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faChevronCircleRight} />
              Fully insured
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronCircleRight} />
              Locally owned and operated company
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronCircleRight} />
              Latest modern technology and cleaning equipments
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronCircleRight} />
              Environmentally friendly chemicals – not oil-based chemicals
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronCircleRight} />
              Always on time, arriving in professional uniforms for easy
              identification
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronCircleRight} />
              Domestic or commercial cleaning work
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronCircleRight} />
              “On-call” service available for urgent weekend or after-hours
              jobs.
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronCircleRight} />
              Fully insured
            </li>
          </ul>
        </div>
      </div>
      <ContactComp />
      <Footer />
    </>
  );
};

export default WhyUs;
