import Home from "./Components/pages/Home/Home";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Components/pages/Contact/Contact";
import FAQ from "./Components/pages/FAQ/FAQ";
import Blog from "./Components/pages/Blog/Blog";
import Terms from "./Components/pages/Terms/Terms";
import Thank from "./Components/pages/Thankyou/Thank";
import WhyUs from "./Components/pages/WhyUs/WhyUs";
import Services from "./Components/pages/Services/Services";
import CarpetService from "./Components/pages/Services/CarpetService";
import BlogPageComp from "./Components/pages/Blog/BlogPageComp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* Contact Us */}
          <Route exact path="/contact-us" element={<Contact />} />
          {/* Services */}
          <Route exact path="/services" element={<Services />} />
          {/* Carpet Service */}
          <Route
            exact
            path="/services/carpet-cleaning-melbourne"
            element={<CarpetService />}
          />
          {/* Rug Service */}
          <Route
            exact
            path="/services/rug-cleaning-melbourne"
            element={<Services />}
          />
          {/* Thank You */}
          <Route exact path="/thank-you" element={<Thank />} />
          {/* Why Us */}
          <Route exact path="/why-us" element={<WhyUs />} />
          {/* Blog  */}
          <Route exact path="/blog" element={<Blog />} />
          <Route
            exact
            path="/blog/sheep-skin-rug-cleaning"
            element={<BlogPageComp />}
          />
          <Route
            exact
            path="/blog/how-to-use-baking-soda-for-rug-cleaning"
            element={<BlogPageComp />}
          />
          <Route
            exact
            path="/blog/rug-cleaning-vs-carpet-cleaning"
            element={<BlogPageComp />}
          />
          <Route
            exact
            path="/blog/why-do-I-need-a-professional-rug-cleaner"
            element={<BlogPageComp />}
          />
          <Route
            exact
            path="/blog/tips-for-cleaning-cowhide-rug"
            element={<BlogPageComp />}
          />
          <Route
            exact
            path="/blog/how-to-wash-rugs-for-best-results"
            element={<BlogPageComp />}
          />
          <Route
            exact
            path="/blog/why-you-should-prefer-carpet-steam-cleaning-over-diy-cleaning-methods"
            element={<BlogPageComp />}
          />
          <Route
            exact
            path="/blog/why-do-you-need-rug-cleaning-experts"
            element={<BlogPageComp />}
          />
          <Route
            exact
            path="/blog/what-is-best-for-you-rug-steam-dry-or-traditional-hand-cleaning"
            element={<BlogPageComp />}
          />

          <Route
            exact
            path="/blog/how-to-clean-a-rug"
            element={<BlogPageComp />}
          />
          <Route exact path="/faq" element={<FAQ />} />
          {/* Terms and Conditions */}
          <Route exact path="/terms-and-conditions" element={<Terms />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
